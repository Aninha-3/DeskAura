import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  FaChartLine, 
  FaSatellite, 
  FaLeaf, 
  FaBell,
  FaRocket 
} from 'react-icons/fa';
import { PiTargetBold } from "react-icons/pi";


export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 100]);


  return (
    <div ref={containerRef} className="w-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 to-emerald-800">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <motion.div 
          className="relative z-20 text-center px-6 max-w-4xl"
          style={{ y: yParallax }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-serif"
          >
            Transformando a Agricultura com Tecnologia
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-green-100 font-light"
          >
            Inovação e sustentabilidade para o agronegócio brasileiro
          </motion.p>
        </motion.div>
      </section>

      {/* O que fazemos */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-serif">
                O que fazemos?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Desenvolvemos um sistema de monitoramento ambiental inteligente, utilizando sensores 
                integrados a plataformas embarcadas (Arduino, ESP32 e LoRa).
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nosso sistema coleta informações em tempo real sobre temperatura, umidade, luminosidade 
                e outras variáveis essenciais, enviando os dados para a nuvem, onde algoritmos processam 
                e geram recomendações personalizadas para o produtor.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
                <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2">98%</div>
                <div className="text-sm text-gray-600 font-medium">Precisão dos dados</div>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
                <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600 font-medium">Monitoramento</div>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
                <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2">+100</div>
                <div className="text-sm text-gray-600 font-medium">Variáveis analisadas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 px-6 bg-green-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-green-800 rounded-lg h-80 flex items-center justify-center">
              {/* Sugestão: Substituir por um componente de imagem */}
              <span className="text-green-200 text-lg">Imagem da nossa história</span>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">Nossa História</h2>
              <p className="text-lg text-green-100 leading-relaxed mb-6">
                O AURA nasceu com a missão de levar tecnologia sustentável a todos os produtores,
                garantindo monitoramento confiável de água, luz e nutrientes para suas lavouras.
              </p>
              <p className="text-lg text-green-100 leading-relaxed mb-8">
                Assim, unimos inovação e praticidade em uma solução acessível que transforma 
                o futuro da agricultura.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-green-800 px-4 py-2 rounded-full text-sm">Sustentabilidade</span>
                <span className="bg-green-800 px-4 py-2 rounded-full text-sm">Inovação</span>
                <span className="bg-green-800 px-4 py-2 rounded-full text-sm">Acessibilidade</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Diferenciais */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16 font-serif">
            Nossos Diferenciais
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <FaChartLine className="text-xl text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Resultados em tempo real</h3>
              <p className="text-gray-600">Monitoramento contínuo com atualizações instantâneas</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <PiTargetBold  className="text-xl text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Capacitação do produtor</h3>
              <p className="text-gray-600">Dados confiáveis para otimizar recursos e aumentar produtividade</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <FaSatellite className="text-xl text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Dados precisos</h3>
              <p className="text-gray-600">Informações específicas do seu ambiente agrícola</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <FaLeaf className="text-xl text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Sistema sustentável</h3>
              <p className="text-gray-600">Tecnologia eficiente que elimina desperdícios</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <FaBell className="text-xl text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Alertas inteligentes</h3>
              <p className="text-gray-600">Notificações e recomendações baseadas em dados</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <FaRocket className="text-xl text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Missão</h3>
              <p className="text-gray-600">Ser a principal ferramenta de monitoramento ambiental para agricultura sustentável</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}