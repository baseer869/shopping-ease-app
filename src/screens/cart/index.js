import React, {useEffect} from 'react';
import CartHomeScreen from './CartHomeScreen'
import { connect } from 'react-redux';
import { clearCartAction, listCartActionHandler, removeFromCart, AddToCartActionHandler, RemoveCartActionHandler } from '../../redux/actions/cart';

const index = (props) => {
    return (
       <CartHomeScreen {...props}/>
    )
}


const mapStateToProps =(store) =>{
   const transformCartItem = []
for (let key in store.cart.items ) {
   transformCartItem.push({
      id: key,
      price: store.cart.items[key].price,
      name: store.cart.items[key].name,
      quantity: store.cart.items[key].quantity,
      sum : store.cart.items[key].sum

   })
}
    return {
      //  cartListItem: store.cart.cart,
       cartItems: store.cart.cart[0],
      //  totalAmount: store.cart.totalAmount,
      //  subTotalCounter: store.cart.subTotalCounter
    }
}

const mapDispatchToProps = (dispatch) =>{
   return {
      clearCartAction: () => dispatch(clearCartAction()),
      addItemToCart : (data) => dispatch(AddToCartActionHandler(data)),
      removeFromCart :(product) => dispatch(removeFromCart(product)),
      listCart: (id)=> dispatch(listCartActionHandler(id)),
      removeItemFromCart: (data)=> dispatch(RemoveCartActionHandler(data)),

   }
}


export default connect(mapStateToProps, mapDispatchToProps) (index)


// set list in redux 
// if quantity updated then  on response call redux store with updated array; 
 
