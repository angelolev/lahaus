import React from "react";
import logoXs from "../assets/logo-xs.svg";
import logoSm from "../assets/logo-sm.svg";

const Nav = (props) => {
  //no es la mejor forma de mostrar/ocultar pero para el test funciona :)
  const toggleMenu = () => {
    let navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("show");
  };

  return (
    <nav className="nav">
      <div className="nav__icons">
        <div className="nav__icons-burguer">
          <i className="icon icon-menu" onClick={toggleMenu}></i>
          <div className="notifications"></div>
        </div>
        <div className="nav__icons-logo">
          <img className="hidden-sm" src={logoXs} alt="Logo xs" />
          <img className="hidden-xs" src={logoSm} alt="Logo sm" />
        </div>
      </div>
      <ul className="nav__links fadeIn" id="navMenu">
        <button id="navClose" onClick={toggleMenu}>
          X
        </button>
        <li>
          <a href="/cundinamarca">Cundinamarca</a>
        </li>
        <li>
          <a href="/antioquia">Antioquia</a>
        </li>
        <li>
          <a href="/recursos">Recursos</a>
        </li>
        <li className="hidden-sm">
          <a href="/perfil">Mi Perfil</a>
        </li>
        <li className="hidden-xs">
          Mi Perfil{" "}
          <i className="icon icon-arrow-down">
            <div className="notifications"></div>
          </i>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
