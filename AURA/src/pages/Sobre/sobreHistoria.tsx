import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  FaChartLine,
  FaSatellite,
  FaLeaf,
  FaBell,
  FaRocket,
  FaRegClock
} from 'react-icons/fa';
import { PiTargetBold } from "react-icons/pi";
import { FiActivity } from "react-icons/fi";
import { BsDatabase } from "react-icons/bs";

import Aurora from '../../components/aurora/aurora';


export default function SobreHistoria() {

  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 100]);


  return (
    <div ref={containerRef} className="w-screen">

      {/*SEÇÃO HERO (COM EFEITO AURORA) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-white z-0">
          <Aurora
            amplitude={1}
            distance={-0.5}
            enableMouseInteraction={true}
          />
        </div>

        <motion.div
          className="relative z-20 text-center px-6 max-w-4xl"
          style={{ y: yParallax }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-green-900 mb-6 font-serif"
          >
            Transformando a Agricultura com Tecnologia
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-green-900 font-light"
          >
            Inovação e sustentabilidade para o agronegócio brasileiro
          </motion.p>
        </motion.div>
      </section>

      {/* 2. O QUE FAZEMOS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="md:text-5xl font-bold text-gray-800 mb-6 font-serif">
                O que fazemos?
              </h2>
              <p className="text-3x1 text-gray-600 leading-relaxed mb-6">
                Desenvolvemos um sistema de <strong> monitoramento ambiental inteligente </strong>, utilizando sensores
                integrados a plataformas embarcadas (Arduino, ESP32 e LoRa).
              </p>
              <p className="text-3x1 text-gray-600 leading-relaxed">
                Nosso sistema coleta informações em <strong>tempo real</strong> sobre temperatura, umidade, luminosidade
                e outras variáveis essenciais, enviando os dados para a nuvem, onde algoritmos processam
                e geram <strong>recomendações personalizadas</strong> para o produtor.
              </p>
            </div>

            {/* BOXES DE DADOS */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-6 bg-green-50 rounded-lg border-2 border-green-600">
                <div className="text-green-600 flex justify-center items-center">
                  <FiActivity className="h-8 w-8 " />
                </div>
                <div className="md:text-3xl font-bold text-green-600 mb-2">98%</div>
                <div className="text-2x1 text-muted-foreground/80 font-medium">Precisão dos dados</div>
                <p className="text-sm text-gray-600 pt-1">Sensores calibrados com alta acurácia</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg border-2 border-green-600">
                <div className="text-green-600 flex justify-center items-center">
                  <FaRegClock className="h-8 w-8" />
                </div>
                <div className="md:text-3xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-2x1 text-muted-foreground/800 font-medium">
                  Monitoramento
                  <br />
                  <br />
                </div>
                <p className="text-sm text-gray-600 pt-1">Coleta de dados ininterrupta</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg border-2 border-green-600">
                <div className="text-green-600 flex justify-center items-center ">
                  <BsDatabase className="h-8 w-8" />
                </div>
                <div className="md:text-3xl font-bold text-green-600 mb-2">+100</div>
                <div className="text-2x1 text-muted-foreground/80 font-medium">Variáveis analisadas</div>
                <p className="text-sm text-gray-600 pt-1">Dados completos do ambiente</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NOSSA HISTÓRIA */}
      <section className="py-20 px-6 bg-green-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-green-800 rounded-lg h-80 flex items-center justify-center">
              <span className="text-green-300">Placeholder para Imagem</span>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">Nossa História</h2>
              <p className="text-lg text-green-100 leading-relaxed mb-6">
                O <strong>AURA</strong> nasceu com a missão de levar <strong>tecnologia sustentável</strong> a todos os produtores,
                garantindo monitoramento confiável de água, luz e nutrientes para suas lavouras.
              </p>
              <p className="text-lg text-green-100 leading-relaxed mb-8">
                Assim, unimos <strong>inovação</strong> e <strong>praticidade</strong> em uma solução acessível que transforma
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

      {/* 4. NOSSOS DIFERENCIAIS */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16 font-serif">
            Nossos Diferenciais
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Cartão 1: Resultados em tempo real */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <FaChartLine className="text-xl text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Resultados em tempo real</h3>
              <p className="text-gray-600">Monitoramento contínuo com atualizações instantâneas para decisões ágeis.</p>
            </div>

            {/* Cartão 2: Capacitação do produtor */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <PiTargetBold className="text-xl text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Capacitação do produtor</h3>
              <p className="text-gray-600">Dados confiáveis para otimizar recursos e aumentar a produtividade e eficiência.</p>
            </div>

            {/* Cartão 3: Dados precisos */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <FaSatellite className="text-xl text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Dados precisos</h3>
              <p className="text-gray-600">Informações específicas do seu ambiente agrícola com sensores de alta fidelidade.</p>
            </div>

            {/* Cartão 4: Sustentabilidade e Ecologia */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <FaLeaf className="text-xl text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Sustentabilidade e Ecologia</h3>
              <p className="text-gray-600">Recomendações focadas na economia de recursos hídricos e energéticos.</p>
            </div>

            {/* Cartão 5: Alerta Inteligente */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <FaBell className="text-xl text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Alerta Inteligente</h3>
              <p className="text-gray-600">Notificações automáticas sobre anomalias ou condições críticas na lavoura.</p>
            </div>

            {/* Cartão 6: Inovação Acessível */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <FaRocket className="text-xl text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Inovação Acessível</h3>
              <p className="text-gray-600">Tecnologia de ponta a custos justos, democratizando a agricultura 4.0.</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}