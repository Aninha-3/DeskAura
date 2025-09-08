import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import footer from './components/Footer';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/footer" element={<footer />} />
         
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;