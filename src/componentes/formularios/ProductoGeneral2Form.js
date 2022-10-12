import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
//import FormControlLabel from '@mui/material/FormControlLabel';
//import Checkbox from '@mui/material/Checkbox';
import Autocomplete from "@mui/material/Autocomplete";
import { UserContext } from "../UserContext";
import { useContext } from "react";

export default function ProductoGeneral2Form() {
  const { productoGeneral } = useContext(UserContext); // se desestructura para obtener solo el producto

  console.log(productoGeneral);

  const { setProductoGeneral } = useContext(UserContext);

  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setProductoGeneral({
      ...productoGeneral,
      [event.target.name]: event.target.value,
    });
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
        Datos del producto General
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
            value={productoGeneral.nombreComercial}
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
            value={productoGeneral.numeroRegistroIca}
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
            value={productoGeneral.ingrediente}
            onChange={handleInputChange}
          />
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
            value={productoGeneral.concentracion}
            onChange={handleInputChange}
          />
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
            value={productoGeneral.periodoC}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="periodoR"
            name="periodoR"
            label="Periodo Reingreso (horas)"
            type="number"
            fullWidth
            variant="standard"
            value={productoGeneral.periodoR}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Autocomplete
            //value={tipo[0]}
            value={productoGeneral.valueProductoTipo}
            //inputValue={producto.productoTipo}
            inputValue={productoGeneral.productoTipo}
            isOptionEqualToValue={(tipo, value) =>
              tipo.title === productoGeneral.productoTipo
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
              setProductoGeneral({
                ...productoGeneral,
                valueProductoTipo: newValue,
              })
            }
            onInputChange={(event, newInputValue) =>
              setProductoGeneral({
                ...productoGeneral,
                productoTipo: newInputValue,
              })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Autocomplete
            inputValue={productoGeneral.productoTipo2}
            //value={producto.productoTipo2 || ''}

            //getOptionLabel={(tipo2)=>(tipo2.title ? tipo2.title:'Quimico')}

            value={productoGeneral.valueProductoTipo2}
            // getOptionLabel={(title) => producto.productoTipo2 || ''}

            //onInputChange={(event, newInputValue) => setProducto ({...producto,productoTipo2:(newInputValue)})}

            isOptionEqualToValue={(tipo2, value) =>
              tipo2.title === productoGeneral.productoTipo2
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
              setProductoGeneral({
                ...productoGeneral,
                valueProductoTipo2: newValue,
              })
            }
            onInputChange={(event, newInputValue) =>
              setProductoGeneral({
                ...productoGeneral,
                productoTipo2: newInputValue,
              })
            }
          />
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
  { title: "Acaricida", id: 6 },
  { title: "Fungicida", id: 3 },
  { title: "Coadyuvante", id: 4 },
  { title: "Fertilizante", id: 5 },
];

const tipo2 = [
  { title: "", id: 1 },
  { title: "Quimico", id: 2 },
  { title: "Biologico", id: 3 },
];
