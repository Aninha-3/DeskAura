import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro/Cadastro';
import Login from './pages/Login/Login';
import Simulador from './pages/Simulador/Simulador';
import Chatbot from './components/Assistente'; 
import { Footer } from './components/Footer';

// Layout com lógica do footer
function Layout() {
  const location = useLocation();

  // Rotas que não terão footer
  const noFooterRoutes = ['/cadastro', '/login'];
  const showFooter = !noFooterRoutes.includes(location.pathname.toLowerCase());

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/simulador" element={<Simulador />} />
      </Routes>

      <Chatbot />
      {showFooter && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
