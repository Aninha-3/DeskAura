import React, { useContext } from 'react';
import './NavBar.modules.css';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export function Navbar() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    auth?.logout();
    navigate('/login');
  };

  return (
    <header className="Nav-bar">
      <nav className="navBar">
        <a href="/" className="LinhaNav">Home</a>
        <a href="#" className="LinhaNav">Contato</a>
        <a href="#" className="LinhaNav">About</a>
        <a href="/simulador" className="LinhaNav">Simulador</a>
      </nav>

      <div className="navButtons">
        {auth?.isLoggedIn ? (
          <button className="navButton" onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <a href="/login" className="navButton">Login</a>
            <a href="/cadastro" className="navButton">Cadastro</a>
          </>
        )}
      </div>
    </header>
  );
}
