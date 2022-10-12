import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import InputAdornment from '@mui/material/InputAdornment';

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { UserContext } from "../UserContext";
import { useContext} from "react";
import { Footer } from "../pantallas/Footer";
import { Autocomplete } from "@mui/material";

//import AdapterDateFns from "@mui/lab/AdapterDateFns";
//import LocalizationProvider from "@mui/lab/LocalizationProvider";
//import AdapterDateFns from "@mui/x-date-pickers"
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
//import DatePicker from "@mui/lab/DatePicker";
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from "@mui/x-date-pickers"



const theme = createTheme();

export const DatosLote2Form = () => {
  
  const { cultivo, setCultivo, errores } = useContext(UserContext); // importo useContext para tener el valor de los datos del Usuario
  //const [departamento, setDepartamento] = useState([]);



  let styles = {
    fontWeight: "bold",
    color: "#dc3545",
  };

  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setCultivo({
      ...cultivo,
      [event.target.name]: event.target.value,
    });
  };



 
  

                                            /*   const handleInputChange = (event) => {
                                                
                                                setCultivo({
                                                  ...cultivo,
                                                  [event.target.name]: event.target.value,
                                                });
                                              }; */

  const defaultProps = {
    options: trazo,
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
              


            <Grid item xs={12}>
          <TextField
            required
            id="nombreLote2"
            name="nombreLote2"
            label="Nombre o numero Lote"
            fullWidth
            //autoComplete="shipping address-level2"
            //variant="standard"
            variant='outlined'
            value={cultivo.nombreLote2}
            //onChange={handleInputChange}
            onChange={handleInputChange}
          />
          {errores.nombreLote && <p style={styles}> {errores.nombreLote} </p>}{" "}
          {/* renderizado condicional paara mostrar los errores de validacion*/}
        </Grid>



        <Grid item xs={12}>
        <TextField
          id="cantidad-arboles"
          label="Cantidad Arboles"
          name="cantidadArbolesLote2"
          type="number"
          value={cultivo.cantidadArbolesLote2}
          onChange={handleInputChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
          {errores.cantidadArboles && <p style={styles}> {errores.cantidadArboles} </p>}{" "}
          {/* renderizado condicional paara mostrar los errores de validacion*/}
        </Grid>

        <Grid item xs={12} md={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Fecha Establecimiento"
              //value={value}
              value={cultivo.fechaLote2}
              /*  onChange={(newValue) => {
              setValue(newValue);
            }} */

              onChange={(newValue) =>
                setCultivo({ ...cultivo, fechaLote2: newValue })
              }
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
            
            
            
            <Grid item xs={12} >
            <Divider sx={{ mt: 1 }}>
              <Chip label="DISTANCIA DE SIEMBRA" />
            </Divider>
            </Grid>




            <Grid item xs={12} md={6}>
        <TextField
          id="distancia-arboles"
          label="Distancia entre Arboles"
          name="distanciaArbolesLote2"
          value={cultivo.distanciaArbolesLote2}
          onChange={handleInputChange}
          type="number"
          
          InputProps={{
            startAdornment: <InputAdornment position="start">metros</InputAdornment>,
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />
          {errores.distanciaArboles && <p style={styles}> {errores.distanciaArboles} </p>}{" "}
          {/* renderizado condicional paara mostrar los errores de validacion*/}
        </Grid>






        <Grid item xs={12} md={6}>
        <TextField
          id="distancia-surcos"
          label="Distancia entre Surcos"
          name="distanciaSurcosLote2"
          value={cultivo.distanciaSurcosLote2}
          onChange={handleInputChange}
          type="number"
          InputProps={{
            startAdornment: <InputAdornment position="start">metros</InputAdornment>,
          }}
          InputLabelProps={{
            
            shrink: true,
          }}
        />
          {errores.distanciaSurcos && <p style={styles}> {errores.distanciaSurcos} </p>}{" "}
          {/* renderizado condicional paara mostrar los errores de validacion*/}
        </Grid>




          <Grid item xs={12} >
          
          <Autocomplete
            value={cultivo.valueCultivoTipoTrazoLote2}
            inputValue={cultivo.tipoTrazoLote2}
            isOptionEqualToValue={(Trazo, value) =>
            trazo.title === cultivo.tipoTrazoLote2 
            }
            // required
            {...defaultProps}
            id="trazo"
            name="tipoTrazoLote2"
            clearOnEscape
            renderInput={(params) => (
              <TextField
                {...params}
                label="Trazo"
                name="tipoTrazoLote2"
                //variant="standard"
              />
            )}
            onChange={(event, newValue) =>
              setCultivo({ ...cultivo, valueCultivoTipoTrazoLote2: newValue })
            }
            onInputChange={(event, newInputValue) =>
              setCultivo({ ...cultivo, tipoTrazoLote2: newInputValue })
            }
          />
          {errores.trazo && (
            <p style={styles}> {errores.trazo} </p>
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


const trazo = [
  { title: " ", id: " " },
  { title: "Triangulo - Tres Bolillo", id: "Treb" },
  { title: "Cuadro", id: "Cuad" },
  { title: "Azar", id: "Azar" },
  
];
