export const initialState = {
    basket:[] // carrito
}


export const actionTypes = {
    ADD_TO_BASKET: 'ADD_TO_BASKET',
    REMOVE_ITEM: 'REMOVE_ITEM',
    CLEAN_BASKET:'CLEAN_BASKET'
}

export const getBasketTotal = (basket) => {
    
    let acu = 0;
    basket?.forEach(function(elemento, indice, array) {
        acu += (elemento.precio * elemento.cantidad)
    })
    return acu;
    
}

export const modifyBasketCant = (basket, id , cant) => {

    basket?.forEach(function(prod, i, array) {
        if (prod.id === id){
            prod.cantidad = cant
        }
    })
}

export const generatePedido = (basket) => {
    var productos = [];
    basket?.forEach(function(elemento) {
                var aux = {};
                aux.idProducto = elemento.id;
                aux.cantidad = elemento.cantidad;
                productos.push(aux);
                console.log('AUX:',aux);
            }) 
}


export const getBasketCant = (basket) => {
    
    let acu = 0;
    basket?.forEach(function(elemento, indice, array) {
        acu += elemento.cantidad
    })
    return acu;
}

export const isInCart = (basket, id) => {
    console.log(basket);
    console.log(basket.length);
    if (basket !== undefined && basket !== null && basket.length > 0){
        for (let item of basket) {
            if (id === item.id) {
                return true;
            }
        }
    }
    else{
        return false;
    }
}


const reducer = (state,action) => {

    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket:[...state.basket, action.item],
            };
        case 'REMOVE_ITEM':
            return {
                ...state,
                basket: state.basket.filter((x) => x.id !== action.id)
            }
        case 'CLEAN_BASKET':
            return{
                ...state,
                basket: []
            }
        default: return state;
        
    }

    
}

export default reducer