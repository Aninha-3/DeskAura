import './Footer.module.css'
import logoFooter from '../assets/logoVerde.png'

export function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <img src={logoFooter} alt="Logo da Aura" className="footer-logo" />
        <h3 className="footer-text">
          Revolucionando com inteligência artificial e sustentabilidade.
        </h3>
      </div>

      <div className="footer-bottom">
        <p>© 2025 AURA Todos os direitos reservados</p>
        <a href="/TermosDePrivacidade">Termos de uso e privacidade</a>
      </div>
    </footer>
  )
}
