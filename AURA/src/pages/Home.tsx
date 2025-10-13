import Hero from "../components/Hero";
import fundo from '../assets/videos/videoPlantas.mp4'; 

export default function Home() {
  const handleMouseOver = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    target.style.background = "rgba(255,255,255,0.1)";
    target.style.borderColor = "rgba(255,255,255,0.8)";
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    target.style.background = "transparent";
    target.style.borderColor = "rgba(255,255,255,0.5)";
  };

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

        {/* Overlay sutil para contraste */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.2)",
          zIndex: 0
        }} />

        {/* Conteúdo principal centralizado - MAIS ABAIXO */}
        <div style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end", // Mudado para flex-end
          alignItems: "center",
          textAlign: "center",
          padding: "20px",
          paddingBottom: "120px" // Adicionado padding na base
        }}>

          {/* Container principal para AURA */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "40px"
          }}>
            {/* AURA elegante e limpa */}
            <h1 style={{
              color: "white",
              fontSize: "clamp(70px, 12vw, 140px)",
              fontWeight: "400",
              fontStyle: "italic",
              fontFamily: "'Playfair Display', 'Georgia', serif",
              margin: "0 0 20px 0",
              letterSpacing: "8px",
              textTransform: "uppercase",
              lineHeight: "1",
              textShadow: "2px 2px 8px rgba(0,0,0,0.3)"
            }}>
              AURA
            </h1>

            {/* Linha divisória sutil */}
            <div style={{
              width: "150px",
              height: "2px",
              background: "rgba(255,255,255,0.5)",
              margin: "25px 0",
              borderRadius: "1px"
            }} />

            {/* Subtítulo */}
            <p style={{
              color: "white",
              fontSize: "clamp(16px, 2vw, 20px)",
              fontWeight: "300",
              fontFamily: "Montserrat",
              margin: "0",
              letterSpacing: "4px",
              textTransform: "uppercase",
              opacity: "0.9",
              textShadow: "1px 1px 4px rgba(0,0,0,0.3)"
            }}>
              Sistema Integrado
            </p>
          </div>

          {/* Botão discreto */}
          <button 
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.5)",
              color: "white",
              padding: "15px 40px",
              fontSize: "14px",
              fontWeight: "300",
              fontFamily: "Montserrat",
              letterSpacing: "2px",
              textTransform: "uppercase",
              borderRadius: "2px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              marginTop: "30px"
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Começar
          </button>

        </div>

        {/* Rodapé centralizado - AINDA MAIS ABAIXO */}
        <div style={{
          position: "absolute",
          bottom: "60px", // Aumentado para descer mais
          left: "0",
          width: "100%",
          textAlign: "center",
          zIndex: 2
        }}>
          <h2 style={{
            color: "rgba(255,255,255,0.9)",
            fontSize: "clamp(14px, 2vw, 18px)",
            fontWeight: "300",
            fontFamily: "Montserrat",
            margin: "0 0 8px 0",
            letterSpacing: "1px",
            textShadow: "1px 1px 4px rgba(0,0,0,0.3)"
          }}>
            Agricultura Unificada de Registros Analíticos
          </h2>
          <p style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "12px",
            fontWeight: "200",
            fontFamily: "Montserrat",
            margin: "0",
            letterSpacing: "1px"
          }}>
            Gestão Inteligente do Campo
          </p>
        </div>

      </div>

      <Hero />
    </div>
  );
}