import React from 'react';
import './Hero.modules.css';
import logoFooter from '../assets/logoVerde.png'
import { FaTemperatureHalf, FaRegCircleCheck } from "react-icons/fa6";

const Hero: React.FC = () => {
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
    </div>
  );
};

export default Hero;
