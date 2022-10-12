import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { RegistroForm, RolesForm } from "../formularios";
import { UserContext } from "../UserContext";
import { useContext, useEffect } from "react";
import { Footer } from "./Footer";

const steps = ["Datos Personales", "Perfil"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <RegistroForm />;
    case 1:
      return <RolesForm />;
    //case 2:
    //  return <SignUp />;
    //case 3:
    //return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

const theme = createTheme();

export const RegistroScreen = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  //const {producto} =  useContext(UserContext);      // importo useContext para tener el valor de los datos del producto
  const { usuario, errores, setErrores } = useContext(UserContext); // importo useContext para tener el valor de los datos del Usuario
  //const [datos] = useState([{NombreComercial :  'abafed'}]);
  const [data, setData] = useState([{ NombreComercial: "abafed" }]);

  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/; // valida el nombre
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/; // valida correo.

  const getData = async () => {
    try {
      const url = "http://localhost:4000/api/usuario/";
      const resp = await fetch(url);
      const datos = await resp.json();
      setData(datos);
      //return datos;

      /*                                               console.log (datos[0].correo);
                                                let  i = 0;
                                                for( i in datos ){
                                                  console.log (datos[i].correo)
                                                }
                                                console.log (datos); */
    } catch (error) {
      //console.log (error)
    }
  };

  /*                                                         const guardar = async()=>{
                                                        
                                                        
                                                          const {productoTipo, valueProductoTipo, productoTipo2,  valueProductoTipo2, nombreComercial, ingrediente, concentracion, registroIca, periodoR, periodoC, fechaIngreso, fechaVence, lote, cantidad, productoUnidad, valueProductoUnidad, costo, factura  } = producto;

                                                        
                                                          const respuesta = await Axios.post('http://localhost:4000/api/inventario', {Fecha: new Date(), productoTipo, valueProductoTipo, productoTipo2,  valueProductoTipo2, nombreComercial, ingrediente, concentracion, registroIca, periodoC, periodoR, fechaIngreso, fechaVence, lote, cantidad, productoUnidad, valueProductoUnidad, costo, factura} )
                                                      
                                                          const mensaje = respuesta.data.mensaje
                                                          //alert (mensaje)
                                                          Swal.fire({
                                                            title: mensaje,
                                                            icon: 'success',
                                                            confirmButtonText: 'Listo'
                                                          }).then((result) => {
                                                            if (result.isConfirmed) {
                                                            
                                                              window.location.reload();   // para iniciar nuevamente con otro producto del inventario.
                                                            }
                                                          })


                                                        } */

  const handleNext = (e) => {
    e.preventDefault();
    if (activeStep === 0) {
      // setErrores(validarFormulario(producto));

      //console.log (errores);
      //console.log (errores.error.nombreComercial);
      //console.log (errores.nombreComercial);

      // if ( Object.keys(errores).length === 0 ) {
      //    setActiveStep(activeStep + 1)
      //   } ;

      let i;
      for (i in data) {
        // funcion para validar la existencia de un usuario.
        if (data[i].correo === usuario.correo.trim()) {
          setErrores({ correo: "Ya existe un usuario con ese correo" });
          //console.log("iguales");
          return;
        }
        //console.log(usuario.correo.trim());
        //console.log(data[i].correo);
        //console.log(errores);
      }

      if (!usuario.nombre.trim()) {
        //setErrores (error.nombreComercial = "El nombre comercial es requerido");
        setErrores({ nombre: "El nombre es requerido" });
      } else if (!regexName.test(usuario.nombre.trim())) {
        setErrores({ nombre: "verifique el nombre" });
      } else if (!usuario.apellido.trim()) {
        setErrores({ apellido: "El apellido  es requerido" });
      } else if (!usuario.correo.trim()) {
        setErrores({ correo: "El correo es requerido" });
      } else if (!regexEmail.test(usuario.correo.trim())) {
        setErrores({ correo: "Utilice un correo valido" });
      } else if (!usuario.contrasena1.trim()) {
        setErrores({ contrasena1: "La clave es requerida" });
      } else if (!usuario.contrasena2.trim()) {
        setErrores({ contrasena2: "Confirme la Contraseña" });
      } else if (usuario.contrasena2.trim() !== usuario.contrasena1.trim()) {
        setErrores({ contrasena2: "las claves no coinciden" });
      } else {
        //setErrores({})
        //console.log ('Guardando');
        setActiveStep(activeStep + 1);

        //guardar();
      }
    }

    if (activeStep === 1) {
      // console.log (errores);

      if (errores.errorRol) {
      } else {
        setErrores({});
        setActiveStep(activeStep + 1);
      }
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    setActiveStep(activeStep - 1);
  };

  const handleBack2 = (e) => {
    //e.preventDefault();
    //ProductoGeneralScreen();
    window.location.reload();
  };

  useEffect(() => {
    getData();
    //const  respu = getData()
    //console.log ('respu = ', respu)
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      ></AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Registro
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                {/*  <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography> */}

                <Button onClick={handleBack2} sx={{ mt: 3, ml: 1 }}>
                  Registrarse
                </Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Atras
                    </Button>
                  )}

                  {activeStep === 0 && (
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 3, ml: 1 }}
                      //disabled = {!activar}
                    >
                      {activeStep === steps.length - 1
                        ? "Registrarse"
                        : "Siguiente"}
                    </Button>
                  )}
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        {/* <Copyright sx={{position: "fixed",  bottom: 10 }} /> */}
      </Container>
      <Footer> </Footer>
    </ThemeProvider>
  );
};
