import * as React from "react";
//import { spacing } from '@mui/system';
//import Avatar from "@mui/material/Avatar";
//import Button from '@mui/material/Button';
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
//import FormControlLabel from '@mui/material/FormControlLabel';
//import Checkbox from '@mui/material/Checkbox';
//import Link from '@mui/material/Link';            // se comenta esta linea y se importa el link de react
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
//import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
//import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
//import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import { useContext } from "react";
import { Footer } from "../pantallas/Footer";
import { Autocomplete } from "@mui/material";
//import {SelectCertificacion} from '../formularios';

const theme = createTheme();

export const DatosCultivoForm = () => {
  //se debe cambiar export default por export const SignUp = () =>
  const { cultivo, setCultivo, errores } = useContext(UserContext); // importo useContext para tener el valor de los datos del Usuario

  let styles = {
    fontWeight: "bold",
    color: "#dc3545",
  };

  const handleInputChange = (event) => {
    //console.log(event.target.name)
    //console.log(event.target.value)
    //console.log(usuario.correo)
    setCultivo({
      ...cultivo,
      [event.target.name]: event.target.value,
    });
  };

  const defaultProps = {
    options: tipo,
    getOptionLabel: (option) => option.title,
  };

  
  const defaultProps2 = {
    options: lotes,
    getOptionLabel: (option) => option.title,
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
         
          <Box
            component="form"
            noValidate
            /* onSubmit={handleSubmit} */ sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="nombreCultivo"
                  required
                  fullWidth
                  id="cultivoName"
                  label="Nombre Cultivo"
                  autoFocus
                  value={cultivo.nombreCultivo}
                  onChange={handleInputChange}
                />
                {errores.nombreCultivo && <p style={styles}> {errores.nombreCultivo} </p>}{" "}
                {/* renderizado condicional paara mostrar los errores de validacion*/}
              </Grid>


          <Grid item xs={12} md={6}>
          <Autocomplete
            value={cultivo.valueCultivoTipoProducto}
            inputValue={cultivo.tipoProducto}
            isOptionEqualToValue={(tipo, value) =>
            tipo.title === cultivo.tipoProducto 
            }
            // required
            {...defaultProps}
            id="tipoProducto"
            name="tipoProducto"
            clearOnEscape
            renderInput={(params) => (
              <TextField
                {...params}
                label="Tipo de Producto"
                name="tipoProducto"
                //variant="standard"
              />
            )}
            onChange={(event, newValue) =>
              setCultivo({ ...cultivo, valueCultivoTipoProducto: newValue })
            }
            onInputChange={(event, newInputValue) =>
              setCultivo({ ...cultivo, tipoProducto: newInputValue })
            }
          />
          {errores.tipoProducto && (
            <p style={styles}> {errores.tipoProducto} </p>
          )}{" "}
          {/* renderizado condicional paara mostrar los errores de validacion*/}
        </Grid>


        <Grid item xs={12} md={6}>
          <Autocomplete
            value={cultivo.valueCultivoLotes}
            inputValue={cultivo.cantidadLotes}
            isOptionEqualToValue={(lotes, value) =>
            lotes.title === cultivo.cantidadLotes 
            }
            // required
            {...defaultProps2}
            id="cantidadLotes"
            name="cantidadLotes"
            clearOnEscape
            renderInput={(params) => (
              <TextField
                {...params}
                label="Cantidad de Lotes"
                name="cantidadLotes"
                //variant="standard"
              />
            )}
            onChange={(event, newValue) =>
              setCultivo({ ...cultivo, valueCultivoLotes: newValue })
            }
            onInputChange={(event, newInputValue) =>
              setCultivo({ ...cultivo, cantidadLotes: newInputValue })
            }
          />
          {errores.cantidadLotes && (
            <p style={styles}> {errores.cantidadLotes} </p>
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


const tipo = [
  { title: " ", id: " " },
  { title: "Aguacate", id: "Ag" },
  { title: "Cafe", id: "Ca" },
  { title: "Limon", id: "Li" },
  { title: "Lulo", id: "Lu" },
  { title: "Cacao", id: "Co" },
  { title: "Mango", id: "Mg" },
  { title: "Platano", id: "Pl" },
];


const lotes = [
  { title: " ", id: " " },
  { title: "Uno", id: "1" },
  { title: "Dos", id: "2" },
  { title: "Tres", id: "3" },
  { title: "Cuatro", id: "4" },
  { title: "Cinco", id: "5" },

];