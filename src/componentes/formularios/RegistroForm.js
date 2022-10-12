import * as React from "react";
//import { spacing } from '@mui/system';
import Avatar from "@mui/material/Avatar";
//import Button from '@mui/material/Button';
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
//import FormControlLabel from '@mui/material/FormControlLabel';
//import Checkbox from '@mui/material/Checkbox';
//import Link from '@mui/material/Link';            // se comenta esta linea y se importa el link de react
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import { useContext } from "react";
import { Footer } from "../pantallas/Footer";
//import Axios from 'axios';
//import Swal from 'sweetalert2';
//import {SignIn} from './Ingresar.js'
//import { set } from 'date-fns';
//import { zonedTimeToUtc, getTimeZoneValue } from 'date-fns-tz'

//function Copyright(props) {

/* 
  export const Copyright = (props) => {       // funcion para mostrar el pie de pagina, se cambio por el footer
  return (
    <Typography variant="caption" color="text.secondary" align="center"  {...props}>
      {'Copyright © '}
      <Link color="inherit" to="/">
        AgroRegistros.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
} */

const theme = createTheme();

export const RegistroForm = () => {
  //se debe cambiar export default por export const SignUp = () =>
  const { usuario, setUsuario, errores } = useContext(UserContext); // importo useContext para tener el valor de los datos del Usuario
  //const [checked, setChecked] = React.useState(false);    // para utilizar el chequeo para activar el boton de registrarse
  //const [data, setData] = useState([{NombreComercial :  'abafed'}]);
  //console.log (usuario);

  //let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;    // valida el nombre
  //let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;   // valida correo.
  //let regexComments = /^.{1,255}$/;     // para contar la cantidad de caracteres de un cuadro de texto.

  /* 
                                          const guardar = async()=>{
                                            
                                            
                                          const {nombre, apellido, correo,  contrasena1 } = usuario;
                                          //const fecha = Date.now()
                                          //const hora = (fecha2.getHour() - 5)
                                          //const fecha = fecha2.setHour(hora)
                                          //console.log(new Intl.DateTimeFormat().format(fecha));

                                          try {

                                            const respuesta = await Axios.post('http://192.168.1.13:4000/api/auth/singup', {fecha: new Date(), nombre, apellido, correo, contrasena1 } )
                                            
                                            const mensaje = respuesta.data.mensaje
                                            //alert (mensaje)
                                            Swal.fire({
                                              title: mensaje,
                                              icon: 'success',
                                              confirmButtonText: 'Listo'
                                            }).then((result) => {
                                              if (result.isConfirmed) {
                                              
                                                //window.location.reload();   // para iniciar nuevamente con otro producto del inventario.
                                                //{<SignIn />}
                                                window.location.replace("/ingresar")
                                              }
                                            })
                                            
                                          } catch (error) {
                                            console.log (error)
                                          }
                                          


                                          } */

  /*                                                                                     const getData = async() => {
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

  /*                              const handleSubmit = (event) => {
                                event.preventDefault();
                                const data = new FormData(event.currentTarget);
                                // eslint-disable-next-line no-console
                                console.log({
                                  email: data.get('correo'),
                                  password: data.get('contrasena1'),
                                });

                              /*  if (!usuario.nombre.trim()) {
                                  //setErrores (error.nombreComercial = "El nombre comercial es requerido");
                                  setErrores ({nombre : ('El nombre es requerido')}); 
                                }else if (!regexName.test(usuario.nombre.trim()) ) {
                                  setErrores ({nombre : ('verifique el nombre')}); 
                                  
                                }else if (!usuario.apellido.trim()) {
                                  setErrores ({apellido : ('El apellido  es requerido')}); 
                                }else if (!usuario.correo.trim()) {
                                  setErrores ({correo : ('El correo es requerido')}); 
                                  
                                }else if (!regexEmail.test (usuario.correo.trim())) {
                                  setErrores ({correo : ('Utilice un correo valido')});
                                }else if (!usuario.contrasena1.trim()) {
                                  setErrores ({contrasena1 : ('La clave es requerida')}); 
                                  
                                }else if (!usuario.contrasena2.trim()) {
                                  setErrores ({contrasena2 : ('Confirme la Contraseña')}); 
                                
                                }else if (usuario.contrasena2.trim() !== usuario.contrasena1.trim()) {
                                  setErrores ({contrasena2 : ('las claves no coinciden')}); 
                                
                                }else if (usuario.correo.trim() === datos.Correo) {
                                  setErrores ({contrasena2 : ('El usuario ya existe')}); 

                                }else {
                                  setErrores({});
                                  console.log ('Guardando');
                                  guardar();
                                }
                                }; 
                              }; */

  const handleInputChange = (event) => {
    //console.log(event.target.name)
    //console.log(event.target.value)
    //console.log(usuario.correo)
    setUsuario({
      ...usuario,
      [event.target.name]: event.target.value,
    });
    //console.log(usuario.correo)
  };

  //   const handleChek = (event) => {
  //         setChecked(event.target.checked);
  //                                 };

  /*                                                             useEffect(() => {

                                                              getData()
                                                            const  respu = getData()
                                                            console.log ('respu = ', respu)
                                                          
                                                          }, [] ) */

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
            Registrarse
          </Typography>
          <Box
            component="form"
            noValidate
            /* onSubmit={handleSubmit} */ sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="nombre"
                  required
                  fullWidth
                  id="firstName"
                  label="Nombre"
                  autoFocus
                  value={usuario.nombre}
                  onChange={handleInputChange}
                />
                {errores.nombre && <p style={styles}> {errores.nombre} </p>}{" "}
                {/* renderizado condicional paara mostrar los errores de validacion*/}
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Apellidos"
                  name="apellido"
                  autoComplete="family-name"
                  value={usuario.apellido}
                  onChange={handleInputChange}
                />
                {errores.apellido && <p style={styles}> {errores.apellido} </p>}{" "}
                {/* renderizado condicional paara mostrar los errores de validacion*/}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Correo Electronico"
                  name="correo"
                  autoComplete="email"
                  value={usuario.correo}
                  onChange={handleInputChange}
                />
                {errores.correo && <p style={styles}> {errores.correo} </p>}{" "}
                {/* renderizado condicional paara mostrar los errores de validacion*/}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="contrasena1"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={usuario.contrasena1}
                  onChange={handleInputChange}
                />
                {errores.contrasena1 && (
                  <p style={styles}> {errores.contrasena1} </p>
                )}{" "}
                {/* renderizado condicional paara mostrar los errores de validacion*/}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="contrasena2"
                  label="Confirme Contraseña"
                  type="password"
                  id="password2"
                  autoComplete="new-password2"
                  value={usuario.contrasena2}
                  onChange={handleInputChange}
                />
                {errores.contrasena2 && (
                  <p style={styles}> {errores.contrasena2} </p>
                )}{" "}
                {/* renderizado condicional paara mostrar los errores de validacion*/}
              </Grid>

              {/*                                                             <Grid item xs={12}>
                                                              <FormControlLabel
                                                                control={<Checkbox value="allowExtraEmails" checked = {checked} color="primary"  onChange={handleChek} />}
                                                                label="Acepto la politica de tratamiento de datos personales."
                                                              />
                                                              <Link color="inherit" to="/politicadatos">
                                                              Tratamiento datos personales
                                                              </Link>
                                                            </Grid>
                                                          </Grid>


                                                          <Button
                                                            type="submit"
                                                            fullWidth
                                                            variant="contained"
                                                            sx={{ mt: 3, mb: 2 }}
                                                            disabled = {!checked}
                                                          >
                                                            Registrarse
                                                          </Button>
 */}
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to="/ingresar" variant="body2">
                    Ya tiene una cuenta? Ingresar
                  </Link>
                </Grid>
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
