import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../UserContext';


export const MenuRegistros = () => {
  const { estaRegistrado} = useContext(UserContext); // importo useContext para saber si el usuario esta registrado o no.

  if (estaRegistrado.loguin === false ) return null     // si no esta registrado, no se muestra el menu
  return (

   
    //{/* INICIA MENU DE REGISTROS*/}
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
      Registros
    </NavLink>
    <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">

    <li>
        <Link className="dropdown-item" to="/datosCultivo">
          Datos del Cultivo
        </Link>
      </li>
      
    <li>
        <hr className="dropdown-divider"></hr>
      </li>
      <li>
        <Link className="dropdown-item" to="/inventario">
          inventario
        </Link>
      </li>
      <li>
        <Link className="dropdown-item" to="/labores">
          Labores en el predio
        </Link>
      </li>
      <li>
        <hr className="dropdown-divider"></hr>
      </li>
      <li>
        <Link className="dropdown-item" to="/">
          Uso del Agua
        </Link>
      </li>
      <li>
        <Link className="dropdown-item" to="/">
          Bio-Preparados
        </Link>
      </li>
      <li>
        <hr className="dropdown-divider"></hr>
      </li>
      <li>
        <Link className="dropdown-item" to="/">
          Estadisticas
        </Link>
      </li>
    </ul>
  </li>

  {/* TERMINA  MENU DE REGISTROS*/}

</>
    
    
  )
}
