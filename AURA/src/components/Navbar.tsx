import './NavBar.modules.css'

export function Navbar() {
  return (
    <header className="Nav-bar">
      <nav className="navBar">
        <a href="#" className="LinhaNav">Home</a>
        <a href="#" className="LinhaNav">Contato</a>
        <a href="#" className="LinhaNav">About</a>
        <a href="#" className="LinhaNav">Simulador</a>
      </nav>


        <div className="navButtons">
        <a href="#" className="navButton">Login</a>
        <a href="Cadastro" className="navButton">Cadastro</a>
      </div>
    </header>
  );
}
