import { StyleSheet, } from 'react-native'
import Theme from '../../theme/colors'


const styles = StyleSheet.create({
container:{
    height:110,
    justifyContent:'center',
    backgroundColor:Theme.primary
},
innerContainer:{
    flexDirection:'row',
    backgroundColor:Theme.primary
},
pickerContainer:{
    width:137,
    height:35,
    borderColor:'#0B155A',
    borderWidth:0.5,opacity:0.3,
    justifyContent:'center',
    
},
title:{
    fontStyle:'normal',
    fontWeight:'700',
    fontSize:16,
    lineHeight:16,
    textAlign:'center',
    color:'#fff',
    letterSpacing:0.5,
    width:200
},
input:{
    width:'100%',
    color:"#000",
    paddingLeft:10

}

})
export default styles