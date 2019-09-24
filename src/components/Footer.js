import React from 'react';
import logoAdalab from './../images/logoAdalab.png';
import './../stylesheets/Footer.scss';


class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <p className="footer-text">SPA created by <a href="https://github.com/neired">@neired</a></p>
        <a href="https://adalab.es/"><img src={logoAdalab} alt="logo Adalab" className="logo-adalab"></img></a>
      </div>
    )
  }
}

export default Footer;