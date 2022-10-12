//import { Button } from 'bootstrap'
import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBarProductor = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {" "}
          <img src="./logo1.png" width="36" height="36" alt="Logo"></img> Agro
          Registros
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
                  <Link className="dropdown-item" to="/datosLotes">
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
                  <Link className="dropdown-item" to="/productoGeneral">
                    Estadisticas
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        
        <div className="navbar-nav container-fluid d-flex justify-content-end aling-items-center">
          <span className=" text-primary nav-link nav-item">
            Nombre Usuario
          </span>

          <button className=" text-my-own-color nav-item nav-link btn" to="/">
            Salir
          </button>
        </div>
      </div>
    </nav>
  );
};
