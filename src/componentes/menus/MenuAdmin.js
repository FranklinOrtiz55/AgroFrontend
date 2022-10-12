import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../UserContext';


export const MenuAdmin = () => {

  const { estaRegistrado} = useContext(UserContext); // importo useContext para saber si el usuario esta registrado o no.

  //if (estaRegistrado.loguin === true && estaRegistrado.rolesUsuario.includes("Productor"))
  //const  results = estaRegistrado.rolesUsuario.filter( roles => (roles.name === "Productor") || (roles.name === "Administrador") );

  //if (estaRegistrado.loguin === false ) return null;
  if (estaRegistrado.loguin === false ) return null
  
  //else if (results.lengh > 0  ) 
    
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
      Administrador
    </NavLink>
    <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">

    <li>
        <Link className="dropdown-item" to="/productoGeneral">
          Agregar Producto
        </Link>
      </li>
      
      
    </ul>
  </li>

  {/* TERMINA  MENU DE ADMINISTRADOR*/}

</>
    
    
  )  

}




