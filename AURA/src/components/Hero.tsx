import './Hero.modules.css';
import logoFooter from '../assets/logoVerde.png';
import CookieBanner from "../components/CookieBanner";
import TopButton from './TopButton';
import SectionDownload from './SectionDownload';


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

    // ALTERAÇÃO: Adicionado 'overflow-x-hidden' para remover a barra de rolagem horizontal
    <div className="container-hero w-full mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <TopButton />

      {/* Seção Plataforma de Cursos */}
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

        <SectionDownload />


        {/* Seção Comunidade Ativa */}
        <motion.div
          className="comunidadeContent bg-gradient-to-r from-green-700 to-green-800 rounded-3xl p-8 mt-12 text-white"
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
              className="comunidadeButton bg-white text-green-900 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300"
              onClick={() => window.location.href = "/comunidade"}
            >
              Acessar Comunidade
            </button>
          </div>
        </motion.div>
      </div>

      {/* Seção de contrato (Comentada) */}
      {/* <motion.div
        className='contrate-section bg-gradient-to-r from-green-700  rounded-3xl p-8 text-center text-white mb-12'
        variants={fadeInVariants}
        initial="initial"
        whileInView="whileInView"
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1 className='title-cont text-center font-bold'>Transforme a sua plantação</h1>
        <h1 className='subtitle-cont text-3xl md:text-4xl font-bold mb-4'>Hoje Mesmo</h1>
        <p className='paragraph-cont text-lg md:text-xl mb-6 max-w-2xl mx-auto'>
          Junte-se a mais de 5.000 pessoas que já descobriram o futuro da agricultura sustentável
        </p>
        <div className='btn-contrate text-green-600 font-bold py-3 px-8 rounded-full inline-block hover:bg-gray-100 transition duration-300 mb-4'>
          <a className='link-btn' href="mailto:auraservicosbr@gmail.com">
            auraservicosbr@gmail.com
          </a>
        </div>
        <div className='certificado flex items-center justify-center text-sm md:text-base'>
          <FaRegCircleCheck className="mr-2" />
          <span>Certificado de Garantia</span>
        </div>
      </motion.div>
      */}


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

      <CookieBanner />


    </div>
  );
}

export default Hero;