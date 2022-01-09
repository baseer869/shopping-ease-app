import React from 'react'
import LoginScreen from './LoginScreen';
import { connect } from 'react-redux';
import { loginActionHandler } from './../../redux/actions/user';

const index = (props) => {
    return (
       <LoginScreen {...props}/>
    )
}


const mapDispatchToProps = (dispatch)=>{
    return{
          login: (data)=> dispatch(loginActionHandler(data))
    }
}

export default  connect(undefined, mapDispatchToProps) (index)
