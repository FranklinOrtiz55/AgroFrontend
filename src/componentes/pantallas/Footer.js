import React from "react";
import { Link, NavLink } from "react-router-dom";
//import Logo from "./logo1.png"
import Logo from "../../logos/logo1.png";

export const Footer = () => {
  return (
    <div className=" row container-fluid">
      <footer className="d-flex  justify-content-around align-items-center py-1 my-4 border-top bg-secondary bg-gradient text-black p-3 ">
        <div className="col-xs-6 d-flex align-items-center">
          <NavLink
            to="/"
            className="mb-2 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            {/* <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"/></svg> */}
            <img src={Logo} alt="Logo" width="36" height="36"></img>
          </NavLink>

          <span className=" text-dark p-1">
            {" "}
            {" © "}
            <Link className="text-light" to="/">
              AgroRegistros.com
            </Link>{" "}
            {/* {new Date().getFullYear()} */}
            {/* {'.'} */}
          </span>
        </div>

        <ul className="nav py-1 col-xs-6 justify-content-end  list-unstyled d-flex">
          <li className="ms-3">
            <NavLink className="text-muted" to="/">
              <img
                src="./facebook.png"
                width="24"
                height="24"
                alt="Logo 2"
              ></img>
            </NavLink>
          </li>
          <li className="ms-3">
            <NavLink className="text-muted" to="/">
              <img src="./linkedin.png" width="24" height="24" alt="Logo"></img>
            </NavLink>
          </li>
          {/* <li className="ms-3"><NavLink className="text-muted" to="/"><img src="./logo1.png" width="24" height="24" alt = "Logo" ></img></NavLink></li> */}
        </ul>
      </footer>
    </div>
  );
};
