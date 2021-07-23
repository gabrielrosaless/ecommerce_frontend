export const initialState = {
    basket:[] // carrito
}


export const actionTypes = {
    ADD_TO_BASKET: 'ADD_TO_BASKET',
    REMOVE_ITEM: 'REMOVE_ITEM',
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


export const getBasketCant = (basket) => {
    
    let acu = 0;
    basket?.forEach(function(elemento, indice, array) {
        acu += elemento.cantidad
    })
    return acu;
    
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
        default: return state;
        
    }

    
}

export default reducer