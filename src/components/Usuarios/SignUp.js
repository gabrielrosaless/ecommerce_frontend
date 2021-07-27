import React, {useState} from 'react';
import useStyles from './styles';
import {Container, Typography, Avatar, Button, CssBaseline, TextField} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Alert } from '@material-ui/lab';
import { Snackbar } from '@material-ui/core';

function SignUp() {
    const classes = useStyles();

    const [usuario, setUsuario] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [openError, setOpenError] = useState(false);
    const [openExito, setOpenExito] = useState(false);


    const onUsuarioChange = (event) => {
        setUsuario(event.currentTarget.value);
    }

    const onContraseñaChange = (event) => {
        setContraseña(event.currentTarget.value);
    }

    async function registerUser(credentials) {
        return fetch('http://localhost:4000/api/usuarios/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
        })
        .then(data => data.json())
    }

    const handleSubmit = async () => {
        const response = await registerUser({
           usuario,
           contraseña
        });
        
        handleResponse(response);
    }

    const handleResponse = (response) => {

        if (response.success){
            setMensaje("Usted se ha registrado correctamente.");
            openSnackBarExito();
        }else{
            setMensaje(response.errMessage);
            openSnackBarError();
        }
    }

    const openSnackBarExito = () => {
        setOpenExito(true);
    }

    const closeSnackBarExito = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenExito(false);
    }

    const openSnackBarError = () => {
        setOpenError(true);
    }

    const closeSnackBarError = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenError(false);
    }
    
    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign Up
            </Typography>
            <form className={classes.form} noValidate>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="usuario"
                label="Usuario"
                name="usuario"
                autoFocus
                onChange={onUsuarioChange} value={usuario}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="contraseña"
                label="Contraseña"
                type="password"
                id="contraseña"      
                onChange={onContraseñaChange} value={contraseña}
            />
            <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleSubmit}
            >
                Sign Up
            </Button>
            </form>
        </div>
        <Snackbar onClose={closeSnackBarError} open={openError} autoHideDuration={3000}>
          <Alert onClose={closeSnackBarError} severity="error">{mensaje}</Alert>
        </Snackbar>
        <Snackbar onClose={closeSnackBarExito} open={openExito} autoHideDuration={3000}>
          <Alert onClose={closeSnackBarExito} severity="success">{mensaje}</Alert>
        </Snackbar>
        </Container>
    )
}

export default SignUp
