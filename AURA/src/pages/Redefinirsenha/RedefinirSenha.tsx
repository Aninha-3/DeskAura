import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styles from './redefinir.senha.module.css';
import { Link } from "react-router-dom";
import { SlArrowLeft } from "react-icons/sl";

function RedefinirSenha() {
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');

  const navigate = useNavigate();

  const handleResetSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setMensagem('');
    setErro('');

    try {
      // Chamada ao backend para solicitar redefinição
      // await fetch("https://seu-backend.onrender.com/auth/forgot-password", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email }),
      // });

      setMensagem('Se o e-mail estiver cadastrado, você receberá um código em breve.');

      // redireciona para a tela de confirmar código após 1,5s
      setTimeout(() => navigate("/redefinir/confirmar-codigo"), 1500);

    } catch (error) {
      console.error(error);
      setErro('Ocorreu um erro ao processar sua solicitação. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.redefinir_container}>
      <button className={styles.redefinir_voltar} onClick={() => navigate(-1)}>
        <SlArrowLeft size={25} />
      </button>
      <h2 className={styles.redefinir_titulo}>Redefinir Senha</h2>
      <p>Digite seu e-mail para receber o código de redefinição.</p>
      <form onSubmit={handleResetSubmit} className={styles.redefinir_form}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Enviando...' : 'Enviar Código'}
        </button>
        {mensagem && <p className={styles.redefinir_sucesso}>{mensagem}</p>}
        {erro && <p className={styles.redefinir_erro}>{erro}</p>}
      </form>
      <div className={styles.redefinir_voltarLogin}>
        <Link to="/login">Voltar para o Login</Link>
      </div>
    </div>
  );
}

export default RedefinirSenha;
