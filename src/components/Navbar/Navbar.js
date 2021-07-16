
import React from 'react';
import useStyles from './styles';
import {AppBar, Toolbar, Typography, Button, IconButton, Badge} from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/descarga.png';

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} color='inherit'>
              <img className={classes.image} alt='Extrados.com' heigth='25px' src={logo}></img>
              Extrados
          </Typography>
          <div className={classes.grow}/>
          <div className={classes.button}>
            <IconButton aria-label='Mostrar items carrito' color='inherit'>
              <Badge badgeContent={2} color='secondary'>
                <ShoppingCart fontSize='large' color=''/>
              </Badge>
            </IconButton>
          </div>
         
          <Button color="inherit">Login</Button>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
