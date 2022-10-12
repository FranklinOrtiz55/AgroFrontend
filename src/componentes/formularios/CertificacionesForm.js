import * as React from "react";
//import { spacing } from '@mui/system';
import Avatar from "@mui/material/Avatar";
//import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
//import TextField from '@mui/material/TextField';
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
//import Link from '@mui/material/Link';            // se comenta esta linea y se importa el link de react
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
//import Divider from "@mui/material/Divider";
//import Chip from "@mui/material/Chip";
import { createTheme, ThemeProvider } from "@mui/material/styles";
//import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import { useContext, useEffect } from "react";
import { Footer } from "../pantallas/Footer";
//import Axios from "axios";
//import Swal from "sweetalert2";

const theme = createTheme();

export const CertificacionesForm = () => {
  
  const { cultivo, setCultivo } = useContext(UserContext); // importo useContext para tener el valor de los datos del Usuario
  
  //const [checked, setChecked] = React.useState(false); // para utilizar el chequeo para activar el boton de registrarse


  


  const [state, setState] = React.useState({
    EnProceso : false,
    PredioExportador : false,
    BPA : false,
    GlobalGAP : false,
    RainForest : false,
    FairTrade : false,
    Grasp : false,
    Organico : false,
  });


  useEffect(() => {                               // se debe hacer esto para guardar cada vez que se cambia el estado de la certificacion
    
    setCultivo ({...cultivo , nombreCertificacion : Certificaciones})
  
    
  }, [state])


  const handleChange2 = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
    //setCultivo ({...cultivo , nombreCertificacion : Certificaciones})
  };

  const {
    EnProceso,
    PredioExportador,
    BPA,
    GlobalGAP,
    RainForest,
    FairTrade,
    Grasp,
    Organico,
  } = state;
  const errorRegistro =
    [
      EnProceso,
      PredioExportador,
      BPA,
      GlobalGAP,
      RainForest,
      FairTrade,
      Grasp,
      Organico,
    ].filter((v) => v).length === 0;
  //const roles = [Productor, Administrador, Contable, Tecnico, Auditor, Implementador, Operario].filter((v) => v);
  //console.log(roles);

  let Certificaciones = [];
  if (EnProceso === true) {
    Certificaciones.push("En Proceso");
  }
  if (PredioExportador === true) {
    Certificaciones.push("Predio Exportador");
  }
  if (BPA === true) {
    Certificaciones.push("BPA");
  }
  if (GlobalGAP === true) {
    Certificaciones.push("Global GAP");
  }
  if (RainForest === true) {
    Certificaciones.push("Rainforest");
  }
  if (FairTrade === true) {
    Certificaciones.push("FairTrade");
  }
  if (Grasp === true) {
    Certificaciones.push("Grasp");
  }
  if (Organico === true) {
    Certificaciones.push("Organico");
  }
  //setCultivo ({...cultivo , nombreCertificacion : Certificaciones})

  //setCultivo ({...cultivo , nombreCertificacion : Certificaciones})   // presenta error al renderizar aqui
  


  console.log(Certificaciones);
  console.log("cultivo = ", cultivo.nombreCertificacion);
          /* 
                                    const registrarse = async () => {
                                      const { nombre, apellido, correo, contrasena1 } = usuario;
                                      //console.log(nombre, apellido, correo,  contrasena1);

                                      try {
                                        const respuesta = await Axios.post(
                                          "http://localhost:4000/api/auth/singup",
                                          { fecha: new Date(), nombre, apellido, correo, contrasena1, roles }
                                        );

                                        const mensaje = respuesta.data.mensaje;
                                        //const token = respuesta.data.token
                                        //alert (mensaje)
                                        Swal.fire({
                                          title: mensaje,
                                          icon: "success",
                                          confirmButtonText: "Continuar",
                                        }).then((result) => {
                                          if (result.isConfirmed) {
                                            //window.location.reload();   // para iniciar nuevamente con otro producto del inventario.
                                            //{<SignIn />}
                                            window.location.replace("/ingresar");
                                          }
                                        });
                                      } catch (error) {
                                        //const mensaje = respuesta.data.mensaje

                                        console.log(error);
                                        Swal.fire({
                                          title: "No se pudo registrar el usuario. Intente nuevamente",
                                          icon: "error",
                                          confirmButtonText: "Aceptar",
                                        }).then((result) => {
                                          if (result.isConfirmed) {
                                            window.location.reload(); // para iniciar nuevamente con otro producto del inventario.
                                            //{<SignIn />}
                                            //window.location.replace("/ingresar")
                                          }
                                        });
                                      }
                                    }; */

  /*  
    const getData = async() => {
      try {
      const url = 'http://localhost:4000/api/usuario/';
      const resp = await fetch (url);
      const datos = await resp.json();
      setData(datos);
      //return datos;
    
      console.log (datos[0].correo);
    
        }
    
   catch (error) {
    console.log (error)
  }

} */

  let styles = {
    fontWeight: "bold",
    color: "#dc3545",
  };

                                              /*   const handleSubmit = (event) => {
                                                  event.preventDefault();
                                                  
                                                  registrarse();

                                                  }; */

  

                            /*   const handleChek = (event) => {
                                setChecked(event.target.checked);
                                setErrores({ errorRol: checked }); // pasa el valor del check para activar el boton de registrar
                                //setChecked(event.name.checked);
                              };
 */
 

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Seleccione una Certificacion o si esta en Proceso
          </Typography>
          <Box
            component="form"
            noValidate
            //onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="EnProceso"
                      value="EnProceso"
                      checked={EnProceso}
                      color="primary"
                      onChange={handleChange2}
                    />
                  }
                  label="En Proceso."
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="PredioExportador"
                      value="PredioExportador"
                      checked={PredioExportador}
                      color="primary"
                      onChange={handleChange2}
                    />
                  }
                  label="Predio Exportador."
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="BPA"
                      value="BPA"
                      checked={BPA}
                      color="primary"
                      onChange={handleChange2}
                    />
                  }
                  label="BPA."
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="GlobalGAP"
                      value="GlobalGAP"
                      checked={GlobalGAP}
                      color="primary"
                      onChange={handleChange2}
                    />
                  }
                  label="Global GAP."
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="Grasp"
                      value="Grasp"
                      checked={Grasp}
                      color="primary"
                      onChange={handleChange2}
                    />
                  }
                  label="Grasp."
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="RainForest"
                      value="RainForest"
                      checked={RainForest}
                      color="primary"
                      onChange={handleChange2}
                    />
                  }
                  label="Rain Forest."
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="FairTrade"
                      value="FairTrade"
                      checked={FairTrade}
                      color="primary"
                      onChange={handleChange2}
                    />
                  }
                  label="Fair Trade."
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="Organico"
                      value="Organico"
                      checked={Organico}
                      color="primary"
                      onChange={handleChange2}
                    />
                  }
                  label="Organico."
                />
              </Grid>

              <Grid item xs={12}>
                {errorRegistro && (
                  <p style={styles}>
                    {" "}
                    {errorRegistro} Debe Seleccionar Una certificacion
                  </p>
                )}{" "}
                {/* renderizado condicional paara mostrar los errores de validacion*/}
              </Grid>
            </Grid>

            
         
          </Box>
        </Box>
        {/* <Copyright sx={{position: "fixed",  bottom: 10 }} /> */}
      </Container>
      <Footer> </Footer>
    </ThemeProvider>
  );
};

