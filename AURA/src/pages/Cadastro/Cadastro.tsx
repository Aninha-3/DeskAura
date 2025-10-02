import { useState } from "react";
import { cadastrarUsuario } from "../../services.ts/api";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {

      //Chama a api e espera a resposta
      const resposta = await cadastrarUsuario(nome, email, senha);
      setMensagem("Cadastro realizado com sucesso!");
      console.log(resposta);
    } catch (error) {
      setMensagem("Erro ao cadastrar usuário");
      console.error(error);
    }
  };

 
}

export default Cadastro;
