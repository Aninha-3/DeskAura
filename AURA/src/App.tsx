import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Footer }  from './components/Footer';
// If your file is named 'Login.tsx' or 'Login.jsx', use the correct extension:
import Cadastro from './pages/Cadastro/Cadastro';
// If the file is actually named 'login.tsx', change the import to:
 // import Login from "./pages/login";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/" element={<Home />} />
          <Route path='/Cadastro' element={<Cadastro />} />
          <Route path="/Footer" element={<Footer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;