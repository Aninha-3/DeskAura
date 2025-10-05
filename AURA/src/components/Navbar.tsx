import './NavBar.modules.css'

const user = JSON.parse(localStorage.getItem('user') || 'null');

export function Navbar() {
  return (
    <header className="Nav-bar">
      <nav className="navBar">
        <a href="#" className="LinhaNav">Home</a>
        <a href="#" className="LinhaNav">Contato</a>
        <a href="#" className="LinhaNav">About</a>
        <a href="/Simulador" className="LinhaNav">Simulador</a>
      </nav>


        <div className="navButtons">
        <a href="Login" className="navButton">Login</a>
        <a href="Cadastro" className="navButton">Cadastro</a>
      </div>
    </header>
  );
}
