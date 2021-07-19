import React, { useEffect, useState } from 'react';
import {Card,CardHeader,CardMedia, CardContent,IconButton, CardActions, Typography} from '@material-ui/core';
import accounting from 'accounting';
import useStyles from './styles';
import { useParams } from "react-router-dom";
import { AddShoppingCart } from '@material-ui/icons';

export default function ItemDetail() {
  const classes = useStyles();
  
  const [cart, setCart] = useState({})

  const { id } = useParams();
  
  const [item, setItems] = useState({});

  useEffect(() =>{
    fetch(`http://localhost:4000/api/productos/item/${id}`)
        .then(res => res.json())
        .then(data => setItems(data)); 
    },[])

  
  const handleAddToCart = () => {
      setCart(item[0]);
    }


  let precio = 0;
  
  if (item[0] !== undefined){
    precio = item[0].precio
    return (
      <Card className={classes.root}>
        <CardHeader
          action={
            <Typography 
              className={classes.action}
              variant='h5'
              color='textSecondary'
            >
              {accounting.formatMoney(precio,'$')}
            </Typography>
          }
          title={item[0].nombre}
          subheader={<Typography className={classes.action} variant='h5' color='textSecondary'> Stock: {item[0].stock} </Typography>}
         
        />
        <CardMedia
          className={classes.media}
          image="https://showsport.vteximg.com.br/arquivos/ids/693220-1000-1000/NIK-BQ7197008-20-1-.jpg?v=637200652669270000"
          title="Nike air1"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Descripcion: {item[0].descripcion}
          </Typography>
        </CardContent>
        <CardActions disableSpacing> 
          <IconButton aria-label="Add to Cart" onClick={() => handleAddToCart()}>
            <AddShoppingCart />
          </IconButton>       
        </CardActions>
      </Card>
    );
  }

  
  return (
    <div>Cargando..</div>
  )
  
}
