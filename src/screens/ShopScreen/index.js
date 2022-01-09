import React from 'react';
import ShopMapScreen from './ShopMapScreen';
import {connect} from 'react-redux';
import { listShopActionHandler } from '../../redux/actions/shop';

const index = props => {
  return <ShopMapScreen {...props} />;
};

const mapDispatchToProps = (dispatch) => {
  return {
    listShopByCity:  (data) => dispatch(listShopActionHandler(data)),

  };
};

export default connect(undefined, mapDispatchToProps)(index);
