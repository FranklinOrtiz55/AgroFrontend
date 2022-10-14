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
import { DatosCultivoForm, CertificacionesForm, UbicacionForm} from "../formularios";
import { DatosLotesScreen } from "./DatosLotesScreen";
import { UserContext } from "../UserContext";
import { useContext, useEffect } from "react";
import { Footer } from "./Footer";
import Axios from "axios";
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

const steps = ["datos del cultivo", "Ubicacion", "Certificaciones",  "Datos del lote"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <DatosCultivoForm/>;
    case 1:
      return <UbicacionForm/>;
    case 2:
      return <CertificacionesForm/>;
    case 3:
    return <DatosLotesScreen/>;
    default:
      throw new Error("Unknown step");
  }
}

const theme = createTheme();

export const DatosCultivoScreen = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const { cultivo, setCultivo, errores, setErrores, estaRegistrado } = useContext(UserContext); // importo useContext para tener el valor de los datos del producto

  //producto.productoTipo

  const guardar = async () => {
    //const NuevoProducto =  {producto}

    //const {productoTipo, productoTipo2} = producto;
    //const tipoProducto = [productoTipo, productoTipo2]

  

    const {
      nombreCultivo,
      tipoProducto,
      nombreCertificacion,
      cantidadLotes,
      pais,
      departamento,
      municipio,
      Corregimiento,
    } = cultivo;

    const respuesta = await Axios.post("http://localhost:4000/api/datosCultivo", {
      Fecha: new Date(),
      nombreCultivo,
      tipoProducto,
      nombreCertificacion,
      cantidadLotes,
      pais,
      departamento,
      municipio,
      Corregimiento,
    
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

      if (!cultivo.nombreCultivo.trim()) {
        //setErrores (error.nombreComercial = "El nombre comercial es requerido");
        setErrores({ nombreCultivo: "El nombre del cultivo  es requerido" });
      } else if (!cultivo.tipoProducto.trim()) {
        setErrores({ tipoProducto: "El tipo de producto  es requerido" });
      } else if  (!cultivo.cantidadLotes.trim()) {
        setErrores({ cantidadLotes: "Seleccione la cantidad de Lotes" });
      }else {
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

      if (!cultivo.pais.trim()) {
        //setErrores (error.nombreComercial = "El nombre comercial es requerido");
        setErrores({ pais: "El nombre del pais es requerido" });
      } else if (!cultivo.departamento.trim()) {
        setErrores({ departamento: "El departamento   es requerido" });
      }else if (!cultivo.municipio.trim()) {
        setErrores({ municipio: "El municipio  es requerido" });
      }else if (!cultivo.corregimiento.trim()) {
        setErrores({ corregimiento: "El corregimiento o vereda es requerido" });
      } else {
        setErrores({});
        setActiveStep(activeStep + 1);
      }
    }

    if (activeStep === 2) {
      //crear_productoGenerales(Date.now, [producto.productoTipo, producto.productoTipo2], producto.nombreComercial, producto.ingrediente, producto.concentracion, producto.registroIca, producto.periodoR, producto.periodoC);

      if (!cultivo.nombreCertificacion.length === 0 ) {
        //setErrores (error.nombreComercial = "El nombre comercial es requerido");
        setErrores({ errorRegistro: "Debe selecionar una certificacion o en proceso" });
      }  else {
        setErrores({});
        setActiveStep(activeStep + 1);
        //console.log("Guardar");
        //guardar();
      }
    }
    // setActiveStep(activeStep + 1);


    if (activeStep === 3) {
      //crear_productoGenerales(Date.now, [producto.productoTipo, producto.productoTipo2], producto.nombreComercial, producto.ingrediente, producto.concentracion, producto.registroIca, producto.periodoR, producto.periodoC);

      if (!cultivo.nombreCertificacion.length === 0 ) {
        //setErrores (error.nombreComercial = "El nombre comercial es requerido");
        setErrores({ errorRegistro: "Debe selecionar una certificacion o en proceso" });
      }  else {
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




  const getDatos = async () => {
    agroApi.get('/cultivo/datosCultivo',  {
      params: {
        userId : estaRegistrado.id,
      }
    })
    .then(function (response) {
      // handle success
      //const {data = []} = response.data;                // cuando se utiliza asi, se guarda en cultivo dentro de un array, por lo cual se debe buscar la infoamcion con cultivo[0].
      const {data} = response.data;
      console.log("data datos cultivo= ", data);                // muestra los datos extraidos de la respuesta
      //setOpciones(data);
      //setCultivo(data);
      console.log("response datos cultivo= ", response);          // muestra los datos de la respuesta
      console.log("variable cultivo= ", cultivo);          // muestra los datos almacenados en la variable cultivo.
      console.log("data datos cultivo= ", data);                // muestra los datos extraidos de la respuesta

       //setCultivo({...cultivo, cultivo:data[0]})

        setCultivo({...cultivo, 
        nombreCultivo: data[0].nombreCultivo || " ",
        valuenombreCultivo: data[0].valuenombreCultivo || " ",
        nombreCertificacion: data[0].nombreCertificacion || [],
        valuePais: data[0].valuePais || { title: " ", id: " " },
        pais: data[0].pais || " ",
        valueDepartamento: data[0].valueDepartamento || { title: " ", id: " " },
        departamento: data[0].departamento || " ",
        valueMunicipio: data[0].valueMunicipio || { title: " ", id: " " },
        municipio: data[0].municipio ||" ",
        corregimiento: data[0].corregimiento || " ",
        valueCultivoTipoProducto: data[0].valueCultivoTipoProducto || { title: " ", id: " " },
        tipoProducto: data[0].tipoProducto || " ",
        valueCultivoLotes: data[0].valueCultivoLotes || { title: " ", id: " " },
        cantidadLotes: data[0].cantidadLotes|| "Cinco",
        
        
        nombreLote1: data[0].nombreLote1 || " ",
        cantidadArbolesLote1: data[0].cantidadArbolesLote1 || 0,
        fechaLote1: data[0].fechaLote1|| Date.now(),
        distanciaArbolesLote1: data[0].distanciaArbolesLote1 || 0,
        distanciaSurcosLote1: data[0].distanciaSurcosLote1 || 0,
        valueCultivoTipoTrazoLote1: data[0].valueCultivoTipoTrazoLote1 || { title: " ", id: " " },
        tipoTrazoLote1: data[0].tipoTrazoLote1 || " ",
    
        nombreLote2: data[0].nombreLote2 || " ",
        cantidadArbolesLote2: data[0].cantidadArbolesLote2 || 0,
        fechaLote2: data[0].fechaLote2 || Date.now(),
        distanciaArbolesLote2: data[0].distanciaArbolesLote2 || 0,
        distanciaSurcosLote2: data[0].distanciaSurcosLote2 || 0,
        valueCultivoTipoTrazoLote2: data[0].valueCultivoTipoTrazoLote2 || { title: " ", id: " " },
        tipoTrazoLote2: data[0].tipoTrazoLote2 || " ",
    
        nombreLote3: data[0].nombreLote3 || " ",
        cantidadArbolesLote3: data[0].cantidadArbolesLote3 || 0,
        fechaLote3: data[0].fechaLote3 || Date.now(),
        distanciaArbolesLote3: data[0].distanciaArbolesLote3 || 0,
        distanciaSurcosLote3: data[0].distanciaSurcosLote3 || 0,
        valueCultivoTipoTrazoLote3: data[0].valueCultivoTipoTrazoLote3 || { title: " ", id: " " },
        tipoTrazoLote3: data[0].tipoTrazoLote3 || " ",
        
       
 
        nombreLote4: data[0].nombreLote4 || " ",
        cantidadArbolesLote4: data[0].cantidadArbolesLote4 || 0,
        fechaLote4: data[0].fechaLote4 || Date.now(),
        distanciaArbolesLote4: data[0].distanciaArbolesLote4 || 0,
        distanciaSurcosLote4: data[0].distanciaSurcosLote4 || 0,
        valueCultivoTipoTrazoLote4: data[0].valueCultivoTipoTrazoLote4 || { title: " ", id: " " },
        tipoTrazoLote4: data[0].tipoTrazoLote4 || " ",
        
       
        nombreLote5: data[0].nombreLote5 || " ",
        cantidadArbolesLote5: data[0].cantidadArbolesLote5 || 0,
        fechaLote5: data[0].fechaLote5 || Date.now(),
        distanciaArbolesLote5: data[0].distanciaArbolesLote5 || 0,
        distanciaSurcosLote5: data[0].distanciaSurcosLote5 || 0,
        valueCultivoTipoTrazoLote5: data[0].valueCultivoTipoTrazoLote5 || { title: " ", id: " " },
        tipoTrazoLote5: data[0].tipoTrazoLote5 || " ",
        }); 




      console.log("variable cultivo 2= ", cultivo);          // muestra los datos almacenados en la variable cultivo.


    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
      console.log("variable cultivo 2= ", cultivo);          // muestara los datos almacenados en la variable cultivo.
      
    });
    console.log("variable cultivo ultima= ", cultivo);          // muestara los datos almacenados en la variable cultivo.

  }






  useEffect(() => {
    const respu = getDatos();

  console.log("respu = ", respu);

}, []);       //   agregado para que muestre el valor actualizado del cultivo



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
            Datos del Cultivo
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
                    disabled = {activeStep === steps.length - 1 ? true : false}
                    sx={{ mt: 3, ml: 1}}
                   // {...activeStep === steps.length - 1 ? disabled = {true} : "" }
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
