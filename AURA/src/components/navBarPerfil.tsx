import '../components/navBarPerfil.modules.css';
import perfil from '../assets/perfil.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { useModal } from '../context/ModalContext';
import { AuthContext } from '../context/AuthContext';

export function Navbar() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const { openContact } = useModal();

  const handleLogout = () => {
    auth?.logout();
    navigate('/login');
  };

  return (
    <header className="NavBarPerfil">
      <nav className="BarPerfil">
        <Link to="/" className="LinhaNav">Início</Link>
        <button onClick={openContact} className="LinhaNav">Contato</button>
        <Link to="/sobre" className="LinhaNav">Sobre</Link>
        <Link to="/produto" className="LinhaNav">Produto</Link>
        <Link to="/simulador" className="LinhaNav">Simulador</Link>
      </nav>

      <div className="navButtonsPerfil">
        <img src={perfil} alt="Perfil" className="perfilIcon" />
        <Link to="/perfil" className="navButtonPerfil">Perfil</Link>
        <button onClick={handleLogout} className="navButtonPerfil">Sair</button>
      </div>
    </header>
  );
}
