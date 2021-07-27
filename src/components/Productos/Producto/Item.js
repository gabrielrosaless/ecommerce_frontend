import React , {useState} from 'react';
import {Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Typography} from '@material-ui/core';
import accounting from 'accounting';
import AddShoppingCart  from '@material-ui/icons/AddShoppingCart';
import { useHistory } from "react-router-dom";
import useStyles from './styles';
import {ItemCount} from '../../index';
import {actionTypes, isInCart} from '../../../reducer';
import {useStateValue} from '../../../StateProvider';

export default function Item({item}) {
  const classes = useStyles();


  const history = useHistory();
  
  const viewItemDetail = () => {
    let path = `item/${item.Id}`; 
    history.push(path);
  }
  
  const precio = item.precio

  const [{basket}, dispatch] = useStateValue();


  const addToBasket = () =>{
    var bool = isInCart(basket, item.Id);
    console.log(bool);
    if (bool) {
      console.log("Ya existe en el carrito");
      return;
    }

    dispatch({
      type:actionTypes.ADD_TO_BASKET,
      item:{
        id:item.Id,
        nombre:item.nombre,
        marca:item.marca,
        precio:item.precio,
        stock:item.stock,
        imagen:item.imagen,
        descripcion:item.descripcion,
        cantidad:cant
      }
    })
  }


  const [cant, setCant] = useState(1);


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
        title={item.nombre}
        subheader="En stock (provisorio)"
      />
      <CardMedia onClick={viewItemDetail}
        className={classes.media}
        image={item.imagen}
        title="Nike air1"
      />
      {/* <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="body2" color="textSecondary" component="p">
            Descripcion: {item.descripcion} 
          </Typography>
        </div>
      </CardContent> */}
      <CardActions className={classes.cardActions}>
        <ItemCount  stockItem={item.stock} setCantidad={setCant} cantidad={cant}></ItemCount>
        <IconButton aria-label="Agregar al carrito" onClick={addToBasket}>
          <AddShoppingCart/>
        </IconButton>
        
      </CardActions>
    </Card>
  );
}
