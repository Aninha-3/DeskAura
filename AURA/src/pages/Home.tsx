import Hero from "../components/Hero";
import fundo from '../assets/videos/videoPlantas.mp4'; 
import { useState, useEffect } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="Container">
      <div style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden"
      }}>
        {/* Vídeo como fundo */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            top: 0,
            left: 0,
            zIndex: -1
          }}
        >
          <source src={fundo} type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>

        {/* Overlay gradiente moderno */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.05) 0%, transparent 50%),
            linear-gradient(135deg, rgba(11, 43, 28, 0.3) 0%, rgba(34, 139, 34, 0.2) 100%)
          `,
          zIndex: 0
        }} />

        {/* Grid background sutil */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          zIndex: 0
        }} />

        {/* Conteúdo principal */}
        <div style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          textAlign: "center",
          padding: "40px 20px 120px 20px"
        }}>

          {/* Container com animação de entrada */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "60px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
          }}>

            {/* AURA limpa e única - SEM FUNDO */}
            <h1 style={{
              color: "white",
              fontSize: "clamp(70px, 12vw, 140px)",
              fontWeight: "400",
              fontStyle: "italic",
              fontFamily: "'Playfair Display', 'Georgia', serif",
              margin: "0 0 30px 0",
              letterSpacing: "8px",
              textTransform: "uppercase",
              lineHeight: "1.1",
              textShadow: `
                0 2px 10px rgba(0,0,0,0.3),
                0 4px 30px rgba(0,0,0,0.2)
              `,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
            }}>
              AURA
            </h1>

            {/* Subtítulo com animação em cascata */}
            <div style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
            }}>
              {/* Linha decorativa animada */}
              <div style={{
                width: "100px",
                height: "3px",
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
                margin: "0 auto 20px auto",
                borderRadius: "1px",
                transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
                transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.6s'
              }} />

              <p style={{
                color: "white",
                fontSize: "clamp(16px, 1.8vw, 20px)",
                fontWeight: "300",
                fontFamily: "Montserrat",
                margin: "0 0 12px 0",
                letterSpacing: "4px",
                textTransform: "uppercase",
                opacity: "0.9"
              }}>
                Agricultura Unificada de Registros Analíticos
              </p>
            </div>

          </div>

          {/* Indicador scroll sutil */}
          <div style={{
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            opacity: 0.6
          }}>
            <div style={{
              width: "1px",
              height: "40px",
              background: "linear-gradient(180deg, rgba(255,255,255,0.8) 0%, transparent 100%)",
              animation: "scrollIndicator 2s infinite"
            }} />
            <style>
              {`
                @keyframes scrollIndicator {
                  0% { opacity: 0; transform: translateY(-10px); }
                  50% { opacity: 1; transform: translateY(0); }
                  100% { opacity: 0; transform: translateY(10px); }
                }
              `}
            </style>
          </div>

        </div>

        {/* Rodapé minimalista */}
        <div style={{
          position: "absolute",
          bottom: "30px",
          left: "0",
          width: "100%",
          textAlign: "center",
          zIndex: 2
        }}>
          <h2 style={{
            color: "rgba(255,255,255,0.8)",
            fontSize: "clamp(12px, 1.5vw, 16px)",
            fontWeight: "300",
            fontFamily: "Montserrat",
            margin: "0 0 6px 0",
            letterSpacing: "2px",
            textTransform: "uppercase"
          }}>
            Sistema Integrado
          </h2>
        </div>

      </div>

      <Hero />
    </div>
  );
}