import React from 'react'
import { Link, NavLink } from "react-router-dom";

export const MenuHerramientas = () => {
  return (
    
  // INICIA MENU DE HERRAMIENTAS*

     <li className="nav-item dropdown">
     <NavLink
       className="nav-link dropdown-toggle"
       to="#"
       id="navbarDropdown"
       role="button"
       data-bs-toggle="dropdown"
       aria-haspopup="true"
       aria-expanded="false"
     >
       Herramientas
     </NavLink>

    
     <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
       <li>
         <Link className="dropdown-item" to="/densidad">
           Densidad de siembra
         </Link>
       </li>
       <li>
         <Link className="dropdown-item" to="/extraccion">
           Extraccion Nutrientes
         </Link>
       </li>
       <li>
         <hr className="dropdown-divider"></hr>
       </li>
       <li>
         <Link className="dropdown-item" to="/suelos">
           Interpretacion Analisis de suelos
         </Link>
       </li>
     </ul>
   </li>

    // TERMINA MENU DE HERRAMIENTAS*

  )
}
