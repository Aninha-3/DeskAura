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
    <div className="container-hero w-full mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden scroll-smooth">

      <CookieBanner />
      <Chatbot />

      {/* Seção Plataforma de Monitoramento */}
      <section className="plataformaCursos py-20 bg-gray-50">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-gray-900 mb-16 leading-tight"
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
          {[{
            icon: monitoramento,
            title: "Monitoramento em Tempo Real",
            text: "Visualize dados atualizados de temperatura, umidade, luz e solo com precisão e agilidade.",
            delay: 0.2
          }, {
            icon: alertas,
            title: "Alertas Inteligentes",
            text: "Receba avisos automáticos sempre que os parâmetros ambientais estiverem fora do ideal.",
            delay: 0.4
          }, {
            icon: relatorios,
            title: "Relatórios Detalhados",
            text: "Tenha acesso a gráficos, históricos e insights para decisões mais estratégicas e produtivas.",
            delay: 0.6
          }].map((card, index) => (
            <motion.article
              key={index}
              className="bg-white rounded-3xl shadow-lg p-10 hover:shadow-2xl border border-gray-300 transition-shadow duration-300 flex flex-col items-center text-center"
              variants={fadeInVariants}
              initial="initial"
              whileInView="whileInView"
              transition={{ duration: 0.8, delay: card.delay }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-xl p-4">
                <img src={card.icon} alt={card.title} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{card.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{card.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Tecnologia e Inovação */}
      <motion.div
        className='about relative py-20 overflow-hidden bg-white'
        ref={aboutRef}
        variants={fadeInVariants}
        initial="initial"
        whileInView="whileInView"
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <motion.img
              src={logoFooter}
              alt="Logo da Aura"
              style={{ y: yParallax }}
              className="w-48 h-48 lg:w-64 lg:h-64 object-contain"
            />
            <div className="flex-1 text-center lg:text-left">
              <motion.h1
                className='text-3xl md:text-4xl font-bold text-[#042b00] mb-6'
                style={{ y: yParallax }}
              >
                Tecnologia e Inovação
              </motion.h1>
              <motion.p
                className='text-lg text-gray-600 leading-relaxed'
                style={{ y: yParallax }}
              >
               Na AURA, acreditamos que a inovação é a força que impulsiona a transformação do campo. Utilizamos tecnologias avançadas como inteligência artificial, IoT e conectividade via Bluetooth para garantir soluções precisas, acessíveis e compatíveis com diferentes cenários de uso.

<br /><br />

Nossa plataforma foi criada para crescer ao seu lado, permitindo a integração de novos sensores, algoritmos e recursos que acompanham as necessidades do agronegócio moderno. Com a AURA, o futuro da agricultura inteligente está sempre ao seu alcance.
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* SectionDownload logo após o About */}
      <SectionDownload />

      {/* Comunidade */}
      <motion.div
        className="bg-gradient-to-r from-green-800 to-green-900 rounded-3xl p-8 mt-20 text-white mb-6"
        variants={fadeInVariants}
        initial="initial"
        whileInView="whileInView"
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Evolua Junto com a Comunidade <span className="font-bold">AURA</span>
          </h2>
          <p className="text-lg mb-6">
            Na AURA, você não está sozinho. Conecte-se com agricultores e especialistas,
            troque experiências e aprenda as melhores práticas para otimizar sua produção.
          </p>
          <button
            className="bg-white text-[#042b00] font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300"
            onClick={() => window.location.href = "/comunidade"}
          >
            Acessar a comunidade
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
