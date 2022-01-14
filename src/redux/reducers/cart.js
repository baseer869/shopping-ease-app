import {ADD_TO_CART, CLEAR_CART, SET_CART} from '../constant/index';
import CartItems from './../models/cart-items';
import {REMOVE_FROM_CART} from './../constant/index';

const initialState = {
  items: {},
  totalAmount: 0,
  subTotalCounter: 0,
  cart:[]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      console.log('cart called-->', action.payload)
      return {
        ...state,
        cart : [...state.cart, action.payload]
    }
    case ADD_TO_CART:
      console.log('add to cart', action.payload)
      
      
      let updatedOrNewCartItem;

      state.cart[0].map(  (item)=>{
        if(item.id == action.payload){
          // console.log('id in red-->',  item.id, action.payload )
          console.log('is set-->', {...item.product, quantity: quantity+1})
          return {...item, quantity: quantity+1};
        }
        console.log('item-->', item)
      } );
      
      if (state.cart[addedProduct.ProductId]) {
        updatedOrNewCartItem = new CartItems(
          state.cart[addedProduct.ProductId].quantity + 1,
          // price,
          // state.items[addedProduct.ProductId].sum + price,
          // state.subTotalCounter + 1,
        );
        console.log('cart update-->',  updatedCartItems);
      } else {
        updatedOrNewCartItem = new CartItems(1, price, price);
      }
      return {
        ...state,
        items: {...state.items, [addedProduct.id]: updatedOrNewCartItem},
        totalAmount: state.totalAmount + price,
        subTotalCounter: state.subTotalCounter + 1,
      };
    case CLEAR_CART:
      return {
        ...state,
        items: {},
        totalAmount: 0,
        subTotalCounter: 0,
      };
    case REMOVE_FROM_CART:
      const product = action.payload;
      const currentQuantity = state.items[product.id].quantity;
      let updatedCartItems;

      if (currentQuantity > 1) {
        const updatedCartItem = new CartItems(
          currentQuantity - 1,
          state.items[product.id].name,
          state.items[product.id].price,
          state.items[product.id].sum - product.price,
        );
        updatedCartItems = {...state.items, [product.id]: updatedCartItem};

        //  need to reduce it, not erase it
      } else {
        updatedCartItems = {...state.items};
        delete updatedCartItems[product.id];
      }
      return {
        ...state,
        items: updatedCartItems,
        totalAmount: state.totalAmount - product.price,
        subTotalCounter: state.subTotalCounter - 1,
      };

    default:
      return state;
  }
};
