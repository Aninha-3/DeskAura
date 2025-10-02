import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro/Cadastro';
import Simulador from './pages/Simulador/Simulador';
import Chatbot from './components/Assistente'; 
import { Footer } from './components/Footer';


function App() {
  
  const location = useLocation();

  // Definir rotas que NÃO devem ter footer
  const noFooterRoutes = ['/cadastro', '/login'];

  const showFooter = !noFooterRoutes.includes(location.pathname);
  
  return (
    <Router>
      <div className="App">
        {/* Routes principais */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/simulador" element={<Simulador />} />
        </Routes>

        {/* Sempre visível em todas as páginas */}
        <Chatbot />
           {showFooter && <Footer />}
      </div>
    </Router>
  );
}

export default App;
