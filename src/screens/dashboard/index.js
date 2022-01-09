import React from 'react'
import DashBoard from './DashBoard';
import { connect } from 'react-redux';
import { listCategoryActionHandler, listProductActionHandler,  listAllProductActionHandler} from '../../redux/actions/shop';


const index = (props) => {
    return (
       <DashBoard  {...props}/>
    )
}

export const mapDispatchToProps = (dispatch) =>{
    return {
        listCategory : (id) => dispatch(listCategoryActionHandler(id)),
        listProduct : (data) => dispatch(listProductActionHandler(data)),
        listAllProduct : (data) => dispatch(listAllProductActionHandler(data)),
        
    }
}

export default connect (undefined, mapDispatchToProps)(index)

