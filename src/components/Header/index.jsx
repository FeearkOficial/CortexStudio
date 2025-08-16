import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { isAutheticated, logout } from "../../utils/storage";
import './Header_style.css'
 
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
 
  const navigate = useNavigate();
  return (
    <>
  {/* Cabeçalho fixo da página */}
  <div className="area-logo">
    {/* Container para o logo */}
    <a href="/">
      {/* Link para a página inicial */}
      <img
        src="/assets/img/logo.jpg"
        className="area-logo-img"
        alt="Logo Patas do Amanhã"
      />
      {/* Imagem do logo com texto alternativo */}
    </a>
  </div>
  <nav className="area-nav">
    {/* Navegação principal */}
    <ul className="nav-list">
      {/* Lista de itens de navegação */}
      <li className="nav-list-item">
        {/* Item de menu */}
        <a href="#">Início</a>
        {/* Link para página inicial */}
      </li>
      <li className="nav-list-item has-submenu">
        {/* Item de menu com submenu */}
        <a href="#">
          Formas de ajudar
          <i className="fa-solid fa-arrow-turn-down" />
          {/* Ícone indicando submenu */}
        </a>
        <ul className="submenu" id="nossos-servicos">
          {/* Submenu dropdown */}
          <li>
            <a href="/socio">Seja Sócio</a>
          </li>
          <li>
            <a href="/SejaMelhorAmigo">Seja melhor amigo</a>
          </li>
          <li>
            <a href="/empresas">Empresas</a>
          </li>
          <li>
            <a href="/castracao">Castração</a>
          </li>
        </ul>
      </li>
      <li className="nav-list-item">
        <a href="/adota">Adote</a>
      </li>
      <li className="nav-list-item">
        <a href="/vakinha">Campanhas</a>
      </li>
      {/* <li class="nav-list-item"><a href="">Contato</a></li> */}
    </ul>
  </nav>
  {/* <div class="pts-donate-btn">
  <a href="#final" class="pts-donate">Doação</a>
  </div>  */}
  <div className="nav-store-location">
    {/* Link para localização */}
    <a className="store-location" href="/Localizacao">
      <i className="fa-solid fa-map-location-dot" />
      {/* Ícone de localização */}
      <span>Nossa localização</span>
    </a>
  </div>
</>

  )
}
 
export default Header;