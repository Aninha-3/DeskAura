import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro/Cadastro';
import Simulador from './pages/Simulador/Simulador';
import Chatbot from './components/Assistente'; 
import { Footer } from './components/Footer';


function App() {
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
