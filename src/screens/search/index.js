import React from 'react'
import { View, Text } from 'react-native'
import SearchScreen from './SearchScreen'
import { connect } from 'react-redux';
import { filterAndSearchProduct } from '../../redux/actions/shop';

const index = props => {
    return (
       <SearchScreen  {...props}/>
    )
}

const mapDispatchToProps =(dispatch) => {
    return {
        filterProduct: (data) => dispatch(filterAndSearchProduct(data))
    }

}

export default connect(undefined, mapDispatchToProps) (index)
