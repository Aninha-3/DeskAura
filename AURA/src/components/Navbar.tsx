import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import './NavBar.modules.css';

import { IoLogOutOutline } from "react-icons/io5";

import { AuthContext } from '../context/AuthContext';

export function Navbar() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    auth?.logout();
    navigate('/login');
  };

  return (
    <header className="Navbar">
      {/* Links principais */}
      <nav className="navBar" aria-label="Navegação principal">
        <Link to="/" className="LinhaNav">Início</Link>
        <Link to="/sobre" className="LinhaNav">Sobre</Link>
        <Link to="/produto" className="LinhaNav">Produto</Link>
        <Link to="/simulador" className="LinhaNav">Simulador</Link>
      </nav>

      {/* Botões de login/logout */}
      <div className="navButtons">
        {auth?.isLoggedIn ? (
          <>
            <button className="navButton">
              <Link to="/perfil"><CgProfile size={26} /></Link>
            </button>
        
            <button className="navButton" onClick={handleLogout}>
              <IoLogOutOutline size={24} />
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="navButton">Login</Link>
            <Link to="/cadastro" className="navButton">Cadastro</Link>
          </>
        )}
      </div>
    </header>
  );
}
