import './Hero.modules.css';
import logoFooter from '../assets/logoVerde.png'
import Historia from '../assets/nossaHist.png'
import { FaTemperatureHalf, FaRegCircleCheck, FaCheck } from "react-icons/fa6";
//  <img src={Produto} alt="Dispositivo Aura" />

export function Hero() {
  return (
    <div className="container-hero">
      {/* Gráfico */}
      <div className="container-graf">
        <h1 className="title-graf"> Crescimento das Plantas</h1>
        <div className="graf-img">
          <div className="chart-placeholder">
            <div className="chart-bar" style={{ height: '60%' }}></div>
            <div className="chart-bar" style={{ height: '80%' }}></div>
            <div className="chart-bar" style={{ height: '45%' }}></div>
            <div className="chart-bar" style={{ height: '75%' }}></div>
            <div className="chart-bar" style={{ height: '90%' }}></div>
            <div className="chart-bar" style={{ height: '70%' }}></div>
          </div>
        </div>
        <h1 className="descri-graf">45.868 Plantas</h1>
        <h2 className="avali-graf">Obteve um desempenho melhor do que o último mês</h2>
      </div>

      {/* Temperatura */}
      <div className="container-temp">
        <h1 className="title-temp">Temperatura</h1>
        <h1 className="temp">22ºC</h1>
        <div className="temp-icon">
          <FaTemperatureHalf />
        </div>
        <p className="avali-graf">Mín: 20ºC | Máx: 26ºC | Média: 22ºC</p>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '70%' }}></div>
        </div>
      </div>

      {/* Saúde das Plantas */}
      <div className="container-umid">
        <h1 className="title-umid"> Saúde das Plantas</h1>
        <div className="box-umid">
          <h1 className="umid">85%</h1>
        </div>
        <h2 className="avali-umid">Ótima</h2>
        <p className="avali-graf">Ideal para crescimento saudável</p>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '85%' }}></div>
        </div>
      </div>

      {/* Texto informativo */}
      <h1 className="info-hero">Acesso a gráficos gerados em tempo real</h1>

      {/* Seção de contrato */}
      <div className='contrate-section'>
        <h1 className='title-cont'>Transforme a sua plantação</h1>
        <h1 className='subtitle-cont'>Hoje Mesmo</h1>
        <p className='paragraph-cont'>
          Junte-se a mais de 5.000 pessoas que já descobriram o futuro da agricultura sustentável
        </p>

        {/* Botão com email */}
        <div className='btn-contrate'>
          <a className='link-btn' href="auraservicosbr@gmail.com">
            auraservicosbr@gmail.com
          </a>
        </div>

        {/* Certificado */}
        <div className='certificado'>
          <FaRegCircleCheck />
          <span>Certificado de Garantia</span>
        </div>
      </div>

      {/* About */}
      <div className='about'>
        <img src={logoFooter} alt="Logo da Aura" />
        <h1 className='about-text'>
          Quem somos?
        </h1>
        <p className='about-paragraph'>
          Desenvolvemos um sistema de monitoramento ambiental inteligente, utilizando sensores integrados a plataformas embarcadas (Arduino, ESP32 e LoRa).
          <br /><br />
          Nosso sistema coleta informações em tempo real sobre temperatura, umidade, luminosidade e outras variáveis essenciais, enviando os dados para a nuvem, onde algoritmos processam e geram recomendações personalizadas para o produtor.
        </p>
      </div>
      {/* Nossa História */}
      <div className="nossa-historia">
        <div className="historia-overlay"></div>
        <div className="historia-image">
          <img src={Historia} alt="História Aura" />
        </div>
        <div className="historia-content">
          <h1 className="historia-title">Nossa História</h1>
          <p className="historia-paragraph">
            O AURA nasceu com a missão de levar o acordo com as necessidades todos os produtores,
            independentemente em terceiros ou seu proprietário. <br />
            Percebemos que muitos agricultores não tinham crescer à água, confiáveis sobre suas lavouras,
            o que bastava se manifestar dos água, luz e nutrientes. <br /><br />
            Assim, unimos tecnologia de porta cuja atividade de desacreditação é uma solução prática e excessível.
          </p>
        </div>
      </div>
      {/*Seção do Screen */}
      <div className="screen-section">
        <div className="Block-screen1">
          <div className="mb-2">☑️↔️</div>
          <h2>Resultados em tempo real </h2>
        </div>
        <div className="Block-screen2">
          <div className="mb-2">🎯</div>
          <h2>Capacitar agricultores com dados confiáveis para otimizar o uso de recursos e aumentar a produtividade.</h2>
        </div>
        <div className="Block-screen3">
          <div className="mb-2">📡</div>
          <h2>Dados precisos de acordo com seu ambiente</h2>
        </div>
        <div className="Block-screen4">
          <div className="mb-2">🌱🗑️</div>
          <h2>Sistema sustentável <br></br> Sem desperdícios</h2>
        </div>
        <div className="Logo-central'"></div>
        <div className="Block-screen5">
          <div className="mb-2">📊</div>
          <h2>Ser a principal ferramenta de monitoramento ambiental que torna a agricultura mais eficiente e sustentável.</h2>
        </div>
        <div className="Block-screen6">
          <div className="mb-2"><img></img></div>
          <h2>Graficos, alertas e recomendações</h2>
        </div>

      </div>

      {/* Seção do Produto */}
      <div className="produto-section">
        <div className="produto-image">
          Imagem do Produto
        </div>

        <div className="produto-content">
          <h1 className="produto-title">AUONE FOI CRIADO PARA MELHORAR SUA PRODUTIVIDADE RURAL</h1>

          <p className="produto-description">
            Nossos sensores captam os dados do ambiente com precisão, e o dispositivo realiza a filtragem inteligente dessas informações. Tudo é transmitido via tecnologia LoRa pela internet, armazenado com segurança e disponibilizado diretamente no seu celular, oferecendo acesso rápido e prático à coleta realizada.
          </p>

          <div className="produto-divider"></div>

          <div className="vantagens-section">
            <h3 className="vantagens-title">Vantagens do Nosso Dispositivo</h3>
            <ul className="vantagens-list">
              <li className="vantagem-item">
                <FaCheck className="vantagem-icon" />
                <span>Monitor de variação de ambientes</span>
              </li>
              <li className="vantagem-item">
                <FaCheck className="vantagem-icon" />
                <span>Envio de dados automaticamente para a plataforma online</span>
              </li>
              <li className="vantagem-item">
                <FaCheck className="vantagem-icon" />
                <span>Fornece análises históricas e previsões simples</span>
              </li>
              <li className="vantagem-item">
                <FaCheck className="vantagem-icon" />
                <span>Emite alertas e recomendações para melhorar sua produzividade</span>
              </li>
            </ul>
          </div>

          <div className="produto-divider"></div>

          <div className="produto-buttons">
            <button className="btn-primary">Adquirir AUONE</button>
            <button className="btn-secondary">Ver meus resultados</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Hero;