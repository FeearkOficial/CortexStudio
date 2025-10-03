
import { Link } from "react-router-dom";
import logoImage from './img/logo.png'; 
import './Logo.css';

const Logo = () => {
  return (
    <Link to="/" className="logo-link">
      <img src={logoImage} alt="Logo Cortex Studio" className="logo-image" />
      <span className="logo-text">Cortex Studio</span>
    </Link>
  );
};

export default Logo;