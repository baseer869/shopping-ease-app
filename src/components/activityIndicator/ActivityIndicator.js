import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

const Loading = ({animating}) => {
    return (
        <ActivityIndicator animating={animating} size={'small'} color={'rgb(11,21,90)'} />
    )
}

export default Loading
