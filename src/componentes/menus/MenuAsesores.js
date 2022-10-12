import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../UserContext';

export const MenuAsesores = () => {
  const { estaRegistrado} = useContext(UserContext); // importo useContext para saber si el usuario esta registrado o no.

  if (estaRegistrado.loguin === false ) return null     // si no esta registrado, no se muestra el menu
  return (

   
    //{/* INICIA MENU DE ADMINISTRADOR*/}
    <>
    <li className="nav-item dropdown">
    <NavLink
      className="nav-link dropdown-toggle"
      to="#"
      id="navbarDropdown1"
      role="button"
      data-bs-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      Asesor
    </NavLink>
    <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">

    <li>
        <Link className="dropdown-item" to="/">
          Listar Clientes
        </Link>
      </li>
      
      
    </ul>
  </li>

  {/* TERMINA  MENU DE ADMINISTRADOR*/}

</>
    
    
  )
}
