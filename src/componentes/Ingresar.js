import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
//import Link from '@mui/material/Link';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Footer } from "./pantallas/Footer";
//import Enlace from 'rea'
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useContext } from "react";
//import Axios from "axios";
import Swal from "sweetalert2";
import {agroApi} from "../api/index.js"

const theme = createTheme();

/* function Copyright(props) {                  // funcion para mostrar el pie de pagina, se cambio por el footer.
  return (
    <Typography variant="caption" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" to="/">
        AgroRegistros.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
} */

export const SignIn = () => {
  const { usuario, setUsuario, errores, setErrores, estaRegistrado, setEstaRegistrado } = useContext(UserContext); // importo useContext para tener el valor de los errores en el formulario

  let styles = {
    fontWeight: "bold",
    color: "#dc3545",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/; // valida correo.
    //const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
   /*  console.log({
      email: data.get("correo"),
      password: data.get("contrasena1"),
    }); */
                                                                                /* 
                                                                                    const ingresar = async () => {
                                                                                      const { correo, contrasena1 } = usuario;
                                                                                      //const fecha = Date.now()
                                                                                      //const hora = (fecha2.getHour() - 5)
                                                                                      //const fecha = fecha2.setHour(hora)
                                                                                      //console.log(new Intl.DateTimeFormat().format(fecha));

                                                                                      try {
                                                                                        // se trata con un try el error generado por los datos invalidos

                                                                                        //const respuesta = await Axios.post('http://localhost:4000/api/auth/singin', { correo, contrasena1 } )  //fecha: new Date(),
                                                                                        const respuesta = await Axios.post(
                                                                                          //"http://192.168.1.11:4000/api/auth/singin",
                                                                                          "http://localhost:4000/api/auth/singin",
                                                                                          { correo, contrasena1 }
                                                                                        ); //fecha: new Date(), no se pone localhost ya que marca error en android

                                                                                        const mensaje = respuesta.data.message;
                                                                                        //const error = respuesta.data.error
                                                                                        //const token = respuesta.data.token;
                                                                                        const {token, nombreUsuario, rolesUsuario} = respuesta.data;  // se desectructura la respuesta para obtener los valores
                                                                                        console.log("token = ", token)
                                                                                        if (token) {
                                                                                          //window.location.replace("/inventario");
                                                                                          setEstaRegistrado({loguin: true, nombreUsuario: nombreUsuario, rolesUsuario: rolesUsuario})
                                                                                          //window.location.replace("/inventario");
                                                                                          //window.location.replace("/inventario");
                                                                                          console.log("token nombre = ", token.nombre);
                                                                                          console.log(estaRegistrado.loguin);
                                                                                          console.log(estaRegistrado.nombreUsuario);
                                                                                          //window.location.reload(); // para iniciar nuevamente con otro intento.
                                                                                          window.location.replace("/")
                                                                                        } else console.log(mensaje);
                                                                                      } catch (error) {
                                                                                        Swal.fire({
                                                                                          title: error, //"Usuario o clave incorrectos, verifique los datos",
                                                                                          icon: "error",
                                                                                          confirmButtonText: "Ok",
                                                                                        }).then((result) => {
                                                                                          if (result.isConfirmed) {
                                                                                            window.location.reload(); // para iniciar nuevamente con otro intento.

                                                                                            //window.location.replace("/ingresar")
                                                                                          }
                                                                                        });
                                                                                      }

                                                                                      //alert (mensaje)
                                                                                    }; */


  const ingresar = async () => {
  const { correo, contrasena1 } = usuario;
                                                                                      
   try {
    
    const respuesta = await agroApi.post("auth/singin", { correo, contrasena1 } ); // se llama la api con la configuracion de axios 

       const mensaje = respuesta.data.message;
      const {userId, token, nombreUsuario, rolesUsuario, cultivo} = respuesta.data;  // se desectructura la respuesta para obtener los valores
            console.log("token all= ", token, nombreUsuario, rolesUsuario, cultivo)
            
            if (token) {
                                                                                          
              setEstaRegistrado({id: userId, loguin: true, nombreUsuario: nombreUsuario, rolesUsuario: rolesUsuario, token: token, cultivo: cultivo}) // se graban los datos recibidos en un estado
              
              localStorage.setItem("token", (token));
                                                                                        
              console.log(estaRegistrado.loguin);
              console.log(estaRegistrado.nombreUsuario);
              console.log(estaRegistrado.rolesUsuario);
              console.log(estaRegistrado.cultivo);
              window.location.replace("/")
              } else console.log(mensaje);
              } catch (error) {
              Swal.fire({
              title: error, //"Usuario o clave incorrectos, verifique los datos",
              icon: "error",
              confirmButtonText: "Ok",
              }).then((result) => {
              if (result.isConfirmed) {
              window.location.reload(); // para iniciar nuevamente con otro intento.
              }
              });
              }
        };



    if (!usuario.correo.trim()) {
      setErrores({ correo: "El correo es requerido" });
    } else if (!regexEmail.test(usuario.correo.trim())) {
      setErrores({ correo: "Utilice un correo valido" });
    } else if (!usuario.contrasena1.trim()) {
      setErrores({ contrasena1: "La clave es requerida" });
    } else {
      setErrores({});
      console.log("ingresando");
      console.log(process.env.REACT_APP_BACKEND_URL);
      ingresar();
    }
  };

  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setUsuario({
      ...usuario,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Ingresar
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="correo"
                  label="Correo Electrónico"
                  name="correo"
                  autoComplete="email"
                  autoFocus
                  value={usuario.correo}
                  onChange={handleInputChange}
                />
                {errores.correo && <p style={styles}> {errores.correo} </p>}{" "}
                {/* renderizado condicional paara mostrar los errores de validacion*/}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="contrasena1"
                  label="Contraseña"
                  type="password"
                  id="contrasena1"
                  autoComplete="current-password"
                  value={usuario.contrasena1}
                  onChange={handleInputChange}
                />
                {errores.contrasena1 && (
                  <p style={styles}> {errores.contrasena1} </p>
                )}{" "}
                {/* renderizado condicional paara mostrar los errores de validacion*/}
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="recordarme" color="primary" />}
                  label="Recordarme"
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Ingresar
            </Button>

            <Grid container>
              <Grid item xs>
                <Link to="/" variant="body2">
                  Olvido la contraseña?
                </Link>
              </Grid>
              <Grid item xs>
                <Link to="/registro" variant="body2">
                  {"No tiene una cuenta? Registrese"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Footer> </Footer>
    </ThemeProvider>
  );
};
