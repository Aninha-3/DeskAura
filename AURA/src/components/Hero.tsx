import React from 'react';
import './Hero.modules.css';
import { FaTemperatureHalf } from "react-icons/fa6";

const Hero: React.FC = () => {
  return (
    <div className="container-hero">

      {/* Crescimento */}
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

      {/* Saúde/Umidade */}
      <div className="container-umid">
        <h1 className="title-umid"> Saúde das Plantas</h1>
        <div className="box-umid">
          <h1 className="umid">85%</h1>
        </div>
        <h2 className="avali-umid">Ótima umidade 💧</h2>
        <p className="avali-graf">Ideal para crescimento saudável</p>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '85%' }}></div>
        </div>
      </div>

      <h1 className="info-hero">Acesso a gráficos gerados em tempo real</h1>
    </div>
  );
};

export default Hero;
