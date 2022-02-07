import React from 'react'
import CheckOutScreen from './CheckOutScreen'
import { connect } from 'react-redux';
import { listCartActionHandler , updateUserProfileHandler, updateCartStatusHanlder } from '../../redux/actions/cart';
import { getUserInfoHandler, placeOrderHanlder,  } from './../../redux/actions/user';



const index = (props) => {
    return (
       <CheckOutScreen {...props} />
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

 function mapDispatchToProps(dispatch) {
    return{
       listCart: (id) => dispatch(listCartActionHandler(id)),
       updatedProile: (data) => dispatch(updateUserProfileHandler(data)),
       getUserInfo : (id) => dispatch(getUserInfoHandler(id)),
       placeOrder: (data)=> dispatch(placeOrderHanlder(data)), 
       updateCartStatus: (data) => dispatch(updateCartStatusHanlder(data))
    }

 }
 

export default connect(mapStateToProps, mapDispatchToProps)(index) 
