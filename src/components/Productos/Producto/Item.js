import React , {useState} from 'react';
import {Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Typography} from '@material-ui/core';
import accounting from 'accounting';
import AddShoppingCart  from '@material-ui/icons/AddShoppingCart';
import { useHistory } from "react-router-dom";
import useStyles from './styles';
import {ItemCount} from '../../index';
import {actionTypes} from '../../../reducer';
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

  //const [cant, setCant] = useState(1)

  // const increaseCant = () => {
  //     const count = cantidad

  //     // if (count >= stockItem) return;
  //     if (count >= item.stock) return;

  //     setCantidad(count+1);
  // }
  
  // const decreaseCant = () => {
  //     const count = cantidad

  //     if (count <= 1) return;

  //     setCantidad(count-1);    
  // }
  
  const [cant, setCant] = useState(1);

  // const handleChange = (valor) => {
  //   setCant(valor);
  // }

  console.log(cant);
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
        image="https://showsport.vteximg.com.br/arquivos/ids/693220-1000-1000/NIK-BQ7197008-20-1-.jpg?v=637200652669270000"
        title="Nike air1"
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="body2" color="textSecondary" component="p">
            Descripcion: {item.descripcion} 
          </Typography>
        </div>
      </CardContent>
      <CardActions className={classes.cardActions}>
        {/* <ItemCount decreaseCant={decreaseCant} increaseCant={increaseCant} cantidad={cantidad}></ItemCount> */}
        {/* <ItemCount  stockItem={item.stock} onChange={handleChange} cant={cant}></ItemCount> */}
        <ItemCount  stockItem={item.stock} setCantidad={setCant} cantidad={cant}></ItemCount>
        <IconButton aria-label="Agregar al carrito">
          <AddShoppingCart onClick={addToBasket}/>
        </IconButton>
        
      </CardActions>
    </Card>
  );
}
