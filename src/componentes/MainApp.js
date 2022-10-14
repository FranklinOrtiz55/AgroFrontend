//import { set } from "date-fns";
import React, { useState, useEffect } from "react";
import { AppRouter } from "./AppRouter";
import { UserContext } from "./UserContext";
//import { Footer } from './Footer'

//import ContainedButtons from './Botones.js';

export const MainApp = () => {
  /*   const producto = {
        nombre: 'efiaguas',
        reg: 1234
    }
 */

 
  
  const [errores, setErrores] = useState({});

  const [estaRegistrado, setEstaRegistrado] = useState({
    rolesUsuario:[],    // en este estado se guardan todos los datos del usuario cuando se registra
    //id:  "1234",
    id:  "1234567890ab",
    loguin: false, 
    nombreUsuario: " ", 
    token: null,
    cultivo: false          // para saber si ya tiene registrado un cultivo.
  });

  useEffect(() => {
    // este UseEffect, se actualiza solo cuando se monta el componente, entonces tomamos los datos del local storage
    let Usuario =  JSON.parse(localStorage.getItem("estaRegistrado"));     //se guarda en el local storage para que no se borre el usuario cuando se reinicia la pantalla
   
    setEstaRegistrado(Usuario);

  }, []); // con el vacio, se ejecuta solo la promera vez.

  useEffect(() => {
    // cada vez que se actualiza el estado de esta registrado, se guarda en el local storage
    localStorage.setItem("estaRegistrado", JSON.stringify(estaRegistrado));     //se guarda en el local storage para que no se borre el usuario cuando se reinicia la pantalla
    console.log("local storage main = ", estaRegistrado)
   
  }, [estaRegistrado]);

  const [producto, setProducto] = useState({
    nombreComercial: "",
    valuenombreComercial: "",
    registroIca: "",
    ingrediente: "",
    concentracion: "",
    periodoC: "",
    periodoR: "",
    //productoTipo: 'Insecticida',
    //valueProductoTipo:  { title: 'Insecticida', id: 1 },
    productoTipo: "",
    valueProductoTipo: { title: "", id: 1 },
    //productoTipo2: 'Quimico',
    //valueProductoTipo2: { title: 'Quimico', id: 1 },
    productoTipo2: "",
    valueProductoTipo2: { title: "", id: 1 },
    lote: "",
    cantidad: "",
    costo: "",
    factura: "",
    valueProductoUnidad: { title: " ", id: " " },
    productoUnidad: " ",
    fechaVence: Date.now(),
    fechaIngreso: Date.now(),
  });


  
  const [productoGeneral, setProductoGeneral] = useState({
    nombreComercial: "",

    numeroRegistroIca: "",
    ingrediente: "",
    concentracion: "",
    periodoC: "",
    periodoR: "",
    //productoTipo: 'Insecticida',
    //valueProductoTipo:  { title: 'Insecticida', id: 1 },
    productoTipo: "",
    valueProductoTipo: { title: "", id: 1 },
    //productoTipo2: 'Quimico',
    //valueProductoTipo2: { title: 'Quimico', id: 1 },
    productoTipo2: "",
    valueProductoTipo2: { title: "", id: 1 },
  });

  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    contrasena1: "",
    contrasena2: "",
    roles: [],
  });

  const [cultivo, setCultivo] = useState({
    nombreCultivo: " ",
    valuenombreCultivo: "",
    nombreCertificacion: [],
    valuePais: { title: " ", id: " " },
    pais: " ",
    valueDepartamento: { title: " ", id: " " },
    departamento: " ",
    valueMunicipio: { title: " ", id: " " },
    municipio: " ",
    corregimiento: " ",
    valueCultivoTipoProducto: { title: " ", id: " " },
    tipoProducto: " ",
    valueCultivoLotes: { title: " ", id: " " },
    cantidadLotes: "Cinco",
    
    
    nombreLote1: " ",
    cantidadArbolesLote1: 0,
    fechaLote1: Date.now(),
    distanciaArbolesLote1: 0,
    distanciaSurcosLote1: 0,
    valueCultivoTipoTrazoLote1: { title: " ", id: " " },
    tipoTrazoLote1: " ",

    nombreLote2: " ",
    cantidadArbolesLote2: 0,
    fechaLote2: Date.now(),
    distanciaArbolesLote2: 0,
    distanciaSurcosLote2: 0,
    valueCultivoTipoTrazoLote2: { title: " ", id: " " },
    tipoTrazoLote2: " ",

    nombreLote3: " ",
    cantidadArbolesLote3: 0,
    fechaLote3: Date.now(),
    distanciaArbolesLote3: 0,
    distanciaSurcosLote3: 0,
    valueCultivoTipoTrazoLote3: { title: " ", id: " " },
    tipoTrazoLote3: " ",
    
   
    nombreLote4: " ",
    cantidadArbolesLote4: 0,
    fechaLote4: Date.now(),
    distanciaArbolesLote4: 0,
    distanciaSurcosLote4: 0,
    valueCultivoTipoTrazoLote4: { title: " ", id: " " },
    tipoTrazoLote4: " ",
    
   
    nombreLote5: " ",
    cantidadArbolesLote5: 0,
    fechaLote5: Date.now(),
    distanciaArbolesLote5: 0,
    distanciaSurcosLote5: 0,
    valueCultivoTipoTrazoLote5: { title: " ", id: " " },
    tipoTrazoLote5: " ",
    
     
  });


    
  const [labores, setLabores] = useState({
    fechaLabor: Date.now(),
    nombreCultivo: "Uno",
    tipoLabor: "",
    nombreLote: "",
    cantidadJornales: "",
    costoJornal: "",
    costoLabor: "",
    responsable: "",
    observaciones: "",
    
  });



  return (
    <div>
      <UserContext.Provider
        value={{
          producto,
          setProducto,
          productoGeneral,
          setProductoGeneral,
          errores,
          setErrores,
          usuario,
          setUsuario,
          estaRegistrado,
          setEstaRegistrado,
          cultivo,
          setCultivo,
          labores,
          setLabores,
        }}
      >
        <AppRouter />
        {/*<ContainedButtons />            */} {/* se importan los botones*/}
      </UserContext.Provider>
      
    </div>
  );
};
