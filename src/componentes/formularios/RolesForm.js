import * as React from "react";
//import { spacing } from '@mui/system';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
//import TextField from '@mui/material/TextField';
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
//import Link from '@mui/material/Link';            // se comenta esta linea y se importa el link de react
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import { useContext } from "react";
import { Footer } from "../pantallas/Footer";
import Axios from "axios";
import Swal from "sweetalert2";

const theme = createTheme();

export const RolesForm = () => {
  //se debe cambiar export default por export const SignUp = () =>
  const { usuario,  setErrores,  } = useContext(UserContext); // importo useContext para tener el valor de los datos del Usuario
  //const [datosPersonales, setDatosPersonales] = React.useState(false);    // para utilizar el chequeo para activar el boton de registrarse
  const [checked, setChecked] = React.useState(false); // para utilizar el chequeo para activar el boton de registrarse
  //const [checked, setChecked] = React.useState(false); // para utilizar el chequeo para activar el boton de registrarse
  //const [roles, setRoles] = React.useState();
  //const [setData] = useState([{NombreComercial :  'abafed'}]);
  //console.log (usuario);
  //const [errorRol, seterrorRol] = React.useState();

  //let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;    // valida el nombre
  //let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;   // valida correo.
  //let regexComments = /^.{1,255}$/;     // para contar la cantidad de caracteres de un cuadro de texto.

  const [state, setState] = React.useState({
    Productor: false,
    Administrador: false,
    Tecnico: false,
    Operario: false,
    Auditor: false,
    Implementador: false,
    Proveedor: false,
    Contable: false,
  });

  const handleChange2 = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const {
    Productor,
    Administrador,
    Contable,
    Tecnico,
    Auditor,
    Implementador,
    Operario,
  } = state;
  const errorRegistro =
    [
      Productor,
      Administrador,
      Contable,
      Tecnico,
      Auditor,
      Implementador,
      Operario,
    ].filter((v) => v).length === 0;
  //const roles = [Productor, Administrador, Contable, Tecnico, Auditor, Implementador, Operario].filter((v) => v);
  //console.log(roles);

  let roles = [];
  if (Productor === true) {
    roles.push("Productor");
    
  }
  if (Administrador === true) {
    roles.push("Administrador");
  }
  if (Operario === true) {
    roles.push("Operario");
  }
  if (Contable === true) {
    roles.push("Contable");
  }
  if (Tecnico === true) {
    roles.push("Tecnico");
  }
  if (Auditor === true) {
    roles.push("Auditor");
  }
  if (Implementador === true) {
    roles.push("Implementador");
  }

  console.log(roles);
  //setUsuario({...usuario, roles: roles})
  console.log ("usuario.roles = " , usuario.roles)

  const registrarse = async () => {
    const { nombre, apellido, correo, contrasena1 } = usuario;
    //console.log(nombre, apellido, correo,  contrasena1);

    try {
      const respuesta = await Axios.post(
        "http://localhost:4000/api/auth/singup",
        { fecha: new Date(), nombre, apellido, correo, contrasena1, roles }
      );

      const mensaje = respuesta.data.mensaje;
      //const {nombreUsuario, rolesUsuario } = respuesta.data.token;
      //setEstaRegistrado({...estaRegistrado, loguin: true,  nombreUsuario: nombreUsuario, rolesUsuario: rolesUsuario});

      //const token = respuesta.data.token
      //alert (mensaje)
      Swal.fire({
        title: mensaje,
        icon: "success",
        confirmButtonText: "Continuar",
      }).then((result) => {
        if (result.isConfirmed) {
          //window.location.reload();   // para iniciar nuevamente con otro producto del inventario.
          //{<SignIn />}
          window.location.replace("/ingresar");
        }
      });
    } catch (error) {
      //const mensaje = respuesta.data.mensaje

      console.log(error);
      Swal.fire({
        title: "No se pudo registrar el usuario. Intente nuevamente",
        icon: "error",
        confirmButtonText: "Aceptar",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload(); // para iniciar nuevamente con otro producto del inventario.
          //{<SignIn />}
          //window.location.replace("/ingresar")
        }
      });
    }
  };

  /*  
    const getData = async() => {
      try {
      const url = 'http://localhost:4000/api/usuario/';
      const resp = await fetch (url);
      const datos = await resp.json();
      setData(datos);
      //return datos;
    
      console.log (datos[0].correo);
    
        }
    
   catch (error) {
    console.log (error)
  }

} */

  let styles = {
    fontWeight: "bold",
    color: "#dc3545",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    /*                                                                                             const data = new FormData(event.currentTarget);
                                                                                              // eslint-disable-next-line no-console
                                                                                              console.log({
                                                                                                email: data.get('correo'),
                                                                                                password: data.get('contrasena1'),
                                                                                              }); */

    registrarse();

    /*  if (!usuario.nombre.trim()) {
      //setErrores (error.nombreComercial = "El nombre comercial es requerido");
      setErrores ({nombre : ('El nombre es requerido')}); 
    }else if (!regexName.test(usuario.nombre.trim()) ) {
      setErrores ({nombre : ('verifique el nombre')}); 
      
    }else if (!usuario.apellido.trim()) {
      setErrores ({apellido : ('El apellido  es requerido')}); 
    }else if (!usuario.correo.trim()) {
      setErrores ({correo : ('El correo es requerido')}); 
      
    }else if (!regexEmail.test (usuario.correo.trim())) {
      setErrores ({correo : ('Utilice un correo valido')});
    }else if (!usuario.contrasena1.trim()) {
      setErrores ({contrasena1 : ('La clave es requerida')}); 
      
    }else if (!usuario.contrasena2.trim()) {
      setErrores ({contrasena2 : ('Confirme la Contraseña')}); 
    
    }else if (usuario.contrasena2.trim() !== usuario.contrasena1.trim()) {
      setErrores ({contrasena2 : ('las claves no coinciden')}); 
    
    }else if (usuario.correo.trim() === datos.Correo) {
      setErrores ({contrasena2 : ('El usuario ya existe')}); 

    }else {
      setErrores({});
      console.log ('Guardando');
      guardar();
    }
  }; */
  };

  /*   const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setUsuario({
        ...usuario,
        [event.target.name] : event.target.value
    })
                                         } */

  const handleChek = (event) => {
    setChecked(event.target.checked);
    setErrores({ errorRol: checked }); // pasa el valor del check para activar el boton de registrar
    //setChecked(event.name.checked);
  };

  /*   useEffect(() => {

    getData()
  //const  respu = getData()
  //console.log ('respu = ', respu)
 
}, [] )

 */

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
            Seleccione Al menos un perfil de Usuario
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="Productor"
                      value="Productor"
                      checked={Productor}
                      color="primary"
                      onChange={handleChange2}
                    />
                  }
                  label="Productor - Dueño Cultivo."
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="Administrador"
                      value="Administrador"
                      checked={Administrador}
                      color="primary"
                      onChange={handleChange2}
                    />
                  }
                  label="Administrador de cultivo."
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="Operario"
                      value="Operario"
                      checked={Operario}
                      color="primary"
                      onChange={handleChange2}
                    />
                  }
                  label="Operario."
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="Tecnico"
                      value="Tecnico"
                      checked={Tecnico}
                      color="primary"
                      onChange={handleChange2}
                    />
                  }
                  label="Agrónomo - Asistente Técnico."
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="Auditor"
                      value="Auditor"
                      checked={Auditor}
                      color="primary"
                      onChange={handleChange2}
                    />
                  }
                  label="Auditor."
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="Implementador"
                      value="Implementador"
                      checked={Implementador}
                      color="primary"
                      onChange={handleChange2}
                    />
                  }
                  label="Implementador."
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="Contable"
                      value="Contable"
                      checked={Contable}
                      color="primary"
                      onChange={handleChange2}
                    />
                  }
                  label="Contador - auxliar contable."
                />
              </Grid>

              <Grid item xs={12}>
                {errorRegistro && (
                  <p style={styles}>
                    {" "}
                    {errorRegistro} Debe Seleccionar un perfil
                  </p>
                )}{" "}
                {/* renderizado condicional paara mostrar los errores de validacion*/}
              </Grid>
            </Grid>

            <Divider sx={{ mt: 5 }}>
              <Chip label="TRATAMIENTO DE DATOS" />
            </Divider>

            <Grid container spacing={2} sx={{ mt: 3 }}>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      disabled={errorRegistro}
                      value="TratamientoDatos"
                      checked={checked}
                      color="primary"
                      onChange={handleChek}
                    />
                  }
                  label="Acepto la politica de tratamiento de datos personales."
                />
                <Link color="inherit" to="/politicadatos">
                  Tratamiento datos personales
                </Link>
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={!checked || errorRegistro}
            >
              Registrarse
            </Button>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/ingresar" variant="body2">
                  Ya tiene una cuenta? Ingresar
                </Link>
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
