import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
//import { solicitarRedefinicaoSenha } from '../../services.ts/api'; // Precisaremos criar esta função
import styles from './redefinir.senha.module.css'; // Crie um CSS para ele
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
            // Chama a nova função da API
            // await solicitarRedefinicaoSenha(email);
            setMensagem('Se o e-mail estiver cadastrado, você receberá um link para redefinir sua senha em breve. Verifique sua caixa de entrada e spam.');
        } catch (error) {
            console.error(error);
            // É uma boa prática de segurança não confirmar se um e-mail existe ou não.
            // Por isso, a mensagem de erro é genérica.
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
            <h2 className={styles.redefinir_titulo} >Redefinir Senha</h2>
            <p>Digite seu e-mail para receber o link de redefinição.</p>
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
                    {loading ? 'Enviando...' : 'Enviar Link de Redefinição'}
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