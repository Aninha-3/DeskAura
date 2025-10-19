import { useEffect, useState } from "react";
import { BsCookie } from "react-icons/bs";

const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    
    const accepted = localStorage.getItem("cookiesAccepted");
    if (accepted !== "true") {
      // Pequeno delay para garantir que a página carregou
      setTimeout(() => setShowBanner(true), 500);
    }
  }, []);

  const handleAccept = (): void => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowBanner(false);
  };

  if (!isMounted) return null;
  if (!showBanner) return null;

  return (
    <div
      className="fixed bottom-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 
                 flex flex-col md:flex-row items-start md:items-center gap-4 
                 bg-neutral-900 text-white shadow-2xl rounded-2xl 
                 p-6 max-w-2xl w-auto md:w-[90%]
                 border border-neutral-700
                 animate-in fade-in-90 slide-in-from-bottom-4 duration-700
                 z-[9999] backdrop-blur-sm bg-opacity-95"
    >
      {/* Ícone do Cookie */}
      <div className="flex-shrink-0 text-3xl text-yellow-400 animate-pulse">
        <BsCookie />
      </div>

      {/* Conteúdo de Texto e Botão */}
      <div className="flex-1 flex flex-col w-full">
        <p className="text-sm md:text-base leading-relaxed mb-4 text-neutral-100">
          Este site usa cookies para melhorar sua experiência. Ao continuar,
          você aceita o uso de cookies.{" "}
          <a
            href="/privacidade"
            className="text-yellow-400 hover:text-yellow-300 underline font-medium transition-colors duration-200"
          >
            Termos e Política de Privacidade
          </a>
        </p>

        <div className="flex justify-end">
          <button
            onClick={handleAccept}
            className="bg-yellow-400 hover:bg-yellow-500 
                       text-neutral-900 font-semibold py-3 px-8 
                       rounded-lg transition-all duration-300
                       transform hover:scale-105 active:scale-95
                       shadow-lg hover:shadow-xl
                       focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
          >
            Aceitar Todos os Cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;