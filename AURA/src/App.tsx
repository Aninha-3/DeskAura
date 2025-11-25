import React, { useEffect, useRef, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Carregamento from "./components/carregamento";
import Home from './pages/Home';
import { ModalProvider } from './context/ModalContext';

import { Navbar } from './components/Navbar';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';

import Sobre from './pages/Sobre/sobreHistoria'
import Produto from './pages/Produto/Produto';
import Simulador from './pages/Simulador/Simulador';
import { Perfil } from './pages/Perfil/perfil';
import { PrivateRoute } from './components/PrivateRoute';

import { Footer } from './components/Footer';
import Chatbot from './components/Assistente';
import PrivacyPolicy from './pages/Politica/PrivacyPolicy';

import RedefinirSenha from './pages/Redefinirsenha/RedefinirSenha';
import ConfirmarCodigo from './pages/Redefinirsenha/ConfirmarCod/ConfirmarCod';
import NovaSenha from './pages/Redefinirsenha/NovaSenha/NovaSenha';
import { AuthProvider } from './context/AuthContext';
import EditarSenha from './pages/Perfil/EditarSenha';

function AppContent() {
  const location = useLocation();

  // rotas que não mostram footer/nav
  const noFooterRoutes = ['/cadastro', '/login', '/redefinir-senha', '/redefinir/nova-senha', '/redefinir/confirmar-codigo', '/simulador'];
  const noNavbarRoutes = ['/cadastro', '/login', '/redefinir-senha', '/redefinir/nova-senha', '/redefinir/confirmar-codigo'];

  const showFooter = !noFooterRoutes.includes(location.pathname.toLowerCase());
  const showNavbar = !noNavbarRoutes.includes(location.pathname.toLowerCase());

  // controle do loader
  const [initialLoading, setInitialLoading] = useState(true);
  const [routeLoading, setRouteLoading] = useState(false);
  const firstLoadRef = useRef(true);
  const prevPath = useRef(location.pathname);
  const timeoutRef = useRef<number | null>(null);

  // rotas que devem exibir loader full-screen (inclui home e cadastro/login)
  const fullScreenRoutes = ['/', '/cadastro', '/login'];

  // primeiro carregamento: mostra full-screen
  useEffect(() => {
    const t = window.setTimeout(() => {
      setInitialLoading(false);
      firstLoadRef.current = false;
    }, 2500);
    return () => window.clearTimeout(t);
  }, []);

  // detectar mudança de rota (não conta primeiro load)
  useEffect(() => {
    if (firstLoadRef.current) {
      prevPath.current = location.pathname;
      return;
    }
    if (prevPath.current === location.pathname) return;

    const dest = location.pathname.toLowerCase();
    const isFull = fullScreenRoutes.includes(dest);

    if (isFull) {
      // cancela timeout anterior se houver
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      setRouteLoading(true);
      timeoutRef.current = window.setTimeout(() => {
        setRouteLoading(false);
        timeoutRef.current = null;
      }, 2500); // duração do overlay full-screen
    }

    prevPath.current = location.pathname;
    // cleanup
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [location.pathname]);

  // visível quando for o primeiro load ou em transição para rotas full-screen
  const carregarVisivel = initialLoading || routeLoading;

  // DEBUG (remova depois) — comente se quiser
  // console.log("loader states:", { initialLoading, routeLoading, carregarVisivel, path: location.pathname });

  // se for primeiro load, mostramos apenas o loader full-screen antes de montar a app
  if (initialLoading) {
    return <Carregamento visible={true} />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Carregamento visible={carregarVisivel} />

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
          <Route path="/perfil" element={<Perfil />} />    
          <Route path="/privacidade" element={<PrivacyPolicy />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/editar-senha" element={<EditarSenha />} />

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
