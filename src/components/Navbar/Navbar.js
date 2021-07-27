
import React, {useEffect} from 'react';
import useStyles from './styles';
import {AppBar, Toolbar, Typography, Button, IconButton, Badge} from '@material-ui/core'
import { ShoppingCart, SupervisorAccount } from '@material-ui/icons';
import logo from '../../assets/descarga.png';
import { Link } from 'react-router-dom';
import {useStateValue} from '../../StateProvider';
import jwt from 'jwt-decode';
import useToken from '../../utils/useToken';

export default function ButtonAppBar({token}) {
  const classes = useStyles();

  const [{basket}, dispatch] = useStateValue();


  // const validateUser = () => {
  //   const user = jwt(token);
  //   if (user.rol === 1){
  //     return true;
  //   }
  //   return false;
  // }
  
  /*--------------------------------------*/
  // // const { token, setToken } = useToken();
  // const Visible = ({ roles, children }) => {
    
  //   if (token){
  //     const user = jwt(token);
  //     const rolesMatch = roles && user.rol === roles;
  //     return Boolean(rolesMatch) && children;
  //   }
  //   return false;
  // };

  // useEffect(() => {
    
  // }, [token])
 /*--------------------------------------*/
  
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
            {/* <Visible rol={1}> */}
              {/* <IconButton aria-label='Administrador' color='inherit'>
                <Link to='admin-items' style={{color: '#FFF'}}>
                    <SupervisorAccount fontSize='large'/>
                </Link>
              </IconButton> */}
            {/* </Visible> */}
            <Link to='Cart' style={{color: '#FFF'}}>
              <IconButton aria-label='Mostrar items carrito' color='inherit'>
                <Badge badgeContent={basket.length} color='secondary'>
                  
                    <ShoppingCart fontSize='large'/>
                </Badge>
              </IconButton>
            </Link> 
          </div>

          <Link to='/Login' className={classes.loginButton}>
            <Button color="inherit" className={classes.loginButton}>Login</Button>
          </Link>

          
        </Toolbar>
      </AppBar>
    </div>
  );
}
