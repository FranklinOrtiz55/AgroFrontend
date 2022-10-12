import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { UserContext } from "../UserContext";
import { useContext, useEffect, useState } from "react";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
//import Axios from 'axios';

const filter = createFilterOptions();

export const validarFormulario = (producto) => {
  let error = {};

  if (!producto.nombreComercial.trim()) {
    error.nombreComercial = "El nombre comercial es requerido";
  }

  if (!producto.registroIca.trim()) {
    error.registroIca = "El número de registro es requerido";
  }

  return error;
};



export default function ProductoForm() {
  //const userContext =  useContext(UserContext);   // se etrae todo el contenido en el usercontext la variable
  const { producto, setProducto, errores, setErrores } = useContext(
    UserContext
  ); // se desestructura para obtener solo el producto

  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState("");
  //const [lista, setLista] = useState([""])    // [" ", " "];

  console.log("producto 1= ",  producto);

  //const [data, setData] = useState([{ nombreComercial: "abafed" }]); // para evitar el error de que autoccomplet esta esperando un aray, y no un objeto.
  //const [data, setData] = useState([]); // para evitar el error de que autoccomplet esta esperando un aray, y no un objeto.
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

  /* 
 const handleBlur = (event) => {
 
  setErrores(validarFormulario(producto));
} */

  /* const handleInputChange = (event, newInputValue) => {
  console.log(event.target.name)
  console.log(event.target.value)
  setProducto({
      ...producto,
      [event.target.name] : newInputValue
  })
} */

  /* const defaultProps2 = {
  options: tipo2,
  getOptionLabel: (option) => option.title,
} */

  const getDatos = async () => {
    try {
     const url = "http://localhost:4000/api/productos/productosGenerales";
      const resp = await fetch(url,{ headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }});

      const {data = []} = await resp.json();
      console.log("data = ", data);
      setOpciones(data);
                                                                        /*                                                                      
                                                                        console.log('opciones = ' + opciones);

                                                                        console.log('datos = ' + datos);
                                                                        
                                                                        console.log('data = ' + data); */

    } catch (error) {
      console.log(error);
    }
  };

  


  const defaultProps = {
    
    options: opciones,
    
    getOptionLabel: (opciones) => opciones.nombreComercial || " " ,   // se seleccionan las opciones desde la lista de productos descargados
    
  };


  useEffect(() => {
                                 const respu = getDatos();
 
                               console.log("respu = ", respu);
   
   }, []);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Datos del producto
      </Typography>
      <Grid container spacing={3}>
                                                                                      {/*  <Grid item xs={12} >
                                                                                         <TextField
                                                                                          required
                                                                                          id="nombreComercial"
                                                                                          name="nombreComercial"
                                                                                          label="Nombre comercial1"
                                                                                          fullWidth
                                                                                          //autoComplete="given-name"
                                                                                          variant="standard"
                                                                                          //placeholder= '{userContext.name}'
                                                                                          value={producto.nombreComercial}
                                                                                          //value={data.NombreComercial}
                                                                                          //onChange={e => setProducto ({...producto,nombre:(e.target.value)})}
                                                                                          onChange={handleChange}
                                                                                        />
                                                                                      </Grid> */}
      

        <Grid item xs={12} >


                                                                <Autocomplete
                                                              value={value}
                                                              onChange={(event, newValue, reason) => {
                                                                if (typeof newValue === 'string') {
                                                                  setProducto({ ...producto, nombreComercial: newValue, valuenombreComercial: newValue });

                                                                  setValue({
                                                                    //title: newValue,
                                                                    nombreComercial: newValue,    // se crea un nuevo valor para filtrar segun la entrada
                                                                  });
                                                                } else if (newValue && newValue.inputValue) {
                                                                  // Create a new value from the user input
                                                                  setProducto({ ...producto, nombreComercial: newValue.inputValue, valuenombreComercial: newValue.inputValue });

                                                                  setValue({
                                                                    //title: newValue.inputValue, 
                                                                    nombreComercial: newValue.inputValue, // cuando se escribe directamente, se agrega al filtro.
                                                                  });
                                                                } else if (reason === "clear") {         // cuando se cierra con x se borran todos los datos 
                                                                    setValue("");
                                                                    setProducto({ ...producto, 
                                                                      nombreComercial: "", 
                                                                      valuenombreComercial: "",
                                                                      registroIca: "",
                                                                      ingrediente: "",
                                                                      concentracion: "",
                                                                      periodoC: "",
                                                                      periodoR: "",
                                                                      productoTipo: "",
                                                                      valueProductoTipo: { title: "", id: 1 },
                                                                      productoTipo2: "",
                                                                      valueProductoTipo2: { title: "", id: 1 },
                                                                     });
                                                                  } else {
                                                                  setValue(newValue);
                                                                  setProducto({                             // al seleccionar, se devuelve un objeto completo con todos los atributos
                                                                    ...producto,
                                                                    nombreComercial: newValue.nombreComercial, // al seleccionar un producto se cambian los valores para mostrar en el formulario
                                                                    valuenombreComercial: newValue.nombreComercial,
                                                                    registroIca: newValue.numeroRegistroIca,
                                                                    ingrediente: newValue.ingrediente,
                                                                    concentracion: newValue.concentracion,
                                                                    periodoC: newValue.periodoC,
                                                                    periodoR: newValue.periodoR,
                                                                    productoTipo: newValue.ProductoTipo,
                                                                    valueProductoTipo: newValue.valueProductoTipo,
                                                                    productoTipo2: newValue.productoTipo2,
                                                                    valueProductoTipo2: newValue.valueProductoTipo2,
                                                                  }); // se cambia el valor y lo que se muestra
                                                                }
                                                              }}
                                                              filterOptions={(options, params) => {
                                                                const filtered = filter(options, params);

                                                                const { inputValue } = params;
                                                                // Suggest the creation of a new value
                                                                const isExisting = options.some((option) => inputValue === option.nombreComercial);
                                                                if (inputValue !== '' && !isExisting) {
                                                                  filtered.push({
                                                                    inputValue,
                                                                    //title: `Add "${inputValue}"`,
                                                                    nombreComercial: `Add "${inputValue}"`,   // se pone nombre comercial ya que es el parametro a filtrr para mostrar
                                                                  });
                                                                }

                                                                return filtered;
                                                              }}
                                                              selectOnFocus
                                                              clearOnBlur
                                                              handleHomeEndKeys
                                                              id="free-solo-with-text-demo"
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
                                                                return option.nombreComercial;
                                                              }}
                                                              //renderOption={(props, option) => <li {...props}>{option.title}</li>}
                                                              renderOption={(props, option) => <li {...props}>{option.nombreComercial}</li>}    // se renderizan las opciones 
                                                              sx={{ width: 300 }}
                                                              freeSolo
                                                              renderInput={(params) => (
                                                                <TextField {...params} label="Nombre Comercial" />
                                                              )}
                                                            /> 

        </Grid>





{
                                                                                              <Grid item xs={12} >
                                                                                                <div>{`value: ${
                                                                                                  producto.nombreComercial !== null
                                                                                                    ? `'${producto.nombreComercial}'`
                                                                                                    : "null"
                                                                                                }`}</div>
                                                                                                <div>{`inputValue: '${producto.valuenombreComercial}'`}</div>
                                                                                                <br />


                                                                                                <Autocomplete
                                                                                                  required
                                                                                                  {...defaultProps}
                                                                                                  inputValue={producto.valuenombreComercial}
                                                                                                  //inputValue={inputValue || producto.nombreComercial}
                                                                                                  value={producto.nombreComercial}
                                                                                                
                                                                                                  id="nombreComercial"
                                                                                                  name="nombreComercial"
                                                                                                  //options={data.map((option) => option.nombreComercial)}
                                                                                                  freeSolo
                                                                                                  //clearOnBlur
                                                                                                  handleHomeEndKeys
                                                                                                  selectOnFocus
                                                                                                  //clearOnEscape

                                                                                                  //disableClearable
                                                                                        /* 
                                                                                                                                                                                getOptionLabel={(option) => {
                                                                                                                                                                                  // Value selected with enter, right from the input
                                                                                                                                                                                  if (typeof option === "string") {
                                                                                                                                                                                    return option;
                                                                                                                                                                                  }

                                                                                                                                                                                  // Add "xxx" option created dynamically
                                                                                                                                                                                  if (option.inputValue) {
                                                                                                                                                                                    return option.inputValue;
                                                                                                                                                                                  }

                                                                                                                                                                                  //


                                                                                                                                                                                  // Regular option
                                                                                                                                                                                  return option.nombreComercial;
                                                                                                                                                                                }}

                                                                                        */


                                                                                                  renderInput={(params) => (
                                                                                                    <TextField
                                                                                                      {...params}
                                                                                                      label="Nombre Comercial"
                                                                                                      name="nombreComercial"
                                                                                                      autoFocus
                                                                                                      variant="standard"
                                                                                                                                  /* InputProps={{
                                                                                                                                    ...params.InputProps,
                                                                                                                                    type: 'search',
                                                                                                                                  }} */
                                                                                                     
                                                                                                    />
                                                                                                  )}
                                                                                                  onChange={(event, newValue, reason) => {
                                                                                                    //handleBlur();
                                                                                                    if (typeof newValue === "string") {
                                                                                                      setProducto({ ...producto, nombreComercial: newValue, valuenombreComercial:newValue });
                                                                                                    } else if (newValue === "null") {
                                                                                                      // Create a new value from the user input
                                                                                                      setProducto({ ...producto, nombreComercial: "", valuenombreComercial: ""});
                                                                                                    } else if (newValue && newValue.inputValue) {
                                                                                                      // Create a new value from the user input
                                                                                                      setProducto({
                                                                                                      ...producto, nombreComercial: newValue.inputValue, valuenombreComercial: newValue.inputValue 
                                                                                                      });
                                                                                                    } else {
                                                                                                      if (reason === "clear") {         // cuando se cierra con x se borran todos los datos 
                                                                                                        setProducto({ ...producto, 
                                                                                                          nombreComercial: "", 
                                                                                                          valuenombreComercial: "",
                                                                                                          registroIca: "",
                                                                                                          ingrediente: "",
                                                                                                          concentracion: "",
                                                                                                          periodoC: "",
                                                                                                          periodoR: "",
                                                                                                          productoTipo: "",
                                                                                                          valueProductoTipo: { title: "", id: 1 },
                                                                                                          productoTipo2: "",
                                                                                                          valueProductoTipo2: { title: "", id: 1 },
                                                                                                         });
                                                                                                      } else {
                                                                                                        //setValue(newValue);
                                                                                                        //const producto = opciones.filter()
                                                                                                        //console.log("opciones una =", opciones);
                                                                                                        //console.log("opciones una =", newValue);
                                                                                                        //console.log("opciones una =", opciones.find(product => product.nombreComercial === "ANTRASIN"));

                                                                                                        setProducto({                             // al seleccionar, se devuelve un objeto completo con todos los atributos
                                                                                                          ...producto,
                                                                                                          nombreComercial: newValue.nombreComercial, // al seleccionar un producto se cambian los valores para mostrar en el formulario
                                                                                                          valuenombreComercial: newValue.nombreComercial,
                                                                                                          registroIca: newValue.numeroRegistroIca,
                                                                                                          ingrediente: newValue.ingrediente,
                                                                                                          concentracion: newValue.concentracion,
                                                                                                          periodoC: newValue.periodoC,
                                                                                                          periodoR: newValue.periodoR,
                                                                                                          productoTipo: newValue.ProductoTipo,
                                                                                                          valueProductoTipo: newValue.valueProductoTipo,
                                                                                                          productoTipo2: newValue.productoTipo2,
                                                                                                          valueProductoTipo2: newValue.valueProductoTipo2,
                                                                                                        }); // se cambia el valor y lo que se muestra

                                                                                                        //setTimeout(() => {  handleBlur() }, 2000);
                                                                                                        setErrores({});
                                                                                                      }
                                                                                                    }
                                                                                                  }}
                                                                                                  //onBlur = {handleBlur}

                                                                                              

                                                                                                  onInputChange={(event, newInputValue) => {
                                                                                                    //handleBlur();
                                                                                                    //setInputValue (newInputValue)
                                                                                                             setProducto({
                                                                                                              ...producto,
                                                                                                              //valuenombreComercial: newInputValue,
                                                                                                              //nombreComercial: newInputValue,
                                                                                                            }); 
                                                                                                  }} // cambia el valor que se muestra al escribir
                                                                                                  //onInputChange = {handleInputChange}
                                                                                                />
                                                                                                {errores.nombreComercial && (
                                                                                                  <p style={styles}> {errores.nombreComercial} </p>
                                                                                                )}{" "}
                                                                                                {/* renderizado condicional paara mostrar los errores de validacion*/}

                                                                                              </Grid>

}




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


const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
]