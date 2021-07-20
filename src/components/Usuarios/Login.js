import React, {useState} from 'react';
import {Container, Typography, Avatar, Button, CssBaseline, TextField, Link, Grid, Box} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import { Alert } from '@material-ui/lab';
import { Snackbar } from '@material-ui/core';
import { useHistory } from "react-router-dom";



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

async function loginUser(credentials) {
    return fetch('http://localhost:4000/api/usuarios/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

export default function Login() {
    let history = useHistory();
  
    const classes = useStyles();
    
    const [usuario, setUsuario] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [open, setOpen] = useState(false);
    const [mensaje, setMensaje] = useState("");

    const handleAlert = () => {
      setOpen(true);
    };

    const redirectList = () => {
      history.push('/')
    }

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    const handleSubmit = async e => {
        // e.preventDefault();
        const token = await loginUser({
           usuario,
           contraseña
        });
        setToken(token);

        validateToken(token)
      }

    const validateToken = (token) => {
        if (token.success === true){
          redirectList();
        }
        else{
            if (token.success === false && token.error.statusCode === 400){
                setMensaje(token.errMessage)
                handleAlert()
            }
            else if(token.success === false && token.error.statusCode === 401){
                setMensaje(token.errMessage)
                handleAlert()
            }
            
        }
    }
    
    return (
      
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Login
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
                onChange={e => setUsuario(e.target.value)}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="contraseña"
                label="Contraseña"
                type="contraseña"
                id="contraseña"      
                onChange={e => setContraseña(e.target.value)}
            />
            <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleSubmit}
            >
                Login
            </Button>
            <Grid container>
                <Grid item xs>
                <Link href="#" variant="body2">
                    Forgot password?
                </Link>
                </Grid>
                <Grid item>
                <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                </Link>
                </Grid>
            </Grid>
            </form>
        </div>
        <Box mt={8}>
            <Copyright />
        </Box>

        <Snackbar onClose={handleClose} open={open} autoHideDuration={3000}>
          <Alert onClose={handleClose} severity="error">{mensaje}</Alert>
        </Snackbar>
        </Container>
    );
}

// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
//   }