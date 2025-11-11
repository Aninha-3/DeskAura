import { TbDownload } from "react-icons/tb";
import phoneImage from '../assets/download.gif';
import { motion } from 'framer-motion';

export function SectionDownload() {
  const containerBg = 'bg-gray-100';
  const cardBg = 'bg-[#499F6D]';

  const stats = [
    { value: '10k+', label: 'Downloads' },
    { value: '4.8', label: 'Avaliação' },
    { value: '5k+', label: 'Fazendas Ativas' },
  ];

  const fadeInVariants = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
  };

  return (
    <motion.section 
      className={`w-screen py-12 md:py-20 ${containerBg} flex flex-col items-center justify-center`}
      style={{ fontFamily: 'Monteserrat Alternative, sans-serif' }}
      variants={fadeInVariants}
      initial="initial"
      whileInView="whileInView"
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.5 }}
    >

      {/* Título Principal */}
      <motion.div
        className="text-center max-w-3xl px-4"
        variants={fadeInVariants}
        initial="initial"
        whileInView="whileInView"
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#042B00] mb-4 leading-tight">
          Transforme sua fazenda com o App AUONE
        </h1>
        <p className="text-base md:text-lg text-gray-600 mb-10">
          Disponível para iOS e Android. Comece a revolucionar sua gestão agrícola agora mesmo.
        </p>
      </motion.div>

      {/* Cartão Verde Principal */}
      <motion.div
        className="flex justify-center w-full px-4"
        variants={fadeInVariants}
        initial="initial"
        whileInView="whileInView"
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className={`w-full max-w-6xl ${cardBg} rounded-xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between`}>

          {/* Conteúdo de Texto e Botões */}
          <div className="flex-1 text-white mb-8 md:mb-0 md:pr-8 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
              Gestão na palma da sua mão
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Acesse todos os recursos do AUONE diretamente do seu smartphone. Monitore sua produção em tempo real, onde quer que você esteja.
            </p>

            {/* Botões de Download */}
            <div className="flex justify-center md:justify-start">
              <a
                href="#"
                style={{ textDecoration: 'none', color: 'white' }}
                className="flex items-center justify-center bg-[#042b00] hover:bg-gray-700 text-[#f4f4f4] px-6 py-3 font-semibold rounded-lg transition duration-300 shadow-lg"
              >
                <TbDownload className="mr-2 text-lg text-[#f4f4f4]" />
                Fazer o Download
              </a>
            </div>
          </div>

          {/* GIF */}
          <div className="flex-1 flex justify-center items-center">
            <img 
              src={phoneImage} 
              alt="App AUONE" 
              className="h-full max-h-[1000px] md:max-h-[1100px] object-contain" 
            />
          </div>

        </div>
      </motion.div>

      {/* Seção de Estatísticas Centralizada */}
      <motion.div
        className="mt-12 w-full flex justify-center"
        variants={fadeInVariants}
        initial="initial"
        whileInView="whileInView"
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center text-center text-gray-800"
              variants={fadeInVariants}
              initial="initial"
              whileInView="whileInView"
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h3 className="text-4xl md:text-5xl font-bold text-green-700">
                {stat.value}
              </h3>
              <p className="text-sm md:text-base text-gray-600 mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </motion.section>
  );
}

export default SectionDownload;
