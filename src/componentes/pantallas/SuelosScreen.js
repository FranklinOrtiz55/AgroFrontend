//import { Button } from "bootstrap";
import React from "react";
import { Footer } from "./Footer";
//import { Copyright } from './Registro'
import { agroApi } from "../../api";
import { UserContext } from "../UserContext";
import { useContext, useEffect } from "react";
//import Button from '@mui/material/Button';



export const SuelosScreen = () => {

  const { estaRegistrado,  } = useContext(UserContext);

  const renovarToken = async () => {
    const respuesta = await agroApi.get("/usuario/renovar", { userId: estaRegistrado.id , nombre: estaRegistrado.nombreUsuario } );
    console.log("respuesta renovar = ", respuesta);
  }

  useEffect(() => {

    //const respuesta = await agroApi.get("usuario/renovar", { correo, contrasena1 } );
    renovarToken();
  
    
  }, )

  
  return (
    <div>
      <h1>página para la interpretación del análisis de suelos</h1>
      <hr />

      <button onClick={renovarToken}> boton </button>
     
      
      


      {/* <Copyright sx={{position: "fixed",  bottom: 10 }} />       se importan y utiliza el copy */}
      <Footer> </Footer>
    </div>
  );
};
