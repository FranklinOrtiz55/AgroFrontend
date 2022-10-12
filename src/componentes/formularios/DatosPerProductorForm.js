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

const theme = createTheme();

export const DatosPerProductorForm = () => {
  //se debe cambiar export default por export const SignUp = () =>
  const { usuario, setUsuario, errores } = useContext(UserContext); // importo useContext para tener el valor de los datos del Usuario

  let styles = {
    fontWeight: "bold",
    color: "#dc3545",
  };

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
