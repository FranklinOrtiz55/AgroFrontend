import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { UserContext } from "../UserContext";
import { useContext } from "react";

//import FormControlLabel from '@mui/material/FormControlLabel';
//import Checkbox from '@mui/material/Checkbox';
//import Autocomplete from '@mui/material/Autocomplete';

export default function ProductoGeneral1Form() {
  //const userContext =  useContext(UserContext);   // se etrae todo el contenido en el usercontext la variable
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
            //placeholder= '{userContext.name}'
            //value={userContext.producto.nombre}
            value={productoGeneral.nombreComercial}
            //onChange={e => setProducto ({...producto,nombre:(e.target.value)})}
            onChange={handleInputChange}
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
            //onChange={e => setProducto ({...producto,registro:(e.target.value)})}
            onChange={handleInputChange}
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
