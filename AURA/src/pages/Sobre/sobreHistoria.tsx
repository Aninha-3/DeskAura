import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  FaChartLine, 
  FaTarget, 
  FaSatellite, 
  FaLeaf, 
  FaBell,
  FaRocket 
} from 'react-icons/fa';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const fadeInVariants = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      {/* Hero Section com Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 to-emerald-800/20 z-10"></div>
        <motion.div 
          className="relative z-20 text-center px-6 max-w-4xl"
          style={{ y: yParallax }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 font-playfair"
          >
            Transformando a Agricultura com Tecnologia
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-green-100 font-light tracking-wide"
          >
            Inovação e sustentabilidade para o agronegócio brasileiro
          </motion.p>
        </motion.div>
      </section>

      {/* Sobre AURA */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-green-50">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-bold text-gray-800 mb-6 font-playfair">
                O que fazemos?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Desenvolvemos um sistema de monitoramento ambiental inteligente, utilizando sensores 
                integrados a plataformas embarcadas (Arduino, ESP32 e LoRa).
                <br /><br />
                Nosso sistema coleta informações em tempo real sobre temperatura, umidade, luminosidade 
                e outras variáveis essenciais, enviando os dados para a nuvem, onde algoritmos processam 
                e geram recomendações personalizadas para o produtor.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-6"
            >
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-green-100">
                <div className="text-3xl font-bold text-green-600 mb-2">99%</div>
                <div className="text-sm text-gray-600 font-medium">Precisão dos dados</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-green-100">
                <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600 font-medium">Monitoramento</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-green-100">
                <div className="text-3xl font-bold text-green-600 mb-2">+100</div>
                <div className="text-sm text-gray-600 font-medium">Variáveis analisadas</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Nossa História */}
      <motion.section
        className="py-20 px-6 bg-green-900 text-white relative overflow-hidden"
        variants={fadeInVariants}
        initial="initial"
        whileInView="whileInView"
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full h-96 bg-green-800 rounded-2xl flex items-center justify-center">
                <span className="text-green-200">Imagem da nossa história</span>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 font-playfair">Nossa História</h2>
              <p className="text-lg text-green-100 leading-relaxed mb-8">
                O AURA nasceu com a missão de levar tecnologia sustentável a todos os produtores,
                garantindo monitoramento confiável de água, luz e nutrientes para suas lavouras.
                <br /><br />
                Assim, unimos inovação e praticidade em uma solução acessível que transforma 
                o futuro da agricultura.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-green-800/50 px-4 py-2 rounded-full">
                  <div className="text-lg">🌱</div>
                  <span className="text-sm">Sustentabilidade</span>
                </div>
                <div className="flex items-center gap-2 bg-green-800/50 px-4 py-2 rounded-full">
                  <div className="text-lg">🚀</div>
                  <span className="text-sm">Inovação</span>
                </div>
                <div className="flex items-center gap-2 bg-green-800/50 px-4 py-2 rounded-full">
                  <div className="text-lg">🤝</div>
                  <span className="text-sm">Acessibilidade</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Diferenciais */}
      <section className="py-20 px-6 bg-white">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-center text-gray-800 mb-16 font-playfair"
          >
            Nossos Diferenciais
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-br from-white to-green-50 rounded-2xl p-8 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <FaChartLine className="text-2xl text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Resultados em tempo real</h3>
              <p className="text-gray-600">Monitoramento contínuo com atualizações instantâneas</p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-br from-white to-green-50 rounded-2xl p-8 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <FaTarget className="text-2xl text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Capacitação do produtor</h3>
              <p className="text-gray-600">Dados confiáveis para otimizar recursos e aumentar produtividade</p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-br from-white to-green-50 rounded-2xl p-8 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <FaSatellite className="text-2xl text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Dados precisos</h3>
              <p className="text-gray-600">Informações específicas do seu ambiente agrícola</p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-br from-white to-green-50 rounded-2xl p-8 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <FaLeaf className="text-2xl text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Sistema sustentável</h3>
              <p className="text-gray-600">Tecnologia eficiente que elimina desperdícios</p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-br from-white to-green-50 rounded-2xl p-8 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <FaBell className="text-2xl text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Alertas inteligentes</h3>
              <p className="text-gray-600">Notificações e recomendações baseadas em dados</p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-br from-white to-green-50 rounded-2xl p-8 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <FaRocket className="text-2xl text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Missão</h3>
              <p className="text-gray-600">Ser a principal ferramenta de monitoramento ambiental para agricultura sustentável</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Missão e Visão */}
      <section className="py-20 px-6 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-16 font-playfair">Nossa Missão</h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-200">
              <FaRocket className="text-4xl text-green-600 mx-auto mb-6" />
              <p className="text-xl text-gray-700 leading-relaxed">
                "Ser a principal ferramenta de monitoramento ambiental que torna a agricultura 
                mais eficiente e sustentável, capacitando produtores com tecnologia acessível 
                e dados confiáveis para decisões inteligentes."
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}