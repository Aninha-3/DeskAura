import './Footer.modules.css'

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">

            AURA
          </div>
          <p className="footer-text">
            Revolucionando o futuro da agricultura sustentável.
          </p>
        </div>
        
        <div className="footer-links">
          <div className="link-group">
            <h3>Links Rápidos</h3>
            <ul>
              <li><a href="#"><i className="fas fa-chevron-right"></i> Página Inicial</a></li>
              <li><a href="#"><i className="fas fa-chevron-right"></i> Sobre Nós</a></li>
              <li><a href="#"><i className="fas fa-chevron-right"></i> Serviços</a></li>
              <li><a href="#"><i className="fas fa-chevron-right"></i> Contato</a></li>
            </ul>
          </div>
    
          <div className="link-group">
            <h3>Contato</h3>
            <ul>
              <li><a href="#"><i className="fas fa-map-marker-alt"></i> São Paulo, Brasil</a></li>
              <li><a href="#"><i className="fas fa-phone"></i> +55 (11) 99999-9999</a></li>
              <li><a href="#"><i className="fas fa-envelope"></i> auraservicosbr@gmail.com</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2025 AURA Todos os direitos reservados</p>
        <a href="/TermosDePrivacidade">Termos de uso e privacidade</a>
      </div>
    </footer>
  )
}