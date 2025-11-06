import './Footer.modules.css'
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2 className="logo">AURA</h2>
          <p>Revolucionando o futuro da agricultura sustentável.</p>
        </div>
        
        <div className="footer-links">
          <div className="link-group">
            <h3>Links</h3>
            <a href="#">Página Inicial</a>
            <a href="#">Sobre Nós</a>
            <a href="#">Serviços</a>
            <a href="#">Contato</a>
          </div>
          
          <div className="link-group">
            <h3>Contato</h3>
            <p>São Paulo, Brasil</p>
            <p>+55 (11) 91620-4211</p>
            <p>auraservicosbr@gmail.com</p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2025 AURA. Todos os direitos reservados.</p>
        <Link to="/privacidade">Política de Privacidade</Link>
      </div>
    </footer>
  )
}