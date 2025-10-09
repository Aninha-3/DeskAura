import { useState, useRef, useEffect } from 'react';
import type { FormEvent } from 'react';
import { FaTimes } from 'react-icons/fa';
import { RiRobot3Line } from "react-icons/ri";
import { IoSend } from 'react-icons/io5';
import Aurelio from '../assets/aurelio.png';
import styles from './Assistente.module.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import BotaoChat from '../assets/ButtonAss.png';

interface Message {
  role: 'user' | 'assistant' | '';
  content: string;
  error?: boolean;
}

interface QA {
  id: string;
  question: string;
  answer: string;
}

const predefinedQA: QA[] = [
  {
    id: '1',
    question: 'Como eu adquiro o AUONE?',
    answer: 'Para adquirir o AUONE, acesse nosso site oficial e siga as instruções na seção "Como comprar".'
  },
  {
    id: '2',
    question: 'Como o sistema funciona?',
    answer: 'O sistema funciona através de sensores conectados ao hub central, que envia dados para o aplicativo em tempo real.'
  },
  {
    id: '3',
    question: 'Para que serve?',
    answer: 'O AUONE serve para monitorar ambientes residenciais, oferecendo dados de temperatura, umidade e luminosidade.'
  },
  {
    id: '4',
    question: 'Quem são os colaboradores?',
    answer: 'O projeto foi desenvolvido pela equipe AuOne, composta por engenheiros, designers e especialistas em IoT.'
  },
  {
    id: '5',
    question: 'Como surgiu a ideia do AURA?',
    answer: 'A ideia surgiu da necessidade de monitoramento ambiental acessível e integrado à automação residencial.'
  },
  {
    id: '6',
    question: 'Como conectar com o dispositivo?',
    answer: 'Você pode conectar o dispositivo via Wi-Fi seguindo o tutorial na aba "Configurações" do aplicativo.'
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
      const found = predefinedQA.find(q => q.id === input.trim());

      const reply: Message = found
        ? { role: 'assistant', content: found.answer }
        : {
            role: 'assistant',
            content: `Desculpe, não reconheço essa opção. Tente usar um número de 1 a ${predefinedQA.length}.`,
            error: true
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
              <p>Olá</p>
              <p>Eu sou o Aurélio e estou aqui para te ajudar com qualquer dúvida!</p>
            </div>

            <div className={styles.questionMessage}>
              <p className={styles.titleMessage}>Escolha uma pergunta:</p>
              {predefinedQA.map((q) => (
                <p key={q.id}>{q.id}. {q.question}</p>
              ))}
            </div>

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${styles.message} ${styles[msg.role]} ${msg.error ? styles.errorMessage : ''}`}
              >
                {msg.role === 'assistant' && (
                  <div className={styles.botIcon}>
                    <RiRobot3Line />
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
                  <RiRobot3Line />
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
              placeholder={`Digite um número de 1 a ${predefinedQA.length}...`}
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
