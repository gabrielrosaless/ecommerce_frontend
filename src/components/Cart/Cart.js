import React from 'react'
import { Container, Typography, Button, Grid} from '@material-ui/core'
import useStyles from './styles';


const Cart = ({ cart }) => {

    // const isEmpty = false;

    // const classes = useStyles();

    // const EmptyCart  = () => (
    //     <Typography variant='subtitle1'> No tienes items en el carrito. Comienza a agregarlos!</Typography>
    // );

    // const FilledCart = () => (
    //     <>
    //         <Grid container spacing={3}>
    //             {cart.map((item) => {
    //                 <Grid item xs={12} sm={4} key={item.Id}>
    //                     {/* <CartItem></CartItem> */}
    //                     <div>{item.nombre}</div>
    //                 </Grid>
    //             }) }
    //         </Grid>
    //         <div className={classes.cardDetails}>
    //             <Typography variant="h4">Subtotal:</Typography>
    //             <div>
    //                 <Button className={classes.emptyButton} size='large' type='button' variant='contained' color='secondary'> Empty cart </Button>
    //                 <Button className={classes.checkoutButton} size='large' type='button' variant='contained' color='primaty'> Checkout </Button>
    //             </div>
    //         </div>
    //     </>
    // );

    return (
        <div></div>
        // <Container>
        //     <div className={classes.toolbar} ></div>
        //     <Typography className={classes.title} variant='h3'> Tu carro de compras </Typography>
        //     { isEmpty ? <EmptyCart/> : <FilledCart/>}
        // </Container>
    )
}

export default Cart
