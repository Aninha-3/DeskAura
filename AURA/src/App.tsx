import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
//import Footer from './components/Footer';
 //<Footer />

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Adicione outras rotas aqui */}
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;