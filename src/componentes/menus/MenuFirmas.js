import React from 'react';
import { NavLink } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../UserContext';

//export const MenuAsesores = () => {
 

export const MenuFirmas = () => {
  const { estaRegistrado} = useContext(UserContext); // importo useContext para saber si el usuario esta registrado o no.

  if (estaRegistrado.loguin === false ) return null     // si no esta registrado, no se muestra el menu
  return (
    <NavLink
    className=" d-inline-flex  text-my-own-color nav-item nav-link"
    to="/suelos"
  >
    Firmar 
  </NavLink>
  )
}
