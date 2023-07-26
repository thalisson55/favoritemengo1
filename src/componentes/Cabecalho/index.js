import React from 'react';
import Style from './Cabecalho.module.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

// export default function Cabecalho(props) {
 const Cabecalho = ({logo, title}) => {
  return (
    <header> 
      <div>
        <img src={logo} alt="logo01"/>
        <h1>{title}</h1>
      </div>

      <nav className="navbar">
        <ul className={Style.bar}>
          <li><a href= "Pagina Principal" >Home</a></li>
          <li><a href= "Contato" >Contato</a></li>
          <li><a href= "Menu" >Menu</a></li>
        </ul>
      </nav>
    </header>
   
  );
// };
};
export default Cabecalho;