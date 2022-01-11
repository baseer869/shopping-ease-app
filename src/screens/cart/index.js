import React, {useEffect} from 'react';
import CartHomeScreen from './CartHomeScreen'
import { connect } from 'react-redux';
import { clearCartAction, listCartActionHandler, removeFromCart } from '../../redux/actions/cart';
import { addToCart } from './../../redux/actions/cart';
import {View, Text, Image } from 'react-native';


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
       cartItems: transformCartItem,
       totalAmount: store.cart.totalAmount,
       subTotalCounter: store.cart.subTotalCounter
    }
}

const mapDispatchToProps = (dispatch) =>{
   return {
      clearCartAction: () => dispatch(clearCartAction()),
      addItemToCart: (product) => dispatch(addToCart(product)),
      removeFromCart :(product) => dispatch(removeFromCart(product)),
      listCart: (id)=> dispatch(listCartActionHandler(id)),
   }
}


export default connect(mapStateToProps, mapDispatchToProps) (index)
