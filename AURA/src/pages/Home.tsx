import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
      </main>
      <Footer/>
    </div>
  );
}
