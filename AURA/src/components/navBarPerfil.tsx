import '../components/navBarPerfil.modules.css';
import perfil from '../assets/perfil.jpg';



/*DEPOIS TEM QUE IMPORAR A NAVBAR PERFIL NO COMPONENTE DO FORM SIMULADOR*/


export function NavBarPerfil() {
    return (
        <header className="NavBarPerfil">
        <nav className="BarPerfil">
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