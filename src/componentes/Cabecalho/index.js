import React from 'react';
import styles from './/Cabecalho.module.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

// export default function Cabecalho(props) {
 const Cabecalho = ({logo, title}) => {
  return (
    <header> 
      <div>
        <img src={logo} alt="logo192.png"/>
        <h1>{title}</h1>
      </div>

      <nav className="navbar">
        <ul className={styles.bar}>
          <li><a href= "Pagina Principal" >Home</a></li>
          <li><a href= "Contato" >Contato</a></li>
          <li><a href= "Menu" >Menu</a></li>
        </ul>
      </nav>
    </header>
  );
// };
};

