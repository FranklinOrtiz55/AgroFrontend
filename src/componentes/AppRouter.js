import React from "react";
import { UserContext } from "./UserContext";
import { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from "react-router-dom";

import { SignIn } from "./Ingresar";
import {
  RegistroScreen,
  HomeScreen,
  SuelosScreen,
  DensidadScreen,
  ExtraccionScreen,
  ProductoGeneralScreen,
  ProductorDatosScreen,
  DatosperScreen,
  InventarioScreen,
  DatosCultivoScreen,
  DatosLotesScreen,
  LaboresScreen,
} from "./pantallas";

//import { NavBar, NavBarProductor } from "..componentes/routes";
//import { NavBar } from "./NavBar";
//import { NavBarProductor } from "./NavBarProductor";
import { NavBarY } from "./NavBarY";
//import { NavBar2 } from './NavBar2';

export const AppRouter = () => {
    const { estaRegistrado } = useContext(UserContext); // importo useContext para saber si el usuario esta registrado o no.

    let  results = estaRegistrado.rolesUsuario.filter( roles => (roles.name === "Productor") || (roles.name === "Administrador") );


  return (
    <Router>
      <div>

     {/*    <NavBar />

        <NavBarProductor /> */}
        <NavBarY/>

    {/* {!estaRegistrado.loguin? <NavBar/> : <NavBarProductor/>*/}      {/* si esta registrado muestra el NavBar del productor, sino el de inicio */} 
     {/*console.log (estaRegistrado.loguin)*/}
     {/*console.log(estaRegistrado.nombreUsuario)*/}
    {/* {console.log(estaRegistrado.rolesUsuario.includes("Productor"))}    */}
    {/*console.log(estaRegistrado.rolesUsuario)*/}    
    {/*console.log("results = ", results)*/}    

        <Routes>
          <Route exact path="/extraccion" element={<ExtraccionScreen />} />
          <Route exact path="/densidad" element={<DensidadScreen />} />
          <Route exact path="/politicadatos" element={<DatosperScreen />} />
          <Route exact path="/suelos" element={<SuelosScreen />} />
          <Route exact path="/ingresar" element={<SignIn />} />
          <Route exact path="/registro" element={<RegistroScreen />} />
          <Route exact path="/productoGeneral" element={<ProductoGeneralScreen />}/>
          <Route exact path="/productorDatos"            element={<ProductorDatosScreen />} />
          <Route exact path="/inventario" element={<InventarioScreen />} />
          <Route exact path="/datosCultivo" element={<DatosCultivoScreen />} />
          <Route exact path="/datosLotes" element={<DatosLotesScreen />} />
          <Route exact path="/labores" element={<LaboresScreen />} />
          <Route exact path="/" element={<HomeScreen />} />
          <Route path="*" element={<Navigate to="/" />} />{" "}
          {/*para volver a la pagina principal si no encuentra la ruta*/}
        </Routes>
      </div>
    </Router>
  );
};
