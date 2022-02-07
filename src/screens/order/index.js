import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PlaceOrderScreen from './PlaceOrderScreen';
import { connect } from 'react-redux';
import { getOrderHanlder } from '../../redux/actions/user';

const index = (props) => {
  return (
    <PlaceOrderScreen {...props} />
  );
};


const mapDispatchToProps = (dispatch) =>{
    return {
      getOrder: (data) => dispatch(getOrderHanlder(data))
    }
}

export default  connect( undefined ,mapDispatchToProps) (index);

