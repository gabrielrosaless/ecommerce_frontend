import React , {useState, useEffect} from 'react';
import {Card, CardHeader, CardMedia, CardActions, IconButton, Typography} from '@material-ui/core';
import accounting from 'accounting';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './styles';
import {ItemCount} from '../index';
import {actionTypes, getBasketCant, getBasketTotal, modifyBasketCant} from '../../reducer';
import {useStateValue} from '../../StateProvider';



export default function ItemCartContainer({item:{id,nombre,imagen,precio,stock,descripcion,cantidad}, setCantidadTotal}) {
  const classes = useStyles();

  const [{basket}, dispatch] = useStateValue();


  const removeFromBasket = () => dispatch({
      type:actionTypes.REMOVE_ITEM,
      id: id, //controlar esto
  })

  const [cant, setCant] = useState(cantidad);

  useEffect(() => {
    modifyBasketCant(basket,id,cant);
    const x = getBasketCant(basket);
    setCantidadTotal(x);
  }, [cant])

  

  return (

    <Card className={classes.root2}>
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
        title={nombre}
        subheader=""
      />
      <CardMedia
        className={classes.media}
        image={imagen}
        title="Campera phoenix"
      />
      <CardActions disableSpacing className={classes.cardActions}>
        {/* <ItemCount stockItem={stock} onChange={handleChange}></ItemCount> */}
        <ItemCount stockItem={stock} setCantidad={setCant} cantidad={cant}></ItemCount>
        <IconButton>
            <DeleteIcon onClick={removeFromBasket} />
        </IconButton>    
      </CardActions>
    </Card>
  );
}

