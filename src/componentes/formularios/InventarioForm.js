import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
//import FormControlLabel from '@mui/material/FormControlLabel';
//import Checkbox from '@mui/material/Checkbox';
//import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
//import LocalizationProvider from "@mui/lab/LocalizationProvider";
//import DatePicker from "@mui/lab/DatePicker";
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from "@mui/x-date-pickers"


import Autocomplete from "@mui/material/Autocomplete";
import { UserContext } from "../UserContext";
import { useContext } from "react";

export default function InventarioForm() {
  const { producto, errores } = useContext(UserContext); // se desestructura para obtener solo el producto

  console.log(producto);

  const { setProducto } = useContext(UserContext);

  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setProducto({
      ...producto,
      [event.target.name]: event.target.value,
    });
  };

  let styles = {
    fontWeight: "bold",
    color: "#dc3545",
  };

  //const [value, setValue] = React.useState(Date.now);
  //const [value2, setValue2] = React.useState(null);

  const defaultProps = {
    options: unidad,
    getOptionLabel: (option) => option.title,
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Datos del Ingreso
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Fecha Ingreso"
              //value={value}
              value={producto.fechaIngreso}
              /*  onChange={(newValue) => {
              setValue(newValue);
            }} */

              onChange={(newValue) =>
                setProducto({ ...producto, fechaIngreso: newValue })
              }
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>

        <Grid item xs={12} md={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Fecha Vencimiento"
              //name="fechaVence"
              //value={value2}
              value={producto.fechaVence}
              /* onChange={(newValue) => {
              setValue2(newValue);
            }} */

              //onChange={handleInputChange}
              onChange={(newValue) =>
                setProducto({ ...producto, fechaVence: newValue })
              }
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            required
            id="lote"
            name="lote"
            label="Numero Lote"
            fullWidth
            //autoComplete="shipping address-level2"
            variant="standard"
            value={producto.lote}
            onChange={handleInputChange}
          />
          {errores.lote && <p style={styles}> {errores.lote} </p>}{" "}
          {/* renderizado condicional paara mostrar los errores de validacion*/}
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cantidad"
            name="cantidad"
            label="Cantidad"
            type="number"
            fullWidth
            //autoComplete="shipping address-level2"
            variant="standard"
            value={producto.cantidad}
            onChange={handleInputChange}
          />
          {errores.cantidad && <p style={styles}> {errores.cantidad} </p>}{" "}
          {/* renderizado condicional paara mostrar los errores de validacion*/}
        </Grid>

        <Grid item xs={12} md={6}>
          <Autocomplete
            value={producto.valueProductoUnidad}
            inputValue={producto.productoUnidad}
            isOptionEqualToValue={(unidad, value) =>
              unidad.title === producto.productoUnidad
            }
            // required
            {...defaultProps}
            id="unidad"
            name="productoUnidad"
            clearOnEscape
            renderInput={(params) => (
              <TextField
                {...params}
                label="Unidad de Medida"
                name="productoUnidad"
                variant="standard"
              />
            )}
            onChange={(event, newValue) =>
              setProducto({ ...producto, valueProductoUnidad: newValue })
            }
            onInputChange={(event, newInputValue) =>
              setProducto({ ...producto, productoUnidad: newInputValue })
            }
          />
          {errores.productoUnidad && (
            <p style={styles}> {errores.productoUnidad} </p>
          )}{" "}
          {/* renderizado condicional paara mostrar los errores de validacion*/}
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            required
            id="costo"
            name="costo"
            label="Costo"
            type="number"
            fullWidth
            //autoComplete="shipping address-level2"
            variant="standard"
            value={producto.costo}
            onChange={handleInputChange}
          />
          {errores.costo && <p style={styles}> {errores.costo} </p>}{" "}
          {/* renderizado condicional paara mostrar los errores de validacion*/}
        </Grid>

        <Grid item xs={12} md={12}>
          <TextField
            required
            id="factura"
            name="factura"
            label="Numero Factura"
            fullWidth
            //autoComplete="shipping address-level2"
            variant="standard"
            value={producto.factura}
            onChange={handleInputChange}
          />
          {errores.factura && <p style={styles}> {errores.factura} </p>}{" "}
          {/* renderizado condicional paara mostrar los errores de validacion*/}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

const unidad = [
  { title: " ", id: " " },
  { title: "Gramos", id: "gr" },
  { title: "Kilos", id: "kg" },
  { title: "Centimetros Cubicos", id: "cc" },
  { title: "Litros", id: "L" },
];
