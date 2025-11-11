import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import { ModalProvider } from './context/ModalContext';

import { Navbar } from './components/Navbar';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';

import Sobre from './pages/Sobre/sobreHistoria'
import Produto from './pages/Produto/Produto';
import Simulador from './pages/Simulador/Simulador';
import { PrivateRoute } from './components/PrivateRoute';

import { Footer } from './components/Footer';
import Chatbot from './components/Assistente';
import PrivacyPolicy from './pages/Politica/PrivacyPolicy';

import RedefinirSenha from './pages/Redefinirsenha/RedefinirSenha';
import ConfirmarCodigo from './pages/Redefinirsenha/ConfirmarCod/ConfirmarCod';
import NovaSenha from './pages/Redefinirsenha/NovaSenha/NovaSenha';
import { AuthProvider } from './context/AuthContext';

function AppContent() {
  const location = useLocation();

  const noFooterRoutes = ['/cadastro', '/login', '/redefinir-senha', '/redefinir/nova-senha', '/redefinir/confirmar-codigo', '/simulador'];
  const noNavbarRoutes = ['/cadastro', '/login', '/redefinir-senha', '/redefinir/nova-senha', '/redefinir/confirmar-codigo'];

  const showFooter = !noFooterRoutes.includes(location.pathname.toLowerCase());
  const showNavbar = !noNavbarRoutes.includes(location.pathname.toLowerCase());

  return (
    <div className="flex flex-col min-h-screen">
      {showNavbar && <Navbar />}

      <main className="flex-grow">
        <Routes>
          <Route path="/redefinir/nova-senha" element={<NovaSenha />} />
          <Route path="/redefinir/confirmar-codigo" element={<ConfirmarCodigo />} />
          <Route path="/redefinir-senha" element={<RedefinirSenha />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/produto" element={<Produto />} />
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

      {showFooter && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <ModalProvider>
        <AppContent />
      </ModalProvider>
    </AuthProvider>
  );
}
