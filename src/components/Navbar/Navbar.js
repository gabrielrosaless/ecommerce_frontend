
import React, {useState, useEffect} from 'react';
import useStyles from './styles';
import {AppBar, Toolbar, Typography, Button, IconButton, Badge} from '@material-ui/core'
import { ShoppingCart, SupervisorAccount } from '@material-ui/icons';
import logo from '../../assets/descarga.png';
import { Link } from 'react-router-dom';
import {useStateValue} from '../../StateProvider';
// import jwt from 'jwt-decode';
// import useToken from '../../utils/useToken';

export default function ButtonAppBar() {
  const classes = useStyles();

  const [{basket}, dispatch] = useStateValue();

  //const { token, setToken } = useToken();
  // const [block, setBlock] = useState(true)
  // console.log('token:', token);
  // const isLoggedIn = () => {
        
  //   if (token){
  //       const user = jwt(token);
  //       setBlock(false);
  //   }
  //   else{
  //     setBlock(true);
  //   }    
  // }

  // useEffect(() => {
  //   isLoggedIn()
  // }, [token])


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
          {/* <Button color="inherit" disabled={block} className={classes.loginButton}>Logout</Button> */}

          
        </Toolbar>
      </AppBar>
    </div>
  );
}
