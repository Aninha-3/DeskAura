import React, { useState } from "react";
// Importe a sua função de API real para solicitar a redefinição
// import { solicitarRedefinicaoSenha } from '../../services.ts/api';

// Removidas importações de 'react-router-dom' que estavam causando erros.
// import { useNavigate, Link } from "react-router-dom";

// O ícone 'react-icons/sl' foi substituído por um SVG embutido
// O 'Login.module.css' foi substituído por estilos embutidos

function ResetPassword() {
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [tipoMensagem, setTipoMensagem] = useState<'erro' | 'sucesso'>('erro');
  const [carregando, setCarregando] = useState(false);
  const [sucesso, setSucesso] = useState(false); 
  
  // Removido hook 'useNavigate'
  // const navigate = useNavigate();

  // Função de simulação de API (substitua pela sua chamada real)
  const simularApiRedefinicao = (email: string): Promise<void> => {
    console.log("Solicitando redefinição para:", email);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === "erro@exemplo.com") {
          reject(new Error("Email não encontrado"));
        } else {
          resolve();
        }
      }, 1500);
    });
  };

  const handleResetSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCarregando(true);
    setMensagem('');
    setTipoMensagem('erro');

    try {
      // ATENÇÃO: Substitua 'simularApiRedefinicao' pela sua função de API real
      // ex: await solicitarRedefinicaoSenha(email);
      await simularApiRedefinicao(email);

      setMensagem('Link para redefinição de senha enviado para o seu email.');
      setTipoMensagem('sucesso');
      setSucesso(true); // Desabilita o formulário
    } catch (error) {
      console.error(error);
      setMensagem('Email não encontrado. Verifique e tente novamente.');
      setTipoMensagem('erro');
    } finally {
      setCarregando(false);
    }
  };

  // Componente SVG para a seta de "voltar"
  const VoltarIcon = ({ size = 25 }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  );

  return (
    <>
      {/* Os estilos do 'Login.module.css' foram movidos para cá 
        para evitar erros de importação no ambiente. 
      */}
      <style>{`
        :root {
          --cor-primaria: #2E8B57;
          --cor-erro: #d32f2f;
          --cor-sucesso: #2e7d32;
          --cor-texto-claro: #555;
        }

        .voltar {
          position: absolute;
          top: 20px;
          left: 20px;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--cor-primaria);
          transition: color 0.2s;
        }

        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 25px;
          max-width: 420px;
          margin: 80px auto;
          margin-top: 11pc;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          border-radius: 10px;
          background-color: #ffffff;
          width: 90%;
          position: relative; /* Adicionado para o botão voltar */
        }

        .titulo {
          color: var(--cor-primaria);
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 30px;
          align-self: flex-start;
          width: 100%;
          text-align: center;
        }

        .formulario {
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .input {
          width: 100%;
          padding: 15px;
          margin-bottom: 20px;
          border: 1.5px solid var(--cor-primaria);
          border-radius: 25px;
          font-size: 1rem;
          box-sizing: border-box;
          transition: box-shadow 0.2s, border-color 0.2s;
        }

        .input:focus {
          outline: none;
          box-shadow: 0 0 0 2px rgba(46, 139, 87, 0.2);
          border-color: var(--cor-primaria);
        }

        .botao {
          width: 100%;
          padding: 15px;
          border-radius: 25px;
          border: 1.5px solid var(--cor-primaria);
          background-color: #fff;
          color: var(--cor-primaria);
          font-size: 1.1rem;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s, color 0.3s;
          margin-top: 10px;
        }

        .botao:hover:not(:disabled) {
          background-color: var(--cor-primaria);
          color: #fff;
        }

        .botao:disabled {
          background-color: #f0f0f0;
          color: #aaa;
          border-color: #ccc;
          cursor: not-allowed;
        }

        .mensagemErro,
        .mensagemSucesso {
          text-align: center;
          margin-bottom: 15px;
          font-weight: 500;
          margin-top: 10px;
        }

        .mensagemErro {
          color: var(--cor-erro);
        }

        .mensagemSucesso {
          color: var(--cor-sucesso);
        }

        .signupLink {
          font-size: 0.9rem;
          color: var(--cor-texto-claro);
          text-align: center;
          margin-top: 25px;
        }

        .signupLink a {
          color: var(--cor-primaria);
          text-decoration: none;
          font-weight: 600;
        }

        @media (max-width: 600px) {
          .container {
            margin: 0;
            padding: 30px 20px;
            width: 100%;
            max-width: 100%;
            box-shadow: none;
            border-radius: 0;
            min-height: 100vh; /* Garante que ocupe a tela toda */
            justify-content: center; /* Centraliza verticalmente no mobile */
          }

          .titulo {
            font-size: 2rem;
          }

          .botao {
            font-size: 1rem;
          }
          
          .voltar {
            top: 30px; /* Ajuste para o padding do container */
            left: 20px;
          }
        }
      `}</style>

      {/* As classes CSS agora são strings simples */}
      <div className="container">
        {/* O botão "voltar" agora usa window.history.back() */}
        <button className="voltar" onClick={() => window.history.back()}>
          <VoltarIcon size={25} />
        </button>
        
        <h1 className="titulo">Redefinir Senha</h1>
        
        <form onSubmit={handleResetSubmit} className="formulario">
          
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Endereço de email"
            className="input"
            disabled={carregando || sucesso}
          />

          {mensagem && (
            <p className={
              tipoMensagem === 'sucesso' 
                ? "mensagemSucesso" 
                : "mensagemErro"
            }>
              {mensagem}
            </p>
          )}

          <button 
            type="submit" 
            className="botao" 
            disabled={carregando || sucesso}
          >
            {carregando ? "Enviando..." : "Enviar Link de Redefinição"}
          </button>

          <div className="signupLink">
            {/* O 'Link' foi substituído por uma tag <a> padrão */}
            <p>Lembrou sua senha? <a href="/login">Voltar para o Login</a></p>
          </div>
        </form>
      </div>
    </>
  );
}

export default ResetPassword;


