import './Hero.modules.css';
import logoFooter from '../assets/logoVerde.png';
import Historia from '../assets/nossaHist.png';
import Aurelio from '../assets/auraMaisAurelio.png';
import TopButton from './TopButton';

import { FaTemperatureHalf, FaRegCircleCheck, FaCheck, FaChartSimple } from "react-icons/fa6";
import { TbTargetArrow } from "react-icons/tb";
import { PiPlantDuotone } from "react-icons/pi";
import { GrSatellite } from "react-icons/gr";
import { AiTwotoneAlert } from "react-icons/ai";
import { RxRocket } from "react-icons/rx";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function Hero() {
  // Ref para rastrear a seção 'About' e aplicar o parallax
  const aboutRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [-120, 120]);

  // Variação para o efeito de fade-in
  const fadeInVariants = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
  };

  return (
    <div className="container-hero">

      <TopButton />

      {/* Gráfico */}
      <motion.div
        className="container-graf"
        variants={fadeInVariants}
        initial="initial"
        whileInView="whileInView"
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
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
      </motion.div>

      {/* Temperatura */}
      <motion.div
        className="container-temp"
        variants={fadeInVariants}
        initial="initial"
        whileInView="whileInView"
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1 className="title-temp">Temperatura</h1>
        <h1 className="temp">22ºC</h1>
        <div className="temp-icon">
          <FaTemperatureHalf />
        </div>
        <p className="avali-graf">Mín: 20ºC | Máx: 26ºC | Média: 22ºC</p>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '70%' }}></div>
        </div>
      </motion.div>

      {/* Saúde das Plantas */}
      <motion.div
        className="container-umid"
        variants={fadeInVariants}
        initial="initial"
        whileInView="whileInView"
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1 className="title-umid"> Saúde das Plantas</h1>
        <div className="box-umid">
          <h1 className="umid">85%</h1>
        </div>
        <h2 className="avali-umid">Ótima</h2>
        <p className="avali-graf">Ideal para crescimento saudável</p>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '85%' }}></div>
        </div>
      </motion.div>

      {/* Texto informativo */}
      <motion.h1
        className="info-hero"
        variants={fadeInVariants}
        initial="initial"
        whileInView="whileInView"
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Acesso a gráficos gerados em tempo real
      </motion.h1>

      {/* Seção de contrato */}
      <motion.div
        className='contrate-section'
        variants={fadeInVariants}
        initial="initial"
        whileInView="whileInView"
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1 className='title-cont'>Transforme a sua plantação</h1>
        <h1 className='subtitle-cont'>Hoje Mesmo</h1>
        <p className='paragraph-cont'>
          Junte-se a mais de 5.000 pessoas que já descobriram o futuro da agricultura sustentável
        </p>
        <div className='btn-contrate'>
          <a className='link-btn' href="mailto:auraservicosbr@gmail.com">
            auraservicosbr@gmail.com
          </a>
        </div>
        <div className='certificado'>
          <FaRegCircleCheck />
          <span>Certificado de Garantia</span>
        </div>
      </motion.div>

      {/* About (com efeito de parallax) */}
      <div className='about' ref={aboutRef}>
        <motion.img
          src={logoFooter}
          alt="Logo da Aura"
          style={{ y: yParallax }}
          transition={{ duration: 0.5 }}
        />
        <motion.h1
          className='about-text'
          style={{ y: yParallax }}
        >
          O que fazemos?
        </motion.h1>
        <motion.p
          className='about-paragraph'
          style={{ y: yParallax }}
        >
          Desenvolvemos um sistema de monitoramento ambiental inteligente, utilizando sensores integrados a plataformas embarcadas (Arduino, ESP32 e LoRa).
          <br /><br />
          Nosso sistema coleta informações em tempo real sobre temperatura, umidade, luminosidade e outras variáveis essenciais, enviando os dados para a nuvem, onde algoritmos processam e geram recomendações personalizadas para o produtor.
        </motion.p>
      </div>

      {/* Nossa História */}
      <motion.div
        className="nossa-historia"
        variants={fadeInVariants}
        initial="initial"
        whileInView="whileInView"
        transition={{ duration: 0.8, delay: 1.0 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="historia-overlay"></div>
        <div className="historia-image">
          <img src={Historia} alt="História Aura" />
        </div>
        <div className="historia-content">
          <h1 className="historia-title">Nossa História</h1>
          <p className="historia-paragraph">
            O AURA nasceu com a missão de levar tecnologia sustentável a todos os produtores,
            garantindo monitoramento confiável de água, luz e nutrientes para suas lavouras. <br /><br />
            Assim, unimos inovação e praticidade em uma solução acessível que transforma o futuro da agricultura.
          </p>
        </div>
      </motion.div>

      {/* Seção do Screen */}
      <div className="screen-section">
        <div className="screen-oneline">
          <div className="screen">
            <div className="mb-2"><FaChartSimple /></div>
            <h2 className="text-screen">Resultados em tempo real</h2>
          </div>
          <div className="screen">
            <div className="mb-2"><TbTargetArrow /></div>
            <h2 className="text-screen">
              Capacitar agricultores com dados confiáveis para otimizar o uso de recursos e aumentar a produtividade.
            </h2>
          </div>
          <div className="screen">
            <div className="mb-2"><GrSatellite /></div>
            <h2 className="text-screen">Dados precisos de acordo com seu ambiente</h2>
          </div>
        </div>
        <div className="screen-center">
          <div className="screen">
            <div className="mb-2"><PiPlantDuotone /></div>
            <h2 className="text-screen">Sistema sustentável <br /> Sem desperdícios</h2>
          </div>
          <div className="Aurelio">
            <img src={Aurelio} alt="Logo Aura com Aurelio" />
          </div>
          <div className="screen">
            <div className="mb-2"><AiTwotoneAlert /></div>
            <h2 className="text-screen">Gráficos, alertas e recomendações</h2>
          </div>
        </div>
        <div className='screen-missao'>
          <div className="mb-2"><RxRocket /></div>
          <h2 className="text-screen">
            Ser a principal ferramenta de monitoramento ambiental que torna a agricultura mais eficiente e sustentável.
          </h2>
        </div>
      </div>

      {/* Seção do Screen (alternativa em blocos) */}
      <motion.div
        className="screen-section"
        variants={fadeInVariants}
        initial="initial"
        whileInView="whileInView"
        transition={{ duration: 0.8, delay: 1.2 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="Block-screen1">
          <div className="mb-2">☑️</div>
          <h2>Resultados em tempo real</h2>
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
          <div className="mb-2">🌱</div>
          <h2>Sistema sustentável <br /> Sem desperdícios</h2>
        </div>
        <div className="Logo-central"></div>
        <div className="Block-screen5">
          <div className="mb-2">📊</div>
          <h2>Ser a principal ferramenta de monitoramento ambiental que torna a agricultura mais eficiente e sustentável.</h2>
        </div>
        <div className="Block-screen6">
          <div className="mb-2">📢</div>
          <h2>Gráficos, alertas e recomendações</h2>
        </div>
      </motion.div>

      {/* Seção do Produto */}
      <motion.div
        className="produto-section"
        variants={fadeInVariants}
        initial="initial"
        whileInView="whileInView"
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="produto-image">
          Imagem do Produto
        </div>

        <div className="produto-content">
          <h1 className="produto-title">AUONE FOI CRIADO PARA MELHORAR SUA PRODUTIVIDADE RURAL</h1>

          <p className="produto-description">
            Nossos sensores captam os dados do ambiente com precisão, e o dispositivo realiza a filtragem inteligente dessas informações. 
            Tudo é transmitido via tecnologia LoRa pela internet, armazenado com segurança e disponibilizado diretamente no seu celular, 
            oferecendo acesso rápido e prático à coleta realizada.
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
                <span>Emite alertas e recomendações para melhorar sua produtividade</span>
              </li>
            </ul>
          </div>

          <div className="produto-divider"></div>

          <div className="produto-buttons">
            <button className="btn-primary">Adquirir AUONE</button>
            <button className="btn-secondary">Ver meus resultados</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
