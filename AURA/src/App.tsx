import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Footer }  from './components/Footer';
// If your file is named 'Login.tsx' or 'Login.jsx', use the correct extension:
import Cadastro from './pages/Cadastro/Cadastro';
import Simulador from './pages/Simulador/Simulador';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Cadastro' element={<Cadastro />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/Simulador" element={<Simulador/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;