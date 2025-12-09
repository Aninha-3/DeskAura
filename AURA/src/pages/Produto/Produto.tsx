import styles from "./Produto.module.css";
import auoneImg from "../../assets/auone.png"; 

const Produto = () => {
  const produto = {
    nome: "AUONE",
    descricao:
      "Kit de irrigação automatizada 'faça você mesmo' (DIY). Monitore a umidade do solo e regue suas plantas de forma inteligente com este sistema baseado em microcontrolador.",
    
    imagemUrl: auoneImg, 
    altText: "Kit de irrigação automatizada AUONE",
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img
          src={produto.imagemUrl}
          alt={produto.altText}
          className={styles.image}
        />

        <div className={styles.content}>
          <h1 className={styles.titulo}>{produto.nome}</h1>
          <p className={styles.descricao}>{produto.descricao}</p>

          <div className={styles.botoes}>
            <a
              href="https://wa.me/5511916204211?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20AUONE"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.botaoContato}
            >
              Entrar em Contato
            </a>
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
