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
import { DatosLote2Form, DatosLotesForm, DatosLote3Form, DatosLote4Form, DatosLote5Form} from "../formularios";
import { UserContext } from "../UserContext";
import { useContext } from "react";
import { Footer } from "./Footer";
//import Axios from "axios";
import Swal from "sweetalert2";
import { agroApi } from "../../api";

//import Review from './Review';

/* function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        AgroRegistros.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
} */

//const steps = ['Datos del producto', 'Datos del ingreso', 'Review your order'];

//const [pasos, setPasos] = React.useState();

//const steps = ["datos del cultivo", "Certificaciones", "Datos del lote"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <DatosLotesForm/>;
    case 1:
      return <DatosLote2Form/>;
    case 2:
      return <DatosLote3Form />;
    case 3:
        return <DatosLote4Form />;
    case 4:
        return <DatosLote5Form />;
    //case 3:
    //return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

const theme = createTheme();

export const DatosLotesScreen = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  //const [pasos, setPasos] = React.useState();
  let pasos2 = [];
  

  const { cultivo, setCultivo, errores, setErrores , estaRegistrado } = useContext(UserContext); // importo useContext para tener el valor de los datos del producto

 // setPasos(cultivo.cantidadLotes)

  if (cultivo.cantidadLotes === " "){
    pasos2.push ("Lote No. 1") ;
  }else if (cultivo.cantidadLotes === "Uno"){
    pasos2.push ("Lote No. 1", ) ;
  }else if (cultivo.cantidadLotes === "Dos"){
    pasos2.push ("Lote No. 1", "Lote No. 2") ;
  }else if (cultivo.cantidadLotes === "Tres"){
    pasos2.push ("Lote No. 1", "Lote No. 2", "Lote No. 3") ;
  }else if (cultivo.cantidadLotes === "Cuatro"){
    pasos2.push ("Lote No. 1", "Lote No. 2", "Lote No. 3", "Lote No. 4") ;
  }else if (cultivo.cantidadLotes === "Cinco"){
    pasos2.push ("Lote No. 1", "Lote No. 2", "Lote No. 3", "Lote No. 4", "Lote No. 5") ;
  }

  //producto.productoTipo

  const guardar = async () => {
    
    const {
      nombreCultivo,
      nombreCertificacion,
      valuePais,
      pais,
      valueDepartamento,
      departamento,
      valueMunicipio,
      municipio,
      corregimiento,
      valueCultivoTipoProducto,
      tipoProducto,
      valueCultivoLotes,
      cantidadLotes,
      
      
      nombreLote1,
      cantidadArbolesLote1,
      fechaLote1,
      distanciaArbolesLote1,
      distanciaSurcosLote1,
      valueCultivoTipoTrazoLote1,
      tipoTrazoLote1,
  
      nombreLote2,
      cantidadArbolesLote2,
      fechaLote2,
      distanciaArbolesLote2,
      distanciaSurcosLote2,
      valueCultivoTipoTrazoLote2,
      tipoTrazoLote2,
  
      nombreLote3,
      cantidadArbolesLote3,
      fechaLote3,
      distanciaArbolesLote3,
      distanciaSurcosLote3,
      valueCultivoTipoTrazoLote3,
      tipoTrazoLote3,
      
     
      nombreLote4,
      cantidadArbolesLote4,
      fechaLote4,
      distanciaArbolesLote4,
      distanciaSurcosLote4,
      valueCultivoTipoTrazoLote4,
      tipoTrazoLote4,
      
     
      nombreLote5,
      cantidadArbolesLote5,
      fechaLote5,
      distanciaArbolesLote5,
      distanciaSurcosLote5,
      valueCultivoTipoTrazoLote5,
      tipoTrazoLote5,
      
    } = cultivo;

    const usuario = estaRegistrado.id;

    //const respuesta = await Axios.post("http://localhost:4000/api/cultivo/datosCultivo", {
      //const respuesta = await agroApi.get("usuario/renovar", { userId: estaRegistrado.id , nombre: estaRegistrado.nombreUsuario } );
    const respuesta = await agroApi.post("/cultivo/datosCultivo", {
      Fecha: new Date(),

      usuario,

      nombreCultivo,
      nombreCertificacion,
      valuePais,
      pais,
      valueDepartamento,
      departamento,
      valueMunicipio,
      municipio,
      corregimiento,
      valueCultivoTipoProducto,
      tipoProducto,
      valueCultivoLotes,
      cantidadLotes,
      
      
      nombreLote1,
      cantidadArbolesLote1,
      fechaLote1,
      distanciaArbolesLote1,
      distanciaSurcosLote1,
      valueCultivoTipoTrazoLote1,
      tipoTrazoLote1,
  
      nombreLote2,
      cantidadArbolesLote2,
      fechaLote2,
      distanciaArbolesLote2,
      distanciaSurcosLote2,
      valueCultivoTipoTrazoLote2,
      tipoTrazoLote2,
  
      nombreLote3,
      cantidadArbolesLote3,
      fechaLote3,
      distanciaArbolesLote3,
      distanciaSurcosLote3,
      valueCultivoTipoTrazoLote3,
      tipoTrazoLote3,
      
     
      nombreLote4,
      cantidadArbolesLote4,
      fechaLote4,
      distanciaArbolesLote4,
      distanciaSurcosLote4,
      valueCultivoTipoTrazoLote4,
      tipoTrazoLote4,
      
     
      nombreLote5,
      cantidadArbolesLote5,
      fechaLote5,
      distanciaArbolesLote5,
      distanciaSurcosLote5,
      valueCultivoTipoTrazoLote5,
      tipoTrazoLote5,
      
    
    });
    //const respuesta = await Axios.post('http://localhost:4000/api', {Fecha:Date.now, TipoProducto:[NuevoProducto.productoTipo, NuevoProducto.productoTipo2], NombreComercial:NuevoProducto.nombreComercial, IngredienteActivo: NuevoProducto.ingredienteActivo, Concentracio: NuevoProducto.concentracion, NumeroRegistroIca:NuevoProducto.registroIca, PeriodoReingreso:NuevoProducto.periodoR, PeriodoCarencia:NuevoProducto.periodoC })
    // console.log (respuesta, tipoProducto)
    const mensaje = respuesta.data.mensaje;
    //alert (mensaje)
    Swal.fire({
      title: mensaje,
      icon: "success",
      confirmButtonText: "Listo",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload(); // para iniciar nuevamente con otro producto del inventario.
      }
    });
  };



  const handleNext = (e) => {
    e.preventDefault();
    if (activeStep === 0) {
      // setErrores(validarFormulario(producto));

      console.log(errores);
      

      if (!cultivo.nombreLote1.trim()) {
        //setErrores (error.nombreComercial = "El nombre comercial es requerido");
        setErrores({ nombreLote: "El nombre del Lote  es requerido" });
      } else if (cultivo.cantidadArbolesLote1 <= 0) {
        setErrores({ cantidadArboles: "La cantidad de arboles debe ser mayor a 0 " });
      } else if (cultivo.distanciaArbolesLote1 <= 0) {
        setErrores({ distanciaArboles: "Debe ser mayor a 0 " });
      }else if (cultivo.distanciaSurcosLote1 <= 0) {
        setErrores({ distanciaSurcos: "Debe ser mayor a 0 " });
      }else if (!cultivo.tipoTrazoLote1.trim()) {
        setErrores({ trazo: "Seleccione el tipo de trazo" });
      }else if (cultivo.cantidadLotes === "Uno" ) {               // se verifica si no hay mas lotes y se guarda
        guardar();      
      }else{
        setErrores({});
        setActiveStep(activeStep + 1);
      }
    }

    if (activeStep === 1) {
     
      console.log(errores);

      if (!cultivo.nombreLote2.trim()) {
        //setErrores (error.nombreComercial = "El nombre comercial es requerido");
        setErrores({ nombreLote: "El nombre del Lote  es requerido" });
      } else if (cultivo.cantidadArbolesLote2 === 0) {
        setErrores({ cantidadArboles: "La cantidad de arboles no puede ser 0 " });
      } else if (cultivo.distanciaArbolesLote2 === 0) {
        setErrores({ distanciaArboles: "La distancia entre arboles no puede ser 0 " });
      }else if (cultivo.distanciaSurcosLote2 === 0) {
        setErrores({ distanciaSurcos: "La distancia entre Surcos no puede ser 0 " });
      }else if (!cultivo.tipoTrazoLote2.trim()) {
        setErrores({ trazo: "Seleccione el tipo de trazo" });
      }else if (cultivo.cantidadLotes === "Dos" ) {               // se verifica si no hay mas lotes y se guarda
        guardar();      
      }else {
        setErrores({});
        setActiveStep(activeStep + 1);
      }
    }




    if (activeStep === 2) {
     
      console.log(errores);

      if (!cultivo.nombreLote3.trim()) {
        //setErrores (error.nombreComercial = "El nombre comercial es requerido");
        setErrores({ nombreLote: "El nombre del Lote  es requerido" });
      } else if (cultivo.cantidadArbolesLote3 === 0) {
        setErrores({ cantidadArboles: "La cantidad de arboles no puede ser 0 " });
      } else if (cultivo.distanciaArbolesLote3 === 0) {
        setErrores({ distanciaArboles: "La distancia entre arboles no puede ser 0 " });
      }else if (cultivo.distanciaSurcosLote3 === 0) {
        setErrores({ distanciaSurcos: "La distancia entre Surcos no puede ser 0 " });
      }else if (!cultivo.tipoTrazoLote3.trim()) {
        setErrores({ trazo: "Seleccione el tipo de trazo" });
      }else if (cultivo.cantidadLotes === "Tres" ) {               // se verifica si no hay mas lotes y se guarda
        guardar();      
      }else {
        setErrores({});
        setActiveStep(activeStep + 1);
      }
    }



    if (activeStep === 3) {
     
      console.log(errores);

      if (!cultivo.nombreLote4.trim()) {
        //setErrores (error.nombreComercial = "El nombre comercial es requerido");
        setErrores({ nombreLote: "El nombre del Lote  es requerido" });
      } else if (cultivo.cantidadArbolesLote4 === 0) {
        setErrores({ cantidadArboles: "La cantidad de arboles no puede ser 0 " });
      } else if (cultivo.distanciaArbolesLote4 === 0) {
        setErrores({ distanciaArboles: "La distancia entre arboles no puede ser 0 " });
      }else if (cultivo.distanciaSurcosLote4 === 0) {
        setErrores({ distanciaSurcos: "La distancia entre Surcos no puede ser 0 " });
      }else if (!cultivo.tipoTrazoLote4.trim()) {
        setErrores({ trazo: "Seleccione el tipo de trazo" });
      }else if (cultivo.cantidadLotes === "Cuatro" ) {               // se verifica si no hay mas lotes y se guarda
        guardar();      
      }else  {
        setErrores({});
        setActiveStep(activeStep + 1);
      }
    }




    if (activeStep === 4) {
     
      console.log(errores);

      if (!cultivo.nombreLote5.trim()) {
        //setErrores (error.nombreComercial = "El nombre comercial es requerido");
        setErrores({ nombreLote: "El nombre del Lote  es requerido" });
      } else if (cultivo.cantidadArbolesLote5 === 0) {
        setErrores({ cantidadArboles: "La cantidad de arboles no puede ser 0 " });
      } else if (cultivo.distanciaArbolesLote5 === 0) {
        setErrores({ distanciaArboles: "La distancia entre arboles no puede ser 0 " });
      }else if (cultivo.distanciaSurcosLote5 === 0) {
        setErrores({ distanciaSurcos: "La distancia entre Surcos no puede ser 0 " });
      }else if (!cultivo.tipoTrazoLote5.trim()) {
        setErrores({ trazo: "Seleccione el tipo de trazo" });
      }else  if (cultivo.cantidadLotes === "Cinco" ) {               // se verifica si no hay mas lotes y se guarda
        guardar();      
      }else {
        setErrores({});
        //setActiveStep(activeStep + 1);
        //console.log("Guardar");
        //guardar();
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
            Datos de los Lotes
          </Typography>

          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {/* {steps.map((label) => ( */}
            {pasos2.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>


          <React.Fragment>
            {/* {activeStep === steps.length ? ( */}
            {activeStep === pasos2.length ? (
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
                  Aceptar
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

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {/* {activeStep === steps.length - 1 ? "Guardar" : "Siguiente"} */}
                    {activeStep === pasos2.length - 1 ? "Guardar" : "Siguiente lote"}
                  </Button>
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
