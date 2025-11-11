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
import History from '../../assets/nossaHistoria.jpg'


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
            distance={0}
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
              <h2 className="md:text-5xl font-bold text-green-900 mb-6 font-serif">
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
              <div className="text-center p-6 rounded-lg border-2 border-green-900">
                <div className="text-green-900 flex justify-center items-center">
                  <FiActivity className="h-8 w-8 " />
                </div>
                <div className="md:text-3xl font-bold text-green-900 mb-2">98%</div>
                <div className="text-2x1 text-muted-foreground/80 font-medium">Precisão dos dados</div>
                <p className="text-sm text-gray-600 pt-1">Sensores calibrados com alta acurácia</p>
              </div>
              <div className="text-center p-6 rounded-lg border-2 border-green-900">
                <div className="text-green-900 flex justify-center items-center">
                  <FaRegClock className="h-8 w-8" />
                </div>
                <div className="md:text-3xl font-bold text-green-900 mb-2">24/7</div>
                <div className="text-2x1 text-muted-foreground/800 font-medium">
                  Monitoramento
                  <br />
                  <br />
                </div>
                <p className="text-sm text-gray-600 pt-1">Coleta de dados ininterrupta</p>
              </div>
              <div className="text-center p-6 rounded-lg border-2 border-green-900">
                <div className="text-green-900 flex justify-center items-center ">
                  <BsDatabase className="h-8 w-8" />
                </div>
                <div className="md:text-3xl font-bold text-green-900 mb-2">+100</div>
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
            <div className=" flex items-center justify-center">
              <img src={History} alt="Historia" className="rounded-2xl w-500" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">Nossa História</h2>
              <p className="text-lg text-green-100 leading-relaxed mb-6">
                O <strong >AURA</strong> nasceu com uma missão clara: democratizar a
                <strong > tecnologia sustentável </strong>para todos os produtores rurais.
              </p>
              <div className="pl-6 border-l-4 space-y-4 text-green-100 text-lg mb-6">
                <p>
                  Acreditamos que <strong> todo agricultor </strong> deve ter acesso a <strong> monitoramento confiável </strong> de água, luz e nutrientes.
                  Para isso, unimos <strong> inovação tecnológica e praticidade, </strong> criando uma <strong> solução acessível </strong> que impulsiona a agricultura brasileira.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-green-200/5 border border-green-300/20 mb-6">
                <p className="text-base leading-relaxed text-foreground font-medium">
                  "Nosso compromisso é empoderar produtores com dados precisos e insights acionáveis, promovendo uma
                  agricultura mais inteligente, sustentável e lucrativa."
                </p>
              </div>
              <div className="flex flex-wrap gap-10 pt-2">
                <div className="group px-5 py-3 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-green-300/20 hover:border-green-400/60 transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <div className="flex items-center gap-2">
                    <strong className="text-sm text-foreground text-green-100">Sustentabilidade</strong>
                  </div>
                </div>
                <div className="group px-5 py-3 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border  border-green-300/20 hover:border-green-400/60 transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <div className="flex items-center gap-2">
                    <strong className="text-sm text-foreground  text-green-100">Inovação</strong>
                  </div>
                </div>
                <div className="group px-5 py-3 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border  border-green-300/20 hover:border-green-400/60 transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <div className="flex items-center gap-2">
                    <strong className="text-sm text-foreground  text-green-100">Acessibilidade</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* 4. NOSSOS DIFERENCIAIS*/}
<section className="py-20 px-6 bg-gray-50"> {/* Fundo branco/muito claro */}
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-green-900 mb-16 font-serif">
      Nossos Diferenciais
    </h2>

    <div className="grid md:grid-cols-2 gap-8">

      {/* Cartão 1: Decisões em Tempo Real (RTD) */}
      <div
        className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 transition-all duration-300"
      >
        <div className="flex items-start mb-3">
          <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center mr-4">
            <FaChartLine className="text-lg text-green-800" /> {/* Ícone Verde Escuro */}
          </div>
          <h3 className="text-xl font-bold text-green-900 mt-1">Decisões em Tempo Real (RTD)</h3> {/* Título Verde Escuro */}
        </div>
        <p className="text-gray-600 pl-14">Acesso contínuo aos dados da lavoura. Identifique problemas e tome decisões ágeis com insights instantâneos para máxima eficiência.</p> {/* Parágrafo Cinza */}
      </div>

      {/* Cartão 2: Otimização de Recursos */}
      <div
        className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 transition-all duration-300"
      >
        <div className="flex items-start mb-3">
          <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center mr-4">
            <PiTargetBold className="text-lg text-green-800" />
          </div>
          <h3 className="text-xl font-bold text-green-900 mt-1">Otimização de Recursos</h3>
        </div>
        <p className="text-gray-600 pl-14">Recomendações precisas para a aplicação exata de água e fertilizantes, reduzindo custos em até 30% e minimizando o desperdício.</p>
      </div>

      {/* Cartão 3: Dados Científicos de Campo */}
      <div
        className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 transition-all duration-300"
      >
        <div className="flex items-start mb-3">
          <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center mr-4">
            <FaSatellite className="text-lg text-green-800" />
          </div>
          <h3 className="text-xl font-bold text-green-900 mt-1">Dados Científicos de Campo</h3>
        </div>
        <p className="text-gray-600 pl-14">Sensores de alta fidelidade e conectividade LoRa para coletar informações hiperlocais e gerar um diagnóstico agronômico confiável.</p>
      </div>

      {/* Cartão 4: Sustentabilidade Comprovada */}
      <div
        className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 transition-all duration-300"
      >
        <div className="flex items-start mb-3">
          <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center mr-4">
            <FaLeaf className="text-lg text-green-800" />
          </div>
          <h3 className="text-xl font-bold text-green-900 mt-1">Sustentabilidade Comprovada</h3>
        </div>
        <p className="text-gray-600 pl-14">Promovemos a gestão hídrica e energética inteligente, garantindo maior produtividade com o menor impacto ambiental no seu cultivo.</p>
      </div>

      {/* Cartão 5: Alerta Preditivo Imediato */}
      <div
        className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 transition-all duration-300"
      >
        <div className="flex items-start mb-3">
          <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center mr-4">
            <FaBell className="text-lg text-green-800" />
          </div>
          <h3 className="text-xl font-bold text-green-900 mt-1">Alerta Preditivo Imediato</h3>
        </div>
        <p className="text-gray-600 pl-14">Receba notificações automáticas sobre anomalias (clima, pragas ou falhas) antes que elas causem perdas críticas na lavoura.</p>
      </div>

      {/* Cartão 6: Tecnologia Simples e Acessível */}
      <div
        className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 transition-all duration-300"
      >
        <div className="flex items-start mb-3">
          <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center mr-4">
            <FaRocket className="text-lg text-green-800" />
          </div>
          <h3 className="text-xl font-bold text-green-900 mt-1">Tecnologia Simples e Acessível</h3>
        </div>
        <p className="text-gray-600 pl-14">Democratizamos a Agricultura 4.0: hardware robusto, fácil instalação e plataforma intuitiva a custos justos para todos os produtores.</p>
      </div>

    </div>
  </div>
</section>
    </div>
  );
}