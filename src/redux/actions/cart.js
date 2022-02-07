import { ADD_TO_CART, CLEAR_CART,REMOVE_FROM_CART,  SET_CART} from '../constant/index';
import { AddToCart, listCart, RemoveItemCart, updateUserProfile, updateCartStatus } from '../../../api/Methods';


export const setCart = (payload) =>{
  return {
      type: SET_CART ,
      payload: payload       
  }

}

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

  
  
export const listCartActionHandler =   data => dispatch => {
  return new Promise(async function (resolve) {
    listCart(data)
      .then(response => {
        dispatch(setCart(response?.data.result));
        return resolve(response);
      })
      .catch(() => {
        return resolve(false);
      });
  });
};


export const RemoveCartActionHandler =   data => dispatch => {
  return new Promise(async function (resolve) {
    RemoveItemCart(data)
      .then(response => {
        return resolve(response?.data);
      })
      .catch(() => {
        return resolve(false);
      });
  });
};


export const updateUserProfileHandler =   data => dispatch => {
  return new Promise(async function (resolve) {
    updateUserProfile(data)
      .then(response => {
        return resolve(response);
      })
      .catch(() => {
        return resolve(false);
      });
  });
};




export const updateCartStatusHanlder =   data => dispatch => {
  return new Promise(async function (resolve) {
    updateCartStatus(data)
      .then(response => {
        return resolve(response);
      })
      .catch(() => {
        return resolve(false);
      });
  });
};