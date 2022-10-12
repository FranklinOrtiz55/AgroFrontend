//import { Button } from 'bootstrap'
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useContext } from "react";
//import { MenuRegistros } from "./MenuRegistros";
//import { MenuFirmas } from "./MenuFirmas";
//import { MenuClientes } from "./MenuClientes";
//import { MenuAdmin } from "./MenuAdmin";
//import { MenuAsesores } from "./MenuAsesores";
import { MenuAdmin, MenuAsesores, MenuFirmas, MenuRegistros, MenuHerramientas } from "./menus";



export const NavBarY = () => {

  let Componente1 = null
  let Componente2 = null
  let Componente3 = null

  const { estaRegistrado, setEstaRegistrado } = useContext(UserContext); // importo useContext para saber si el usuario esta registrado o no.
  let  admin = estaRegistrado.rolesUsuario.filter( roles => (roles.name === "Productor") || (roles.name === "Administrador") );  // se valida que sea admin o productor para mostrar el menu registros
  if (admin.length > 0 ) Componente1 = <MenuRegistros/>;
  let  operario = estaRegistrado.rolesUsuario.filter( roles => (roles.name === "Operario")  );  // se valida que sea operario para mostrar el menu de firmas
  if (operario.length > 0 ) Componente2 = <MenuFirmas/>;
  let  asesor = estaRegistrado.rolesUsuario.filter( roles => (roles.name === "Tecnico") || (roles.name === "Contable") || (roles.name === "Auditor") || (roles.name === "Implementador") || (roles.name === "Promotor"));  // se valida que sea admin o productor para mostrar el menu registros
  if (asesor.length > 0 ) Componente1 = <MenuAsesores/>;


  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {" "}
          <img src="./logo1.png" width="36" height="36" alt="Logo"></img> AgroRegistros
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav">

            <MenuHerramientas/>

              {Componente1}
              {Componente2}
              {Componente3}
             
             
              <MenuAdmin/>

          </ul>
        </div>



        {/* DENTRO DE ESTE DIV SE SELECCIONA EL MENU A MOSTRAR SEGUN SE ESTE LOGUEADO O NO.*/}

        <div className="navbar-nav container-fluid d-flex justify-content-end aling-items-center">

          { estaRegistrado.loguin?(
            <>
              
               {/* Nombre Usuario */}
               <li>
                <NavLink className=" d-inline-flex  text-my-own-color2 nav-item nav-link"
                to = "/">

               {estaRegistrado.nombreUsuario}
               </NavLink>
               </li>
             
         
         
             <button className=" text-my-own-color nav-item nav-link btn" to="/"
             onClick={e => {
              e.preventDefault();
              setEstaRegistrado({
                rolesUsuario:[],    // se borran todoslos datos de ingreso del usuario
                id:  " ", 
                loguin: false, 
                nombreUsuario: " ", 
                token: null
                
              });
              localStorage.setItem("estaRegistrado", JSON.stringify(estaRegistrado));  // se limpia el local storage
              localStorage.setItem("token", ({}));                                     // se borra el token para qe no pueda ser usado en renovar.
              //window.location.reload();
              window.location.replace("/");

            }}>
            Salir
          </button>
             </>

          ):(
                <div className="navbar-nav  container-fluid d-inline-flex  justify-content-end ">
                        <li>
                          {" "}
                          <NavLink
                            className=" d-inline-flex text-my-own-color nav-link nav-item"
                            to="/ingresar"
                          >
                            Ingresar
                          </NavLink>{" "}
                        </li>

                              <li>
                                {" "}
                                <NavLink
                                  className=" d-inline-flex  text-my-own-color nav-item nav-link"
                                  to="/registro"
                                >
                                  Registrarse
                                </NavLink>{" "}
                              </li>
                </div>
          )}
       
        </div>

      </div>
    </nav>
  );
};
