import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ProductDetailScreen from './ProductDetailScreen'
import { connect } from 'react-redux';
import { AddToCartActionHandler } from '../../redux/actions/cart';

const index = props => {
    return (
       <ProductDetailScreen {...props} />
    )
}

const mapDispatchToProps = (dispatch) =>{
    return {
      addItemToCart : (data) => dispatch(AddToCartActionHandler(data))
    }
}

export default connect(undefined, mapDispatchToProps) ( index)

