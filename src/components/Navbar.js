
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../assets/descarga.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color:'textPrimary',
  },
  appBar:{
        boxShadow: 'none',
      },
  image:{
      marginRight:'10px',
      marginTop:'10px',
      height:'2rem'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
            
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <img className={classes.image} src={logo}></img>
            Extrados
          </Typography>
          <IconButton aria-label='Mostrar items carrito' color='inherit'>
            <ShoppingCart fontSize='large' color=''/>
          </IconButton>
          <Button color="inherit">Login</Button>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
