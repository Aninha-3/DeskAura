import './Footer.modules.css'
import logoFooter from '../assets/logoVerde.png'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={logoFooter} alt="Logo da Aura" />
            AURA
          </div>
          <p className="footer-text">
            Revolucionando com inteligência artificial e sustentabilidade. 
            Desenvolvemos soluções inovadoras para o futuro da agricultura sustentável.
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
            <h3>Nossos Serviços</h3>
            <ul>
              <li><a href="#"><i className="fas fa-chevron-right"></i> Monitoramento</a></li>
              <li><a href="#"><i className="fas fa-chevron-right"></i> Análise de Dados</a></li>
              <li><a href="#"><i className="fas fa-chevron-right"></i> Consultoria</a></li>
              <li><a href="#"><i className="fas fa-chevron-right"></i> Suporte Técnico</a></li>
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
        <div className="social-links">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
        <a href="/TermosDePrivacidade">Termos de uso e privacidade</a>
      </div>
    </footer>
  )
}