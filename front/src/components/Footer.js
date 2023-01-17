import React from 'react';
import "./Footer.scss";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Footer() {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer__socials">
                <a href="/" className="footer__social"><FacebookIcon /></a>
                <a href="/" className="footer__social"><InstagramIcon /></a>
                <a href="/" className="footer__social"><TwitterIcon /></a>
                <a href="/" className="footer__social"><YouTubeIcon /></a>
            </div>
            <ul className="footer__links">
            <li className="footer__link">Lien footer</li>
            <li className="footer__link">Lien footer</li>
            <li className="footer__link">Lien footer</li>
            <li className="footer__link">Lien footer</li>
            <li className="footer__link">Lien footer</li>
            <li className="footer__link">Lien footer</li>
            <li className="footer__link">Lien footer</li>
            <li className="footer__link">Lien footer</li>
        </ul>
        <div className="footer__copyrights">Site d'Axel - Hayate EIN - tout droits réservés</div>
      </div>
    </footer>
  )
};

export default Footer;