import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">


      <div className="contact">
        <p>contact@lacarafe.com</p>
        <p>06 66 44 87 84</p>
        <p>La Carafe</p>
        <p>3 rue du puits merdreaux</p>
        <p>21190 Chassagne-Montrachet</p>
      </div>

      <div className="logoLinks">
        <img src={'/logoBlanc.png'} alt=""/>
        <div className="links">
          <img src={'/linkedin.png'} alt=""/>
          <img src={'/instagram.png'} alt=""/>
          <img src={'/facebook.png'} alt=""/>
        </div>
      </div>
      </div>

      <div className="copyright">
        <p>© 2021 LA CARAFE - L’abus d’alcool est dangereux pour la santé, sachez consommer avec modération.</p>
      </div>
    </footer>
  );
};

export default Footer;
