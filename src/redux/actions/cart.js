import { ADD_TO_CART, CLEAR_CART,REMOVE_FROM_CART  } from '../constant/index';
import { AddToCart } from '../../../api/Methods';

export const addToCart = (payload) =>{
    return {
        type: ADD_TO_CART,
        payload: payload       
    
    }

}

export const removeFromCart = (payload) =>{
    return {
        type: REMOVE_FROM_CART,
        payload: payload       
    
    }

}


export const clearCartAction = () =>{
 return {
     type: CLEAR_CART,

 }
}


export const AddToCartActionHandler =   data => dispatch => {
    console.log('cart item in action-->', data)
    return new Promise(async function (resolve) {
      AddToCart(data)
        .then(response => {
          return resolve(response);
        })
        .catch(() => {
          return resolve(false);
        });
    });
  };