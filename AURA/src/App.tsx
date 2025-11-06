// src/App.tsx
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import RedefinirSenha from './pages/Redefinirsenha/RedefinirSenha';
import ConfirmarCodigo from './pages/Redefinirsenha/ConfirmarCod/ConfirmarCod';
import NovaSenha from './pages/Redefinirsenha/NovaSenha/NovaSenha';
import Sobre from './pages/Sobre/sobreHistoria'
import Simulador from './pages/Simulador/Simulador';
import { PrivateRoute } from './components/PrivateRoute';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Chatbot from './components/Assistente';
import PrivacyPolicy from './pages/Politica/PrivacyPolicy';
import { AuthProvider } from './context/AuthContext';

export default function App() {
  const location = useLocation();

  const noFooterRoutes = ['/cadastro', '/login', '/redefinir-senha', '/redefinir/nova-senha', '/redefinir/confirmar-codigo', '/simulador'];
  const noNavbarRoutes = ['/cadastro', '/login', '/redefinir-senha', '/redefinir/nova-senha', '/redefinir/confirmar-codigo'];

  const showFooter = !noFooterRoutes.includes(location.pathname.toLowerCase());
  const showNavbar = !noNavbarRoutes.includes(location.pathname.toLowerCase());

  return (
    // 1. Container principal que organiza tudo em uma coluna flexível
    // e garante que a altura mínima seja a da tela.
    <div className="flex flex-col min-h-screen">
      {showNavbar && <Navbar />}

      {/* 2. Conteúdo principal que "cresce" para ocupar o espaço disponível */}
      <main className="flex-grow">
        <Routes>
          <Route path="/redefinir/nova-senha" element={<NovaSenha />} />
          <Route path="/redefinir/confirmar-codigo" element={<ConfirmarCodigo />} />
          <Route path="/redefinir-senha" element={<RedefinirSenha />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/privacidade" element={<PrivacyPolicy />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route
            path="/simulador"
            element={
              <PrivateRoute>
                <Simulador />
              </PrivateRoute>
            }
          />
        </Routes>
      </main>

      {/* O Footer ficam fora do <main> para não rolarem com a página, se desejado */}
     
      {showFooter && <Footer />}
    </div>
  );
}