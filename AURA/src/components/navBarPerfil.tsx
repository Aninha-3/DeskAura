import '../components/navBarPerfil.modules.css';
import perfil from '../assets/perfil.jpg';


export function NavBarPerfil() {
    return (
        <header className="NavBarPerfil">
        <nav className="navBarPerfil">
            <a href="#" className="LinhaNavPerfil">Home</a>
            <a href="#" className="LinhaNavPerfil">Contato</a>
            <a href="/Simulador" className="LinhaNavPerfil">Simulador</a>
        </nav>

        <div className="navButtonsPerfil">
            <img src={perfil} alt="Perfil" className="perfilIcon" />
            <a href="Perfil" className="navButtonPerfil">Perfil</a>
        </div>
        </header>
    );
}