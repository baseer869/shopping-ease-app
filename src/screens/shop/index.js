import React from 'react'
import ShopListScreen from './ShopListScreen';
import {connect} from 'react-redux';
import { listShopActionHandler,listShopHandler2 } from '../../redux/actions/shop';

const index = (props) => {
    return (
        <ShopListScreen {...props} />
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
      listMarket:  (data) => dispatch(listShopActionHandler(data)),
      listShop:  (id) => dispatch(listShopHandler2(id)),
    };
  };
  
  export default connect(undefined, mapDispatchToProps)(index);
  

