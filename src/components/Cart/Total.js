import React, {useContext,useState,  useEffect} from 'react';
import accounting from 'accounting';
import { Button, makeStyles } from '@material-ui/core';
import { getBasketTotal, getBasketCant } from '../../reducer';
import {useStateValue} from '../../StateProvider';
import useToken from '../../utils/useToken';
import {actionTypes} from '../../reducer';


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


function Total() {

    const classes = useStyles();

    const [{basket}, dispatch] = useStateValue();
    const { token, setToken } = useToken();
    const [compra, setCompra] = useState("");

    
    const clearBasket = () =>{
        dispatch({
          type:actionTypes.CLEAN_BASKET,
          item:{}}
        )
    }

    const variables = {
        productos:[]
    }

    useEffect(() => {
        
        if (basket.length > 0){
            
            basket?.forEach(function(elemento) {
                var aux = {};
                aux.idProducto = elemento.id;
                aux.cantidad = elemento.cantidad;
                variables.productos.push(aux);
            })  
        }
    }, [basket])
    
    const handleCheckOut = async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
                        'authorize': token || "" },
            body: JSON.stringify(variables)
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
        
        
        // .then(response => response.json())
            // .then(data => setCompra(data[0].id))
            // .catch(error => {
            //     console.log("Hubo un problema con la petición Fetch: " + error.message);
            // });
    }
    
    return (
        <div className={classes.root}>
            <h5>Total items: {getBasketCant(basket)}</h5>
            <h5>{accounting.formatMoney(getBasketTotal(basket),"$")}</h5>       
            <Button className={classes.button} variant='contained' color='secondary' onClick={() => handleCheckOut()} >Realizar compra</Button>
            <div>{compra}</div>
        </div>
    )
}

export default Total
