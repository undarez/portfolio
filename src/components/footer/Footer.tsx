import React from 'react';
import './_footer.scss';
import logo from '../../asset/logoUndarez.png';

const Footer = (): JSX.Element => {
      return (
            <footer>
                        <div className="container-logo">
                              <img src={logo} alt="logo perso de undarez" />
                        </div>
                  <hr className="ligne-h1"/>
                  <div className='container-href'>
                  <a href="#ancre-carousel">Home</a>
                  <a href="#ancre-presentation">Présentation</a>
                  <a href="#ancre-projet">Projets</a>
                  <a href="mailto:fortuna77320@gmail.com">Contact</a>
                  </div>
                  <hr className="ligne-h1"/>
                  <p className='copyright'>Copyright © 2023 PorteFolio d'Undarez Tous droits réservés.</p>
            </footer>
      );
};

export default Footer;
