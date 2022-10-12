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
import { ProductosForm, InventarioForm, ProductoForm  } from "../formularios";
//import AutocompletadoForm from "../formularios/AutoCompletadoForm";
import { UserContext } from "../UserContext";
import { useContext } from "react";
import { Footer } from "./Footer";
import Axios from "axios";
import Swal from "sweetalert2";

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

const steps = ["Producto", "Datos del producto", "Datos del ingreso"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <ProductoForm />;
    case 1:
      return <ProductosForm />;
    case 2:
      return <InventarioForm />;
    //case 3:
    //return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

const theme = createTheme();

export const InventarioScreen = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const { producto, errores, setErrores } = useContext(UserContext); // importo useContext para tener el valor de los datos del producto

  //producto.productoTipo

  const guardar = async () => {
    //const NuevoProducto =  {producto}

    //const {productoTipo, productoTipo2} = producto;
    //const tipoProducto = [productoTipo, productoTipo2]

    const {
      productoTipo,
      valueProductoTipo,
      productoTipo2,
      valueProductoTipo2,
      nombreComercial,
      ingrediente,
      concentracion,
      registroIca,
      periodoR,
      periodoC,
      fechaIngreso,
      fechaVence,
      lote,
      cantidad,
      productoUnidad,
      valueProductoUnidad,
      costo,
      factura,
    } = producto;

    const respuesta = await Axios.post("http://localhost:4000/api/productos/inventario", {
      fecha: new Date(),
      productoTipo,
      valueProductoTipo,
      productoTipo2,
      valueProductoTipo2,
      nombreComercial,
      ingrediente,
      concentracion,
      registroIca,
      periodoC,
      periodoR,
      fechaIngreso,
      fechaVence,
      lote,
      cantidad,
      productoUnidad,
      valueProductoUnidad,
      costo,
      factura
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
      //console.log (errores.error.nombreComercial);
      //console.log (errores.nombreComercial);

      // if ( Object.keys(errores).length === 0 ) {
      //    setActiveStep(activeStep + 1)
      //   } ;

      if (!producto.nombreComercial.trim()) {
        //setErrores (error.nombreComercial = "El nombre comercial es requerido");
        setErrores({ nombreComercial: "El nombre comercial es requerido" });
      } else if (!producto.registroIca.trim()) {
        setErrores({ registroIca: "El número de registro es requerido" });
      } else {
        setErrores({});
        setActiveStep(activeStep + 1);
      }
    }

    if (activeStep === 1) {
      //setErrores(validarFormulario2(producto));

      console.log(errores);

      //  if ( Object.keys(errores).length === 0 ) {
      //     setActiveStep(activeStep + 1)
      //    } ;

      if (!producto.nombreComercial.trim()) {
        //setErrores (error.nombreComercial = "El nombre comercial es requerido");
        setErrores({ nombreComercial: "El nombre comercial es requerido" });
      } else if (!producto.registroIca.trim()) {
        setErrores({ registroIca: "El número de registro es requerido" });
      } else if (!producto.ingrediente.trim()) {
        setErrores({ ingrediente: "El ingrediente activo es requerido" });
      } else if (!producto.concentracion.trim()) {
        setErrores({ concentracion: "La concentracion es requerida" });
      } else if (!producto.periodoC) {
        setErrores({ periodoC: "El periodo de Carencia es requerido" });
      } else if (!producto.periodoR) {
        setErrores({ periodoR: "El periodo de Reingreso es requerido" });
      } else if (!producto.productoTipo.trim()) {
        setErrores({ productoTipo: "El Producto es requerido" });
      } else if (!producto.productoTipo2.trim()) {
        setErrores({ productoTipo2: "El tipo de Producto es requerido" });
      } else {
        setErrores({});
        setActiveStep(activeStep + 1);
      }
    }

    if (activeStep === 2) {
      //crear_productoGenerales(Date.now, [producto.productoTipo, producto.productoTipo2], producto.nombreComercial, producto.ingrediente, producto.concentracion, producto.registroIca, producto.periodoR, producto.periodoC);

      if (!producto.lote.trim()) {
        //setErrores (error.nombreComercial = "El nombre comercial es requerido");
        setErrores({ lote: "El Lote del Producto es requerido" });
      } else if (!producto.cantidad.trim()) {
        setErrores({ cantidad: "La cantidad de Producto es requerido" });
      } else if (!producto.productoUnidad.trim()) {
        setErrores({ productoUnidad: "La unidad de medida es requerida" });
      } else if (!producto.costo.trim()) {
        setErrores({ costo: "El costo es requerido" });
      } else if (!producto.factura.trim()) {
        setErrores({ factura: "El numero de la faactura  es requerido" });
      } else {
        setErrores({});
        console.log("Guardar");
        guardar();
      }
    }
    // setActiveStep(activeStep + 1);
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
            Inventario
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
                    {activeStep === steps.length - 1 ? "Guardar" : "Siguiente"}
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
