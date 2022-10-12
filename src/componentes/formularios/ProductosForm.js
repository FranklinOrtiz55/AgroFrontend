import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
//import FormControlLabel from '@mui/material/FormControlLabel';
//import Checkbox from '@mui/material/Checkbox';
import Autocomplete from "@mui/material/Autocomplete";
import { UserContext } from "../UserContext";
import { useContext } from "react";
//import { validarFormulario } from './ProductoForm';

export const validarFormulario2 = (producto) => {
  let error = {};

  if (!producto.nombreComercial.trim()) {
    error.nombreComercial = "El nombre comercial es requerido";
  }

  if (!producto.registroIca.trim()) {
    error.registroIca = "El número de registro es requerido";
  }

  if (!producto.ingrediente.trim()) {
    error.ingrediente = "El Ingrediente Activo es requerido";
  }

  if (!producto.concentracion.trim()) {
    error.concentracion = "La concentracion es requerida";
  }

  if (!producto.periodoC.trim()) {
    error.periodoC = "el periodo de carencia es requerido";
  }

  if (!producto.periodoR.trim()) {
    error.periodoR = "el periodo de reingreso  es requerido";
  }

  if (!producto.productoTipo.trim()) {
    error.productoTipo = "el producto es requerido";
  }

  if (!producto.productoTipo2.trim()) {
    error.productoTipo2 = "el tipo de producto es requerido";
  }

  return error;
};

export default function ProductosForm() {
  //export const ProductosForm = () => {

  const { producto, errores } = useContext(UserContext); // se desestructura para obtener solo el producto

  console.log("producto en productos = ", producto);
  
  const { setProducto } = useContext(UserContext);

  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setProducto({
      ...producto,
      [event.target.name]: event.target.value,
    });
    //handleBlur();
  };

  /* const handleBlur = (event) => {
 
    setErrores(validarFormulario2(producto));
    } */

  let styles = {
    fontWeight: "bold",
    color: "#dc3545",
  };

  const defaultProps = {
    options: tipo,
    getOptionLabel: (option) => option.title,
  };

  const defaultProps2 = {
    options: tipo2,
    getOptionLabel: (option) => option.title,
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Datos del producto
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="nombreComercial"
            name="nombreComercial"
            label="Nombre comercial"
            fullWidth
            //autoComplete="given-name"
            variant="standard"
            value={producto.nombreComercial}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="registroIca"
            name="numeroRegistroIca"
            label="Registro ICA"
            fullWidth
            //autoComplete="family-name"
            variant="standard"
            value={producto.registroIca}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="ingrediente"
            name="ingrediente"
            label="Ingrediente Activo"
            fullWidth
            //autoComplete="shipping address-line1"
            variant="standard"
            value={producto.ingrediente}
            onChange={handleInputChange}
            // onBlur = {handleBlur}
          />
          {errores.ingrediente && <p style={styles}> {errores.ingrediente} </p>}{" "}
          {/* renderizado condicional paara mostrar los errores de validacion*/}
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="concentracion"
            name="concentracion"
            label="Concentracion"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            value={producto.concentracion}
            onChange={handleInputChange}
            // onBlur = {handleBlur}
          />
          {errores.concentracion && (
            <p style={styles}> {errores.concentracion} </p>
          )}{" "}
          {/* renderizado condicional paara mostrar los errores de validacion*/}
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="periodoC"
            name="periodoC"
            label="Periodo Carencia (dias)"
            type="number"
            fullWidth
            //autoComplete="shipping address-level2"
            variant="standard"
            value={producto.periodoC}
            onChange={handleInputChange}
            // onBlur = {handleBlur}
          />
          {errores.periodoC && <p style={styles}> {errores.periodoC} </p>}{" "}
          {/* renderizado condicional paara mostrar los errores de validacion*/}
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="periodoR"
            name="periodoR"
            label="Periodo Reingreso (horas)"
            type="number"
            fullWidth
            variant="standard"
            value={producto.periodoR}
            onChange={handleInputChange}
            // onBlur = {handleBlur}
          />
          {errores.periodoR && <p style={styles}> {errores.periodoR} </p>}{" "}
          {/* renderizado condicional paara mostrar los errores de validacion*/}
        </Grid>

        <Grid item xs={12} sm={6}>
          <Autocomplete
            //value={tipo[0]}
            value={producto.valueProductoTipo}
            //inputValue={producto.productoTipo}
            inputValue={producto.productoTipo}
            isOptionEqualToValue={(tipo, value) =>
              tipo.title === producto.productoTipo
            }
            // onInputChange={(event, newInputValue) => setProducto ({...producto,productoTipo:(newInputValue)})}

            {...defaultProps}
            id="producto"
            name="productoTipo"
            freeSolo
            clearOnEscape
            //disableClearable
            renderInput={(params) => (
              <TextField
                {...params}
                label="Producto"
                name="productoTipo"
                variant="standard"
              />
            )}
            onChange={(event, newValue) =>
              setProducto({ ...producto, valueProductoTipo: newValue })
            }
            onInputChange={(event, newInputValue) =>
              setProducto({ ...producto, productoTipo: newInputValue })
            }

            // onBlur = {handleBlur}
          />
          {errores.productoTipo && (
            <p style={styles}> {errores.productoTipo} </p>
          )}{" "}
          {/* renderizado condicional paara mostrar los errores de validacion*/}
        </Grid>

        {/* {errores.productoTipo && <p style = {styles}> {errores.productoTipo} </p> }      {/* renderizado condicional paara mostrar los errores de validacion*/}

        <Grid item xs={12} sm={6}>
          <Autocomplete
            inputValue={producto.productoTipo2}
            //value={producto.productoTipo2 || ''}

            //getOptionLabel={(tipo2)=>(tipo2.title ? tipo2.title:'Quimico')}

            value={producto.valueProductoTipo2}
            // getOptionLabel={(title) => producto.productoTipo2 || ''}

            //onInputChange={(event, newInputValue) => setProducto ({...producto,productoTipo2:(newInputValue)})}

            isOptionEqualToValue={(tipo2, value) =>
              tipo2.title === producto.productoTipo2
            }
            {...defaultProps2}
            id="tipo"
            name="productoTipo2"
            freeSolo
            clearOnEscape
            //disableClearable
            renderInput={(params) => (
              <TextField
                {...params}
                label="Tipo"
                name="productoTipo2"
                variant="standard"
              />
            )}
            //onChange={handleInputChange}

            onChange={(event, newValue) =>
              setProducto({ ...producto, valueProductoTipo2: newValue })
            }
            onInputChange={(event, newInputValue) =>
              setProducto({ ...producto, productoTipo2: newInputValue })
            }

            // onBlur = {handleBlur}
          />
          {errores.productoTipo2 && (
            <p style={styles}> {errores.productoTipo2} </p>
          )}{" "}
          {/* renderizado condicional paara mostrar los errores de validacion*/}
        </Grid>

        {/*  <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                        autoComplete="shipping country"
                        variant="standard"
                      />
                    </Grid> */}
        {/*    <Grid item xs={12}>
                        <FormControlLabel
                          control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                          label="Use this address for payment details"
                        />
                      </Grid> */}
      </Grid>
    </React.Fragment>
  );
}

const tipo = [
  { title: "", id: 1 },
  { title: "Insecticida", id: 2 },
  { title: "Fungicida", id: 3 },
  { title: "Coadyuvante", id: 4 },
  { title: "Fertilizante", id: 5 },
];

const tipo2 = [
  { title: "", id: 1 },
  { title: "Quimico", id: 2 },
  { title: "Biologico", id: 3 },
];
