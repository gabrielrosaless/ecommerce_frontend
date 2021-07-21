
import React from 'react';
import useStyles from './styles';
import {AppBar, Toolbar, Typography, Button, IconButton, Badge} from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/descarga.png';
import { Link } from 'react-router-dom';
import {useStateValue} from '../../StateProvider';

export default function ButtonAppBar() {
  const classes = useStyles();

  const [{basket}, dispatch] = useStateValue();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Link to='/' className={classes.title}>
            <Typography  variant="h6" className={classes.title} >
                <img className={classes.image} alt='Extrados.com' heigth='25px' src={logo}></img>
                Extrados
            </Typography>
          </Link>
          
          <div className={classes.grow}/>
          <div className={classes.button}>
            <IconButton aria-label='Mostrar items carrito' color='inherit'>
              <Badge badgeContent={basket.length} color='secondary'>
                <Link to='Cart' style={{color: '#FFF'}}>
                  <ShoppingCart fontSize='large' color=''/>
                </Link> 
              </Badge>
            </IconButton>
          </div>

          <Link to='Login' className={classes.loginButton}>
            <Button color="inherit" className={classes.loginButton}>Login</Button>

          </Link>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
