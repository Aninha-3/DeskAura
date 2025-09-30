import Hero from "../components/Hero";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import fundo from '../assets/img1.png'; 

export default function Home() {
  return (
    <div className="Container">
      <div
        style={{
          backgroundImage: `url(${fundo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          paddingBottom: "20px"
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "28px",
            fontWeight: "300",
            padding: "5px 10px",
            margin: "0",
            fontFamily: "Montserrat"
          }}>Agricultura Unificada de Registros Analíticos</h1>
      </div>


      <Navbar />

      <Hero />

      <Footer />
    </div>
  );
}
