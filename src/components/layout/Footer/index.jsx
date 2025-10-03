
import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, MapPin, Phone, Mail, Clock, Target } from "lucide-react";
import "./FooterStyle.css";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Serviços", href: "/servicos" },
    { name: "Planos", href: "/planos" },
    { name: "Blog", href: "/blog" },
    { name: "Contato", href: "/contato" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/cortexoficial/", label: "Instagram"},
    { icon: Facebook, href: "https://www.facebook.com/Weslley.Goin/", label: "Facebook"},
    { icon: Linkedin, href: "https://www.linkedin.com/in/weslleyvict0r/", label: "LinkedIn"},
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <p className="footer-description">
              Performance máxima para seu computador com agilidade, transparência e garantia.
            </p>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="social-icon-link"
                  aria-label={social.label}
                >
                  <social.icon className="social-icon" />
                </a>
              ))}
            </div>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Links Rápidos</h3>
            <ul className="footer-links-list">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Contato</h3>
            <div className="contact-info-list">
              <div className="contact-info-item">
                <Phone className="icon" />
                <span>(18) 99808-9932</span>
              </div>
              <div className="contact-info-item">
                <Mail className="icon" />
                <span>contato@cortexstudio.com.br</span>
              </div>
              <div className="contact-info-item align-start">
                <MapPin className="icon" />
                <span>Presidente Prudente, SP</span>
              </div>
            </div>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Horário de Funcionamento</h3>
            <div className="hours-info-list">
              <div className="contact-info-item">
                <Clock className="icon" />
                <div>
                  <div>Seg - Sex: 9h às 18h</div>
                  <div>Sáb: 9h às 12h</div>
                  <div>Dom: Fechado</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2025 Cortex Studio — Performance máxima para seu computador.
          </div>
          <div className="footer-legal-links">
            <Link to="/termos" className="footer-link">Termos de Uso</Link>
            <Link to="/privacidade" className="footer-link">Política de Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;