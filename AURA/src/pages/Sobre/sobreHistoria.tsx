import { useRef } from 'react';
import historia from '../../assets/nossaHistoria.jpg';
import Fundo from '../../assets/tcc-sobre.webp'
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


export default function SobreHistoria() {

  const containerRef = useRef(null);

  return (
    // Mantendo overflow-x-hidden no contêiner principal
    <div ref={containerRef} className=" font-montserrat overflow-x-hidden">

      {/* SEÇÃO HERO (COM EFEITO AURORA) */}
      <section>
        <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Fundo})`}}
        />
      </div>

      {/* Conteúdo da página */}
      <div className="relative z-10">

        {/* Seção Hero */}
        <main className="container mx-auto px-6 py-32">
          <div className="max-w-4xl mx-auto text-center relative">

            <h1
              className="text-6xl md:text-7xl font-bold mb-6 leading-tight text-balance"
              style={{
                color: "white",
              }}
            >
              Transformando a Agricultura com Tecnologia
            </h1>
            <p
              className="text-xl md:text-2xl font-medium text-balance"
              style={{
                color: "white",
              }}
            >
              Inovação e sustentabilidade para o agronegócio brasileiro
            </p>
          </div>
        </main>
      </div>
    </div>

      </section>

      {/* 2. O QUE FAZEMOS - CORES PADRONIZADAS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6 font-montserrat">
                O que fazemos?
              </h2>
              {/* Texto base agora é cinza mais escuro (text-gray-700) e palavras-chave em verde (text-green-900) */}
              <p className=" md:text-lg text-gray-700 leading-relaxed mb-6">
                Desenvolvemos um sistema de <strong className="text-green-900">monitoramento ambiental inteligente</strong>, utilizando sensores
                integrados a plataformas embarcadas (Arduino, ESP32 e LoRa).
              </p>
              {/* Segundo parágrafo com a mesma padronização */}
              <p className=" md:text-lg text-gray-700 leading-relaxed">
                Nosso sistema coleta informações em <strong className="text-green-900">tempo real</strong> sobre temperatura, umidade, luminosidade
                e outras variáveis essenciais, enviando os dados para a nuvem, onde algoritmos processam
                e geram <strong className="text-green-900">recomendações personalizadas</strong> para o produtor.
              </p>
            </div>

            {/* BOXES DE DADOS - CORES MANTIDAS (JÁ ESTAVAM PADRONIZADAS) */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-6 rounded-lg border-1 border-green-900">
                <div className="text-green-900 flex justify-center items-center">
                  <FiActivity className="h-8 w-8 " />
                </div>
                <div className="text-2xl font-bold text-green-900 mb-2">98%</div>
                <div className="text-lg text-muted-foreground/80 font-medium">Precisão dos dados</div>
                <p className="text-sm text-gray-600 pt-1">Sensores calibrados com alta acurácia</p>
              </div>
              <div className="text-center p-6 rounded-lg border-1 border-green-900">
                <div className="text-green-900 flex justify-center items-center">
                  <FaRegClock className="h-8 w-8" />
                </div>
                <div className="text-2xl font-bold text-green-900 mb-2">24/7</div>
                <div className="text-lg text-muted-foreground/800 font-medium">
                  Monitoramento
                </div>
                <p className="text-sm text-gray-600 pt-1">Coleta de dados ininterrupta</p>
              </div>
              <div className="text-center p-6 rounded-lg border-1 border-green-900">
                <div className="text-green-900 flex justify-center items-center ">
                  <BsDatabase className="h-8 w-8" />
                </div>
                <div className="text-2xl font-bold text-green-900 mb-2">+100</div>
                <div className="text-lg text-muted-foreground/80 font-medium">Variáveis analisadas</div>
                <p className="text-sm text-gray-600 pt-1">Dados completos do ambiente</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NOSSA HISTÓRIA - CORES PADRONIZADAS */}
      <section className="py-20 px-6 bg-green-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className=" flex items-center justify-center">
              {/* Imagem substituída por URL de placeholder responsivo */}
              <img
                src={historia}
                alt="Nossa História"
                className="rounded-2xl w-full max-w-md md:max-w-lg object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">Nossa História</h2>
              {/* Texto base em verde claro (text-green-100) e palavras-chave em branco (text-white) */}
              <p className="text-lg text-green-100 leading-relaxed mb-6">
                O <strong >AURA</strong> nasceu com uma missão clara: democratizar a
                <strong > tecnologia sustentável </strong>para todos os produtores rurais.
              </p>
              <div className="pl-6 border-l-4 space-y-4 text-green-100 text-lg mb-6">
                <p>
                  Acreditamos que <strong > todo agricultor </strong> deve ter acesso a <strong > monitoramento confiável </strong> de água, luz e nutrientes.
                  Para isso, unimos <strong > inovação tecnológica e praticidade, </strong> criando uma <strong > solução acessível </strong> que impulsiona a agricultura brasileira.
                </p>
              </div>
              {/* Texto da citação padronizado para text-green-100 */}
              <div className="p-6 rounded-2xl bg-green-200/5 border border-green-300/20 mb-6">
                <p className="text-base leading-relaxed text-green-100 font-medium">
                  "Nosso compromisso é empoderar produtores com dados precisos e insights acionáveis, promovendo uma
                  agricultura mais inteligente, sustentável e lucrativa."
                </p>
              </div>
              <div className="flex flex-wrap gap-10 pt-2">
                {/* As tags abaixo já estavam consistentes com text-green-100 */}
                <div className="group px-5 py-3 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-green-300/20 hover:border-green-400/60 transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <div className="flex items-center gap-2">
                    <strong className="text-sm text-foreground text-green-100">Sustentabilidade</strong>
                  </div>
                </div>
                <div className="group px-5 py-3 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-green-300/20 hover:border-green-400/60 transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <div className="flex items-center gap-2">
                    <strong className="text-sm text-foreground text-green-100">Inovação</strong>
                  </div>
                </div>
                <div className="group px-5 py-3 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-green-300/20 hover:border-green-400/60 transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <div className="flex items-center gap-2">
                    <strong className="text-sm text-foreground text-green-100">Acessibilidade</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. NOSSOS DIFERENCIAIS - SEM ALTERAÇÕES DE COR */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-900 mb-16 font-montserrat">
            Nossos Diferenciais
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {/* Cartão 1 */}
            <div
              className="bg-white rounded-2xl p-6 shadow-lg border border-green-800/60 transition-all duration-300 text-center"
            >
              <div className="flex items-start mb-3">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center mr-4">
                  <FaChartLine className="text-base text-green-800" />
                </div>
                <h3 className="text-lg font-bold text-green-900 mt-1">Decisões em Tempo Real (RTD)</h3>
              </div>
            </div>

            {/* Cartão 2 */}
            <div
              className="bg-white rounded-2xl p-6 shadow-lg border border-green-800/60  transition-all duration-300 text-center"
            >
              <div className="flex items-start mb-3">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center mr-4">
                  <PiTargetBold className="text-base text-green-800" />
                </div>
                <h3 className="text-lg font-bold text-green-900 mt-1">Otimização de Recursos</h3>
              </div>
            </div>

            {/* Cartão 3 */}
            <div
              className="bg-white rounded-2xl p-6 shadow-lg border border-green-800/60  transition-all duration-300 text-center"
            >
              <div className="flex items-start mb-3">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center mr-4">
                  <FaSatellite className="text-base text-green-800" />
                </div>
                <h3 className="text-lg font-bold text-green-900 mt-1">Dados Científicos de Campo</h3>
              </div>
            </div>

            {/* Cartão 4 */}
            <div
              className="bg-white rounded-2xl p-6 shadow-lg border border-green-800/60  transition-all duration-300 text-center"
            >
              <div className="flex items-start mb-3">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center mr-4">
                  <FaLeaf className="text-base text-green-800" />
                </div>
                <h3 className="text-lg font-bold text-green-900 mt-1">Sustentabilidade Comprovada</h3>
              </div>
            </div>

            {/* Cartão 5 */}
            <div
              className="bg-white rounded-2xl p-6 shadow-lg border border-green-800/60  transition-all duration-300 text-center"
            >
              <div className="flex items-start mb-3">
                <div className=" w-10 h-10 flex-shrink-0 flex items-center justify-center mr-4">
                  <FaBell className="text-base text-green-800 " />
                </div>
                <h3 className="text-lg font-bold text-green-900 mt-1">Alerta Preditivo Imediato</h3>
              </div>
            </div>

            {/* Cartão 6 */}
            <div
              className="bg-white rounded-2xl p-6 shadow-lg border border-green-800/60  transition-all duration-300 "
            >
              <div className="flex items-start mb-3">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center mr-4">
                  <FaRocket className="text-base text-green-800" />
                </div>
                <h3 className="text-lg font-bold text-green-900 mt-1">Tecnologia Simples e Acessível</h3>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}