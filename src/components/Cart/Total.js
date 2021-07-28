import React, {useContext,useState,  useEffect} from 'react';
import accounting from 'accounting';
import { Button, makeStyles } from '@material-ui/core';
import { getBasketTotal, getBasketCant } from '../../reducer';
import {useStateValue} from '../../StateProvider';
import useToken from '../../utils/useToken';
import {actionTypes} from '../../reducer';
import jwt from 'jwt-decode';

const useStyles = makeStyles((theme) => ({
    root:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alingItem:'center',
        height:'20vh'
    },
    button:{
        marginTop:'2rem'
    }
}))


function Total({cantidadTotal}) {

    const classes = useStyles();

    const [{basket}, dispatch] = useStateValue();
    const {token, setToken } = useToken();
    const [compra, setCompra] = useState("");
    //const [precioTotal, setPrecioTotal] = useState(0);
    //const [cantidadTotal, setCantidadTotal] = useState(0);
    const [blockeado, setBlockeado] = useState(true);
    const [pedido, setPedido] = useState([])
    
    //setCantidadTotal(getBasketCant(basket));

    const isLoggedIn = () => {
        
        if (token && basket.length > 0){
            const user = jwt(token);

            if (user.rol === 2){
                setBlockeado(false);
            }
        }
        else{
            setBlockeado(true);
        } 
    }
    
    const clearBasket = () =>{
        dispatch({
          type:actionTypes.CLEAN_BASKET,
          item:{}}
        )
    }

    // const variables = {
    //     productos:[]
    // }

    useEffect(() => {
        
        if (basket.length > 0){
            var productos = [];
            basket?.forEach(function(elemento) {
                var aux = {};
                aux.idProducto = elemento.id;
                aux.cantidad = elemento.cantidad;
                productos.push(aux);
                console.log('AUX:',aux);
            }) 
            
            setPedido(productos);
        }
    }, [basket,cantidadTotal])

    useEffect(() => {
        isLoggedIn()
    }, [basket, token])


    //console.log('Pedido:', pedido);

    const handleCheckOut = async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
                        'authorize': token || "" },
            body: JSON.stringify({'productos': pedido})
        };

        await fetch(`http://localhost:4000/api/pedidos/create`, requestOptions)
            .then(async response => {
                const data = await response.json();
                console.log('data:', data);
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }

                setCompra("Su numero de compra es: " + data[0].id);
                clearBasket();
            })    
    }
    
    return (
        <div className={classes.root}>
            <h5>Total items: {getBasketCant(basket)}</h5>
            <h5>{accounting.formatMoney(getBasketTotal(basket),"$")}</h5>       
            <Button className={classes.button} variant='contained' disabled={blockeado} color='secondary' onClick={() => handleCheckOut()} >Realizar compra</Button>
            <div>{compra}</div>
        </div>
    )
}

export default Total
