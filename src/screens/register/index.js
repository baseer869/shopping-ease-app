import React from 'react'
import { View, Text } from 'react-native'
import RegisterScreen from './RegisterScreen';
import { connect } from 'react-redux';
import { registerActionHandler } from '../../redux/actions/user';

const index = (props) => {
    return (
       <RegisterScreen {...props} />
    )
}


const mapDispatchToProps = (dispatch)=>{
    return {
        register: (data) =>  dispatch(registerActionHandler(data))   //register action
    }
}

export default  connect(undefined, mapDispatchToProps)(index)
