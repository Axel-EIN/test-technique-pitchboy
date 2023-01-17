import React from 'react';
import { useState } from 'react';
import "./Nav.scss";
import MenuIcon from '@material-ui/icons/Menu';

function Nav() {
    const [navBlack, setNavBlack] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);

    const transitionNav = () => {
        window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false);
    };

    useState(() => {
        document.addEventListener("scroll", transitionNav);
    });

    const handleToggleMenu = () => {
        console.log(toggleMenu);
        toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
    };

  return (
    <div className={`nav ${navBlack || toggleMenu ? "nav--black" : "nav--transparent" } ${toggleMenu && "show"}`}>
        <button className='nav__burger' onClick={handleToggleMenu}>
            <MenuIcon />
        </button>
        <a href="/">
            <img src="./images/logo_hayate_ein_hwang.png" className = "nav__logo" alt="Logo d'Hayate" />
        </a>
        <nav className='nav__links'>
            <a href="#trending" className='nav__link'>
                Populaire
            </a>
            <a href="#latests" className='nav__link'>
                Dernières sorties
            </a>
            <a href="#upcomings" className='nav__link'>
                Prochaines sorties
            </a>
        </nav>
        <div className="nav__actions">
            <a href="/" className="nav__action"><img src="./images/avatar_felix.jpg" className = "nav__avatar" alt="avatar" /></a>
        </div>
    </div>
  );
}

export default Nav;