import React from 'react'
import { connect } from 'react-redux'
import { getUserInfoHandler } from '../../redux/actions/user'
import AccountInformationScreen from './AccountInformationScreen'


const index = (props) => {
    return (
        <AccountInformationScreen  {...props}/>
    )
}

const  mapDispatchToProps = (dispatch) =>{
    return {
        getUserInfo: (id)=> dispatch(getUserInfoHandler(id)) 
    }
}

export default connect(undefined, mapDispatchToProps) ( index)