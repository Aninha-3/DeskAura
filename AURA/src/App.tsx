// src/App.tsx
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import Simulador from './pages/Simulador/Simulador';
import { PrivateRoute } from './components/PrivateRoute';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Chatbot from './components/Assistente';
import { AuthProvider } from './context/AuthContext';

export default function App() {
  const location = useLocation();

  // Rotas que não terão footer nem navbar
  const noFooterRoutes = ['/cadastro', '/login'];
  const noNavbarRoutes = ['/cadastro', '/login'];

  const showFooter = !noFooterRoutes.includes(location.pathname.toLowerCase());
  const showNavbar = !noNavbarRoutes.includes(location.pathname.toLowerCase());

  return (
    <>
      {showNavbar && <Navbar />}

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
