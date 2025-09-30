import { useState, useRef, useEffect } from 'react';
import type { FormEvent } from 'react';
import { FaTimes, FaRobot } from 'react-icons/fa';
import { IoSend } from 'react-icons/io5';
import Aurelio from '../assets/aurelio.png';
import styles from './Assistente.module.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import BotaoChat from '../assets/ButtonAss.png';

interface Message {
  role: 'user' | 'assistant' | '';
  content: string;
  error?: boolean; // flag para mensagem de erro
}

const predefinedQA: { question: string; answer: string }[] = [
  {
    question: '1',
    answer: 'Para se cadastrar, clique no botão "Cadastro" e preencha todos os campos obrigatórios.'
  },
  {
    question: '2',
    answer: 'Você pode redefinir sua senha clicando em "Esqueci minha senha" na tela de login.'
  },
  {
    question: '3',
    answer: 'Atualmente, suportamos sensores de umidade, luminosidade e temperatura.'
  },
  {
    question: '4',
    answer: 'Na aba "Gráficos", você pode ver as leituras de todos os sensores em tempo real ou nas últimas 24 horas.'
  },
  {
    question: '5',
    answer: 'O AURA foi desenvolvido pela equipe AuOne, com foco em automação residencial e monitoramento ambiental.'
  }
];

const Assistent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ role: '', content: '' }]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    setTimeout(() => {
      const found = predefinedQA.find(q =>
        input.toLowerCase().includes(q.question.toLowerCase())
      );

      const reply: Message = {
        role: 'assistant',
        content: found?.answer || 'Desculpe, não temos essa função ainda 😔. Pode reformular a pergunta?',
        error: !found // marca como erro se não encontrou
      };

      setMessages((prev) => [...prev, reply]);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className={styles.container}>
      {isOpen ? (
        <div className={styles.chatWindow}>
          {/* Header */}
          <div className={styles.header}>
            <div className={styles.headerContent}>
              <img src={Aurelio} alt="Aurelio" className={styles.headerAvatar} />
              <div>
                <h3>Aurelio Assistant</h3>
                <p className={styles.status}>{isLoading ? 'Digitando...' : 'Online'}</p>
              </div>
            </div>
            <button className={styles.closeButton} onClick={toggleChat}>
              <FaTimes />
            </button>
          </div>

          {/* Messages */}
          <div className={styles.messages}>
            <div className={styles.welcomeMessage}>
              <p>Boa tarde usuário 😁</p>
              <p>Eu sou o Aurélio e estou aqui para te ajudar com qualquer dúvida!</p>
            </div>

            <div className={styles.questionMessage}>
              <p className={styles.titleMessage}>Escolha uma pergunta:</p>
              <p>1. Como eu adquiro o AUONE?</p>
              <p>2. Como o sistema funciona?</p>
              <p>3. Para que serve?</p>
              <p>4. Quem são os colaboradores?</p>
              <p>5. Como surgiu a ideia do AURA?</p>
              <p>6. Como conectar com o dispositivo?</p>
            </div>

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${styles.message} ${styles[msg.role]} ${msg.error ? styles.errorMessage : ''}`}
              >
                {msg.role === 'assistant' && (
                  <div className={styles.botIcon}>
                    <FaRobot />
                  </div>
                )}
                <div className={styles.messageContent}>
                  <div className={styles.markdownTableWrapper}>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {msg.content}
                    </ReactMarkdown>
                  </div>
                  <span className={styles.messageTime}>
                    {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className={`${styles.message} ${styles.assistant}`}>
                <div className={styles.botIcon}>
                  <FaRobot />
                </div>
                <div className={styles.typingIndicator}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form className={styles.inputForm} onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite o número da sua mensagem..."
              disabled={isLoading}
              autoFocus
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              aria-label="Enviar mensagem"
            >
              <IoSend className={styles.sendIcon} />
            </button>
          </form>
        </div>
      ) : (
        <button
          className={styles.floatingButton}
          onClick={toggleChat}
          aria-label="Abrir chat"
        >
          <img src={BotaoChat} alt="Abrir chat" className={styles.buttonImage} />
          <span className={styles.notificationBadge}>1</span>
        </button>
      )}
    </div>
  );
};

export default Assistent;
