import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
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
          </ul>
        </div>
      </div>

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
    </nav>
  );
};
