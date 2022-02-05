import {ADD_TO_CART, CLEAR_CART, SET_CART} from '../constant/index';
import CartItems from './../models/cart-items';
import {REMOVE_FROM_CART} from './../constant/index';

const initialState = {
  items: {},
  totalAmount: 0,
  subTotalCounter: 0,
  cart: [],
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case ADD_TO_CART:
      let item = state.cart[0].find(item => item.id === action.payload);
      console.log('id found--->', item);
      if (item) {
        console.log('cart id-->', item.id );
        console.log('payload cart  id-->', action.payload );
        // {...item, quantity: item.quantity + 1}
        return {
          ...state,
          cart: state.cart[0].map(item =>
            item.id === action.payload
              ?  {...item, quantity:  console.log('qunatity--->', item.quantity + 1)}
              : item,
          ),
        };
      }
      // return {
      //   ...state,
      //   cart: [...state.cart, action.payload],
      //   // totalPrice: state.totalPrice + payload.price,
      // };

    // if (state.cart[addedProduct.ProductId]) {
    //   updatedOrNewCartItem = new CartItems(
    //     state.cart[addedProduct.ProductId].quantity + 1,
    //     // price,
    //     // state.items[addedProduct.ProductId].sum + price,
    //     // state.subTotalCounter + 1,
    //   );
    //   console.log('cart update-->',  updatedCartItems);
    // } else {
    //   updatedOrNewCartItem = new CartItems(1, price, price);
    // }
    // return {
    //   ...state,
    //   items: {...state.items, [addedProduct.id]: updatedOrNewCartItem},
    //   totalAmount: state.totalAmount + price,
    //   subTotalCounter: state.subTotalCounter + 1,
    // };
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
