import type { FC } from "react";
import styles from "./Produto.module.css";
import { Link } from "react-router-dom";

const Produto: FC = () => {
  const produto = {
    nome: "AUONE",
    descricao:
      "Kit de irrigação automatizada 'faça você mesmo' (DIY). Monitore a umidade do solo e regue suas plantas de forma inteligente com este sistema baseado em microcontrolador.",
    preco: "R$ 499,99",
    imagemUrl:
      "https://placehold.co/600x600/e2e8f0/4a5568?text=Imagem+do+AUONE",
    altText: "Kit de irrigação automatizada AUONE",
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* Imagem */}
        <div className={styles.imageSection}>
          <img
            src={produto.imagemUrl}
            alt={produto.altText}
            className={styles.image}
          />
        </div>

        {/* Conteúdo */}
        <div className={styles.content}>
          <h1 className={styles.titulo}>{produto.nome}</h1>
          <p className={styles.descricao}>{produto.descricao}</p>
          <div>
            <span className={styles.preco}>{produto.preco}</span>
          </div>

          <div className={styles.botoes}>
            <button className={styles.botaoContato}>Entrar em Contato <Link to="/Contato"></Link></button>
            <button className={styles.botaoInfo}>Mais Informações</button>
          </div>

          <div className={styles.recursos}>
            <h3 className={styles.recursosTitulo}>Recursos Principais:</h3>
            <ul className={styles.recursosLista}>
              <li>Sensor de umidade do solo</li>
              <li>Bomba de água compacta</li>
              <li>Microcontrolador com WiFi (ESP)</li>
              <li>Fácil montagem e programação</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produto;
