import logoFooter from '../assets/logoVerde.png';
import CookieBanner from "../components/CookieBanner";
import SectionDownload from './SectionDownload';
import Chatbot from '../components/Assistente';
import Feedback from './contat';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import monitoramento from '../assets/icones/monitoramento.png';
import alertas from '../assets/icones/aviso.png';
import relatorios from '../assets/icones/relatorio.png';

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
    <div className="container-hero w-full mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">

      {/* Importações */}

      <CookieBanner />

      <Chatbot />


      {/* Seção Plataforma de Monitoramento */}
      <section className="plataformaCursos py-20 bg-gray-50">
        <motion.h2
          className="scroll-animation text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-gray-900 mb-16 leading-tight"
          variants={fadeInVariants}
          initial="initial"
          whileInView="whileInView"
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          A AURA é uma plataforma de <span className="text-[#2E8B57]">Monitoramento Inteligente</span><br />
          com acesso a recursos avançados
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-12 lg:px-20">
          {/* Card: Monitoramento em Tempo Real */}
          <motion.article
            className="scroll-animation bg-white rounded-3xl shadow-lg p-10 hover:shadow-2xl border-1 border-gray-400 transition-shadow duration-300 flex flex-col items-center text-center"
            variants={fadeInVariants}
            initial="initial"
            whileInView="whileInView"
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-xl p-4">
              <img src={monitoramento} alt="Monitoramento em Tempo Real" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Monitoramento em Tempo Real</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Visualize dados atualizados de temperatura, umidade, luz e solo com precisão e agilidade.
            </p>
          </motion.article>

          {/* Card: Alertas Inteligentes */}
          <motion.article
            className="scroll-animation bg-white rounded-3xl shadow-lg p-10 hover:shadow-2xl border-1 border-gray-300 transition-shadow duration-300 flex flex-col items-center text-center"
            variants={fadeInVariants}
            initial="initial"
            whileInView="whileInView"
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="w-20 h-20 mb-6 flex items-center justify-center  rounded-xl p-4">
              <img src={alertas} alt="Alertas Inteligentes" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Alertas Inteligentes</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Receba avisos automáticos sempre que os parâmetros ambientais estiverem fora do ideal.
            </p>
          </motion.article>

          {/* Card: Relatórios Detalhados */}
          <motion.article
            className="scroll-animation bg-white rounded-3xl shadow-lg p-10 hover:shadow-2xl transition-shadow border-1 border-gray-300 duration-300 flex flex-col items-center text-center"
            variants={fadeInVariants}
            initial="initial"
            whileInView="whileInView"
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="w-20 h-20 mb-6 flex items-center justify-center  rounded-xl p-4">
              <img src={relatorios} alt="Relatórios Detalhados" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Relatórios Detalhados</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Tenha acesso a gráficos, históricos e insights para decisões mais estratégicas e produtivas.
            </p>
          </motion.article>
        </div>
      </section>

      <SectionDownload />

      {/* About */}
      <div className='about relative py-16 mb-6 overflow-hidden' ref={aboutRef}>
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
                className='about-text text-3xl md:text-4xl font-bold text-[#143b25] mt-40 mb-6'
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


      {/* Seção Comunidade Ativa */}
      <motion.div
        className="comunidadeContent bg-gradient-to-r from-green-800 to-green-900 rounded-3xl p-8 mt-20 text-white mb-6"
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
            className="comunidadeButton bg-white text-[#042b00] font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300"
            onClick={() => window.location.href = "/comunidade"}
          >
            Acessar Comunidade
          </button>
        </div>
      </motion.div>
      <div>
        <Feedback/>
      </div>

    </div>
  );
}

export default Hero;
