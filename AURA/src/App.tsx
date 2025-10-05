import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import Simulador from './pages/Simulador/Simulador';
import { PrivateRoute } from './components/PrivateRoute';
import { Footer } from './components/Footer';
import Chatbot from './components/Assistente';

// Componente Layout que controla o footer
function Layout() {
  const location = useLocation();

  // Rotas que não terão footer
  const noFooterRoutes = ['/cadastro', '/login'];
  const showFooter = !noFooterRoutes.includes(location.pathname.toLowerCase());

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route
          path="/simulador"
          element={
            <PrivateRoute>
              <Simulador />
            </PrivateRoute>
          }
        />
      </Routes>

      <Chatbot />
      {showFooter && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Layout />
      </Router>
    </AuthProvider>
  );
}
