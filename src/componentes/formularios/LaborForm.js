import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { UserContext } from "../UserContext";
import { useContext, useEffect, useState } from "react";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { agroApi } from "../../api";
//import Axios from 'axios';

const filter = createFilterOptions();

export const validarFormularioLabor = (producto) => {
  let error = {};

  if (!producto.nombreComercial.trim()) {
    error.nombreComercial = "El nombre comercial es requerido";
  }

  if (!producto.registroIca.trim()) {
    error.registroIca = "El número de registro es requerido";
  }

  return error;
};



export default function LaborForm() {
  //const userContext =  useContext(UserContext);   // se etrae todo el contenido en el usercontext la variable
  const { producto, setProducto, errores, setErrores, cultivo, setCultivo, estaRegistrado, labores, setLabores } = useContext(
    UserContext
  ); // se desestructura para obtener 

 

  //console.log("producto 1= ",  producto);

    const [opciones, setOpciones] = useState([{nombreComercial : "abafed"}]); // para evitar el error de que autoccomplet esta esperando un aray, y no un objeto.


  const handleChange = (event) => {
   
    setProducto({
      ...producto,
      [event.target.name]: event.target.value,
    });
   
  };

  let styles = {
    fontWeight: "bold",
    color: "#dc3545",
  };

                              

  const getDatos = async () => {
  agroApi.get('/cultivo/datosCultivo',  {
    params: {
      userId : estaRegistrado.id,
    }
  })
  .then(function (response) {
    // handle success
    const {data = []} = response.data;
      console.log("data = ", data);
      setOpciones(data);
      setCultivo(data);
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}

  

  useEffect(() => {
                                const respu = getDatos();
                                console.log ("estaregistrado en labor form", estaRegistrado);
 
                               console.log("respu = ", respu);
   
   }, [estaRegistrado]);




  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Datos de la Labor 
      </Typography>
      <Grid container spacing={3}>

      <Grid item xs={12} sm={6}>
        <TextField
          id="outlined-read-only-input"
          label="Nombre del Cultivo 1"
          //defaultValue={labores.nombreCultivo}
          defaultValue={cultivo.nombreCultivo}      // para visualizar el nombre traido de la bd.
          InputProps={{
            readOnly: true,
          }}
        />
      </Grid>
      

        <Grid item xs={12} >


                                                                <Autocomplete
                                                                //required
                                                              value={cultivo.nombreCultivo}
                                                              //variant="standard"
                                                              onChange={(event, newValue, reason) => {
                                                                if (typeof newValue === 'string') {
                                                                  setCultivo({ ...cultivo, nombreCultivo: newValue, valuenombreCultivo: newValue });

                                                                 // setValue({
                                                                    //title: newValue,
                                                                   // nombreComercial: newValue,    // se crea un nuevo valor para filtrar segun la entrada
                                                                 // });
                                                                } else if (newValue && newValue.inputValue) {
                                                                  // Create a new value from the user input
                                                                  setCultivo({ ...cultivo, nombreCultivo: newValue.inputValue, valuenombreCultivo: newValue.inputValue });

                                                              //    setValue({
                                                                    //title: newValue.inputValue, 
                                                              //      nombreComercial: newValue.inputValue, // cuando se escribe directamente, se agrega al filtro.
                                                              //    });
                                                                } else if (reason === "clear") {         // cuando se cierra con x se borran todos los datos 
                                                             //       setValue("");
                                                                    setCultivo({ ...cultivo, 
                                                                      nombreCultivo: "", 
                                                                      valuenombreCultivo: "",
                                                                      nombreLote1: " ",
                                                                      cantidadArbolesLote1: 0,
                                                                      nombreLote2: " ",
                                                                      cantidadArbolesLote2: 0,  
                                                                      nombreLote3: " ",
                                                                      cantidadArbolesLote3: 0,  
                                                                      nombreLote4: " ",
                                                                      cantidadArbolesLote4: 0,
                                                                      nombreLote5: " ",
                                                                      cantidadArbolesLote5: 0,

                                                                     });
                                                                  } else {
                                                              //    setValue(newValue);
                                                                  setCultivo({                             // al seleccionar, se devuelve un objeto completo con todos los atributos
                                                                    ...cultivo,
                                                                    nombreCultivo: newValue.nombreCultivo, // al seleccionar un producto se cambian los valores para mostrar en el formulario
                                                                    valuenombreCultivo: newValue.nombreComercial,
                                                                    
                                                                  }); // se cambia el valor y lo que se muestra
                                                                  setErrores({});
                                                                }
                                                              }}
                                                              filterOptions={(options, params) => {
                                                                const filtered = filter(options, params);

                                                                const { inputValue } = params;
                                                                // Suggest the creation of a new value
                                                                const isExisting = options.some((option) => inputValue === option.nombreCultivo);
                                                                if (inputValue !== '' && !isExisting) {
                                                                  filtered.push({
                                                                    inputValue,
                                                                    //title: `Add "${inputValue}"`,
                                                                    nombreCultivo: `Add "${inputValue}"`,   // se pone nombre comercial ya que es el parametro a filtrr para mostrar
                                                                  });
                                                                }

                                                                return filtered;
                                                              }}
                                                              selectOnFocus
                                                              clearOnBlur
                                                              handleHomeEndKeys
                                                              id="free-solo-with-text-demo"
                                                              //variant="standard"
                                                              //options={top100Films}
                                                              //options={lista}
                                                              options={opciones}
                                                              getOptionLabel={(option) => {
                                                                // Value selected with enter, right from the input
                                                                if (typeof option === 'string') {
                                                                  return option;
                                                                }
                                                                // Add "xxx" option created dynamically
                                                                if (option.inputValue) {
                                                                  return option.inputValue;
                                                                }
                                                                // Regular option
                                                                //return option.title;
                                                                return option.nombreCultivo;
                                                              }}
                                                              //renderOption={(props, option) => <li {...props}>{option.title}</li>}
                                                              renderOption={(props, option) => <li {...props}>{option.nombreCultivo}</li>}    // se renderizan las opciones 
                                                              sx={{ width: 300 }}
                                                              freeSolo
                                                              renderInput={(params) => (
                                                                <TextField required {...params} label="Nombre Cultivo" variant="standard"/>
                                                              )}
                                                            /> 
                                                             {errores.nombreCultivo && <p style={styles}> {errores.nombreCultivo} </p>}{" "}
                                                            {/* renderizado condicional paara mostrar los errores de validacion*/}

                                                                                       {/*            <div>{`value: ${
                                                                                                  producto.nombreComercial !== null
                                                                                                    ? `'${producto.nombreComercial}'`
                                                                                                    : "null"
                                                                                                }`}</div>
                                                                                                <div>{`inputValue: '${producto.valuenombreComercial}'`}</div>
                                                                                                <br /> */}

        </Grid>


                                                                                          
  

      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="registroIca"
          name="registroIca"
          label="Registro ICA"
          fullWidth
          variant="standard"
          value={producto.registroIca}
          //onChange={e => setProducto ({...producto,registro:(e.target.value)})}
          onChange={handleChange}
          //onBlur = {handleBlur}
        />
        {errores.registroIca && <p style={styles}> {errores.registroIca} </p>}{" "}
        {/* renderizado condicional paara mostrar los errores de validacion*/}
        </Grid>

      </Grid>
    </React.Fragment>
  );
}

