import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { UserContext } from "../UserContext";
import { useContext, useState, useEffect } from "react";
import { Footer } from "../pantallas/Footer";
import { Autocomplete } from "@mui/material";



const theme = createTheme();

export const UbicacionForm = () => {
  
  const { cultivo, setCultivo, errores } = useContext(UserContext); // importo useContext para tener el valor de los datos del Usuario
  const [departamento, setDepartamento] = useState([]);
  const [municipio, setMunicipio] = useState([]);


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

  useEffect(() => {
    //setCultivo ({...cultivo, valueDepartamento : { title: " ", id: " " }})
    //setDepartamento ([])
    //cultivo.valueDepartamento = { title: " ", id: " " }
    if (cultivo.pais === null){
      setDepartamento (vacio)
      }else if (cultivo.pais === " "){
      setDepartamento (vacio)
    }else if (cultivo.pais === "Colombia"){
      setDepartamento (departamentosCol)
    }else if  (cultivo.pais === "Peru"){
      setDepartamento (departamentosPer)
    }

  }, [cultivo.valuePais, cultivo.pais, departamento])

  useEffect(() => {
    
    if (cultivo.departamento === null){
      setMunicipio (vacio)
      }else if (cultivo.departamento === " "){
        setMunicipio (vacio)
    }else if (cultivo.departamento === "Antioquia"){
      setMunicipio (municipiosAnt)
    }else if  (cultivo.departamento === "Cundinamarca"){
      setMunicipio (municipiosCun)
    }else{
      setMunicipio (vacio)
    }

  }, [cultivo.departamento])
  

                                            /*   const handleInputChange = (event) => {
                                                
                                                setCultivo({
                                                  ...cultivo,
                                                  [event.target.name]: event.target.value,
                                                });
                                              }; */

  const defaultProps = {
    options: pais,
    getOptionLabel: (option) => option.title,
  };

  
  const defaultProps2 = {
    options: departamento,
    getOptionLabel: (option) => option.title,
  };

  const defaultProps3 = {
    options: municipio,
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
          
          <Autocomplete
            value={cultivo.valuePais}
            inputValue={cultivo.pais}
            isOptionEqualToValue={(pais, value) =>
            pais.title === cultivo.pais 
            }
            // required
            {...defaultProps}
            id="pais"
            name="pais"
            clearOnEscape
            renderInput={(params) => (
              <TextField
                {...params}
                label="Pais"
                name="pais"
                //variant="standard"
              />
            )}
            onChange={(event, newValue) =>
              setCultivo({ ...cultivo, valuePais: newValue })
            }
            onInputChange={(event, newInputValue) =>
              setCultivo({ ...cultivo, pais: newInputValue })
            }
          />
          {errores.pais && (
            <p style={styles}> {errores.pais} </p>
          )}{" "}
          {/* renderizado condicional paara mostrar los errores de validacion*/}
        </Grid>





        <Grid item xs={12} >
          <Autocomplete
            value={cultivo.valueDepartamento}
            inputValue={cultivo.departamento}
            isOptionEqualToValue={(departamento, value) =>
            departamento.title === cultivo.departamento 
            }
            // required
            {...defaultProps2}
            id="departamento"
            name="departamento"
            clearOnEscape
            renderInput={(params) => (
              <TextField
                {...params}
                label="Departamento"
                name="departamento"
                //variant="standard"
              />
            )}
            onChange={(event, newValue) =>
              setCultivo({ ...cultivo, valueDepartamento: newValue })
              }
            onInputChange={(event, newInputValue) =>
              setCultivo({ ...cultivo, departamento: newInputValue })
            }
          />
          {errores.departamento && (
            <p style={styles}> {errores.departamento} </p>
          )}{" "}
          {/* renderizado condicional paara mostrar los errores de validacion*/}
        </Grid>




        <Grid item xs={12} >
          <Autocomplete
            value={cultivo.valueMunicipio}
            inputValue={cultivo.municipio}
            isOptionEqualToValue={(municipio, value) =>
            municipio.title === cultivo.municipio 
            }
            // required
            {...defaultProps3}
            id="municipio"
            name="municipio"
            clearOnEscape
            renderInput={(params) => (
              <TextField
                {...params}
                label="Municipio"
                name="municipio"
                //variant="standard"
              />
            )}
            onChange={(event, newValue) =>
              setCultivo({ ...cultivo, valueMunicipio: newValue })
              }
            onInputChange={(event, newInputValue) =>
              setCultivo({ ...cultivo, municipio: newInputValue })
            }
          />
          {errores.municipio && (
            <p style={styles}> {errores.municipio} </p>
          )}{" "}
          {/* renderizado condicional paara mostrar los errores de validacion*/}
        </Grid>
         


        <Grid item xs={12}>
          <TextField
            required
            id="corregimiento"
            name="corregimiento"
            label="Corregimiento - vereda"
            fullWidth
            //autoComplete="shipping address-level2"
            //variant="standard"
            variant='outlined'
            value={cultivo.corregimiento}
            //onChange={handleInputChange}
            onChange={handleInputChange}
          />
          {errores.corregimiento && <p style={styles}> {errores.corregimiento} </p>}{" "}
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


const pais = [
  { title: " ", id: " " },
  { title: "Colombia", id: "Col" },
  { title: "Ecuador", id: "Ecu" },
  { title: "Peru", id: "Per" },
  { title: "Bolivia", id: "Bol" },
 
];


const departamentosCol = [
  { title: " ", id: " " },
  { title: "Antioquia", id: "Ant" },
  { title: "Boyaca", id: "Boy" },
  { title: "Cundinamarca", id: "Cun" },
  { title: "Huila", id: "Hui" },
  { title: "Risaralda", id: "Ris" },

];

const departamentosPer = [
  { title: " ", id: " " },
  { title: "Amazonas", id: "Ama" },
  { title: "Cajamarca", id: "Caj" },
  { title: "Junin", id: "Jun" },
  { title: "Lima", id: "Lim" },
  { title: "Puno", id: "Pun" },

];

const vacio = [
  { title: " ", id: "1" },
  { title: "a", id: "2" },
 

];

const municipiosAnt = [
  { title: " ", id: " " },
  { title: "Betulia", id: "Bet" },
  { title: "Anza", id: "Anz" },
  { title: "Urrao", id: "Urr" },
  { title: "Rio Negro", id: "Rio" },
  { title: "Guintar", id: "Gui" },

];

const municipiosCun = [
  { title: " ", id: " " },
  { title: "Apulo", id: "Apu" },
  { title: "Tocancipa", id: "Toc" },
  { title: "Facatativa", id: "Fac" },
  { title: "Chia", id: "Chi" },
  { title: "Tenjo", id: "Ten" },

];

const municipiosJun = [
  { title: " ", id: " " },
  { title: "Jun1", id: "Apu" },
  { title: "Jun2", id: "Toc" },
  { title: "Jun3", id: "Fac" },
  { title: "Jun4", id: "Chi" },
  { title: "Jun5", id: "Ten" },

];

const municipiosLim = [
  { title: " ", id: " " },
  { title: "Lima-Apulo", id: "Apu" },
  { title: "Lima-Tocancipa", id: "Toc" },
  { title: "Lima-Facatativa", id: "Fac" },
  { title: "Lima-Chia", id: "Chi" },
  { title: "Lima-Tenjo", id: "Ten" },

];
