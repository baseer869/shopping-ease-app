import {  createStore, combineReducers,applyMiddleware  } from 'redux';
import shopReducer  from '../redux/reducers/shop';
import  cartReducer  from '../redux/reducers/cart';
import productReducer from '../redux/reducers/product';
import { composeWithDevTools } from 'redux-devtools-extension';
import  thunk  from 'redux-thunk';


export  const configStore = ()=>{

const store = createStore(combineReducers({
    shops: shopReducer,
    cart: cartReducer,
    product: productReducer
}), 
applyMiddleware(thunk)
);

    return store 

};

