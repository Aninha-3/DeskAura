import Hero from "../components/Hero";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import fundo from '../assets/img1.png'; // importa a imagem diretamente

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
          flexDirection: "column",
        }}
      >
      </div>

      <Navbar />

      <Hero />

      <Footer />
    </div>
  );
}
