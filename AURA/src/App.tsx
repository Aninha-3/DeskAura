import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Cadastro' element={<Cadastro />} />
          <Route path="/Footer" element={<Footer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
