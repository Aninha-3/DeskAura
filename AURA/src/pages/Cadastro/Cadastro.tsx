import { useState } from "react";
import { cadastrarUsuario } from "../../services.ts/api";
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const resposta = await cadastrarUsuario(nome, email, senha);
      setMensagem("Cadastro realizado com sucesso!");
      // Login automático: armazena o token e o usuário no contexto
      auth?.login({ user: resposta.user, token: resposta.token });
      navigate('/simulador');
    } catch (error) {
      setMensagem("Erro ao cadastrar usuário");
      console.error(error);
    }
  };
  // ... restante do código

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nome}
        placeholder="Nome"
        onChange={(e) => setNome(e.target.value)}
        required
      ></input>
      <input type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
       <input
      type="password"
      placeholder="Senha"
      value={senha}
      onChange={(e) => setSenha(e.target.value)}
      required
    />
    <button type="submit">Cadastrar</button>
    {mensagem && <p>{mensagem}</p>}
    </form>
  )

}

export default Cadastro;
