import './Footer.module.css'

export function Footer() {
  return (
    <footer className="footer-container">
      <p>© {new Date().getFullYear()} Aura. Todos os direitos reservados.</p>
    </footer>
  );
}
