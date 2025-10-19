import './Hero.modules.css';
import logoFooter from '../assets/logoVerde.png';
import CookieBanner from "../components/CookieBanner";
import Aurelio from '../assets/auraMaisAurelio.png';
import TopButton from './TopButton';
import SectionDownload from './SectionDownload';

import { FaRegCircleCheck, FaCheck, FaChartSimple } from "react-icons/fa6";
import { TbTargetArrow } from "react-icons/tb";
import { PiPlantDuotone } from "react-icons/pi";
import { GrSatellite } from "react-icons/gr";
import { AiTwotoneAlert } from "react-icons/ai";
import { RxRocket } from "react-icons/rx";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Importe suas imagens para os cards (substitua pelos caminhos corretos)
import monitoramento from '../assets/grafico1.png';
import alertas from '../assets/grafico2.png';
import relatorios from '../assets/grafico3.png';

export function Hero() {
  const aboutRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [-120, 120]);

  const fadeInVariants = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
  };

  return (
    <div className="container-hero w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      <TopButton />

      {/* Seção Plataforma de Cursos - Substituindo os gráficos */}
      <div className="plataformaCursos mb-12">
        <motion.h2 
          className="scroll-animation text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-12"
          variants={fadeInVariants}
          initial="initial"
          whileInView="whileInView"
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          A AURA é uma plataforma de
          <span className="highlight text-green-600"> Monitoramento <br /> Inteligente </span>
          onde você tem acesso:
        </motion.h2>

        <div className="plataformaCursosContent grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="plataformaCursosCard scroll-animation bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center h-full"
            variants={fadeInVariants}
            initial="initial"
            whileInView="whileInView"
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="plataformaCursosCardIcon flex flex-col items-center h-full">
              <div className="w-24 h-24 mb-6 flex items-center justify-center bg-green-50 rounded-2xl p-4">
                <img 
                  className="iconCurso object-contain w-full h-full" 
                  src={monitoramento} 
                  alt="Monitoramento em Tempo Real" 
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Monitoramento em Tempo Real</h3>
              <p className="text-gray-600 leading-relaxed flex-grow">
                Acompanhe temperatura, umidade, luminosidade e condições do solo 
                através de dados coletados instantaneamente pelos nossos sensores.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="plataformaCursosCard scroll-animation bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center h-full"
            variants={fadeInVariants}
            initial="initial"
            whileInView="whileInView"
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="plataformaCursosCardIcon flex flex-col items-center h-full">
              <div className="w-24 h-24 mb-6 flex items-center justify-center bg-blue-50 rounded-2xl p-4">
                <img 
                  className="iconCurso object-contain w-full h-full" 
                  src={alertas} 
                  alt="Alertas Inteligentes" 
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Alertas Inteligentes</h3>
              <p className="text-gray-600 leading-relaxed flex-grow">
                Receba notificações automáticas quando as condições ambientais 
                saírem dos parâmetros ideais para o crescimento das suas plantas.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="plataformaCursosCard scroll-animation bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center h-full"
            variants={fadeInVariants}
            initial="initial"
            whileInView="whileInView"
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="plataformaCursosCardIcon flex flex-col items-center h-full">
              <div className="w-24 h-24 mb-6 flex items-center justify-center bg-purple-50 rounded-2xl p-4">
                <img 
                  className="iconCurso object-contain w-full h-full" 
                  src={relatorios} 
                  alt="Relatórios Detalhados" 
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Relatórios Detalhados</h3>
              <p className="text-gray-600 leading-relaxed flex-grow">
                Acesse análises históricas, tendências e insights para tomar 
                decisões baseadas em dados e melhorar sua produtividade.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Seção Comunidade Ativa */}
        <motion.div 
          className="comunidadeContent bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl p-8 mt-12 text-white"
          variants={fadeInVariants}
          initial="initial"
          whileInView="whileInView"
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="comunidadeRight text-center">
            <div className="descricaoEsquerda mb-6">
              <h2 className="h2Comunidade text-2xl md:text-3xl font-bold mb-4">
                Evolua Junto com a Comunidade <span className="tituloCharme font-bold">AURA</span>
              </h2>
              <p className="text-lg">
                Na AURA, você não está sozinho. Conecte-se com agricultores e especialistas, 
                troque experiências e aprenda as melhores práticas para otimizar sua produção.
              </p>
            </div>
            <button
              className="comunidadeButton bg-white text-green-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300"
              onClick={() => window.location.href = "/comunidade"}
            >
              Acessar Comunidade
            </button>
          </div>
        </motion.div>
      </div>

      {/* Resto do código permanece igual */}
      <motion.h1
        className="info-hero text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-800 my-12"
        variants={fadeInVariants}
        initial="initial"
        whileInView="whileInView"
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Acesso a dados gerados em tempo real
      </motion.h1>

      {/* Seção de contrato */}
      <motion.div
        className='contrate-section bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl p-8 text-center text-white mb-12'
        variants={fadeInVariants}
        initial="initial"
        whileInView="whileInView"
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1 className='title-cont text-2xl md:text-3xl font-bold mb-2'>Transforme a sua plantação</h1>
        <h1 className='subtitle-cont text-3xl md:text-4xl font-bold mb-4'>Hoje Mesmo</h1>
        <p className='paragraph-cont text-lg md:text-xl mb-6 max-w-2xl mx-auto'>
          Junte-se a mais de 5.000 pessoas que já descobriram o futuro da agricultura sustentável
        </p>
        <div className='btn-contrate bg-white text-green-600 font-bold py-3 px-8 rounded-full inline-block hover:bg-gray-100 transition duration-300 mb-4'>
          <a className='link-btn' href="mailto:auraservicosbr@gmail.com">
            auraservicosbr@gmail.com
          </a>
        </div>
        <div className='certificado flex items-center justify-center text-sm md:text-base'>
          <FaRegCircleCheck className="mr-2" />
          <span>Certificado de Garantia</span>
        </div>
      </motion.div>

      <SectionDownload />

      {/* About */}
      <div className='about relative py-16 mb-12 overflow-hidden' ref={aboutRef}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <motion.img
              src={logoFooter}
              alt="Logo da Aura"
              style={{ y: yParallax }}
              transition={{ duration: 0.5 }}
              className="w-48 h-48 lg:w-64 lg:h-64 object-contain"
            />
            <div className="flex-1 text-center lg:text-left">
              <motion.h1
                className='about-text text-3xl md:text-4xl font-bold text-gray-800 mb-6'
                style={{ y: yParallax }}
              >
                O que fazemos?
              </motion.h1>
              <motion.p
                className='about-paragraph text-lg text-gray-600 leading-relaxed'
                style={{ y: yParallax }}
              >
                Desenvolvemos um sistema de monitoramento ambiental inteligente, utilizando sensores integrados a plataformas embarcadas (Arduino, ESP32 e LoRa).
                <br /><br />
                Nosso sistema coleta informações em tempo real sobre temperatura, umidade, luminosidade e outras variáveis essenciais, enviando os dados para a nuvem, onde algoritmos processam e geram recomendações personalizadas para o produtor.
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Seção do Screen */}
      <div className="screen-section bg-gray-50 rounded-3xl p-8 mb-12">
        <div className="max-w-6xl mx-auto">
          {/* Primeira linha */}
          <div className="screen-oneline grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { icon: <FaChartSimple />, text: "Resultados em tempo real" },
              { 
                icon: <TbTargetArrow />, 
                text: "Capacitar agricultores com dados confiáveis para otimizar o uso de recursos e aumentar a produtividade." 
              },
              { icon: <GrSatellite />, text: "Dados precisos de acordo com seu ambiente" }
            ].map((item, index) => (
              <div key={index} className="screen bg-white rounded-2xl p-6 text-center shadow-lg">
                <div className="text-3xl text-green-500 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h2 className="text-screen text-gray-700 font-medium">
                  {item.text}
                </h2>
              </div>
            ))}
          </div>

          {/* Linha central */}
          <div className="screen-center grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8 items-center">
            <div className="screen bg-white rounded-2xl p-6 text-center shadow-lg order-2 lg:order-1">
              <div className="text-3xl text-green-500 mb-4 flex justify-center">
                <PiPlantDuotone />
              </div>
              <h2 className="text-screen text-gray-700 font-medium">
                Sistema sustentável <br /> Sem desperdícios
              </h2>
            </div>
            
            <div className="Aurelio order-1 lg:order-2 flex justify-center">
              <img 
                src={Aurelio} 
                alt="Logo Aura com Aurelio" 
                className="w-48 h-48 lg:w-64 lg:h-64 object-contain"
              />
            </div>
            
            <div className="screen bg-white rounded-2xl p-6 text-center shadow-lg order-3">
              <div className="text-3xl text-green-500 mb-4 flex justify-center">
                <AiTwotoneAlert />
              </div>
              <h2 className="text-screen text-gray-700 font-medium">
                Gráficos, alertas e recomendações
              </h2>
            </div>
          </div>

          {/* Missão */}
          <div className='screen-missao bg-white rounded-2xl p-6 text-center shadow-lg max-w-2xl mx-auto'>
            <div className="text-3xl text-green-500 mb-4 flex justify-center">
              <RxRocket />
            </div>
            <h2 className="text-screen text-gray-700 font-medium text-lg">
              Ser a principal ferramenta de monitoramento ambiental que torna a agricultura mais eficiente e sustentável.
            </h2>
          </div>
        </div>
      </div>

      {/* Seção do Produto */}
      <motion.div
        className="produto-section bg-white rounded-3xl shadow-xl overflow-hidden mb-12"
        variants={fadeInVariants}
        initial="initial"
        whileInView="whileInView"
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="flex flex-col lg:flex-row">
          <div className="produto-image bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center p-12 lg:w-1/2 min-h-96">
            <span className="text-white text-2xl font-bold text-center">Imagem do Produto</span>
          </div>

          <div className="produto-content p-8 lg:w-1/2">
            <h1 className="produto-title text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              AUONE FOI CRIADO PARA MELHORAR SUA PRODUTIVIDADE RURAL
            </h1>

            <p className="produto-description text-gray-600 text-lg leading-relaxed mb-6">
              Nossos sensores captam os dados do ambiente com precisão, e o dispositivo realiza a filtragem inteligente dessas informações.
              Tudo é transmitido via tecnologia LoRa pela internet, armazenado com segurança e disponibilizado diretamente no seu celular,
              oferecendo acesso rápido e prático à coleta realizada.
            </p>

            <div className="produto-divider border-t border-gray-200 my-6"></div>

            <div className="vantagens-section mb-6">
              <h3 className="vantagens-title text-xl font-bold text-gray-800 mb-4">Vantagens do Nosso Dispositivo</h3>
              <ul className="vantagens-list space-y-3">
                {[
                  "Monitor de variação de ambientes",
                  "Envio de dados automaticamente para a plataforma online",
                  "Fornece análises históricas e previsões simples",
                  "Emite alertas e recomendações para melhorar sua produtividade"
                ].map((vantagem, index) => (
                  <li key={index} className="vantagem-item flex items-start">
                    <FaCheck className="vantagem-icon text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{vantagem}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="produto-divider border-t border-gray-200 my-6"></div>

            <div className="produto-buttons flex flex-col sm:flex-row gap-4">
              <button className="btn-primary bg-green-500 text-white font-bold py-3 px-6 rounded-full hover:bg-green-600 transition duration-300 flex-1">
                Adquirir AUONE
              </button>
              <button className="btn-secondary border-2 border-green-500 text-green-500 font-bold py-3 px-6 rounded-full hover:bg-green-50 transition duration-300 flex-1">
                Ver meus resultados
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <CookieBanner />
    </div>
  );
}

export default Hero;