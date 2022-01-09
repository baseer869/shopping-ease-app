import { StyleSheet, Dimensions } from "react-native";
let deviceWidth = Dimensions.get('window').width


const styles = StyleSheet.create({

container:{
    flex:1,
},
input:{
    height:45,
    borderRadius:4,
    color:'#000',
    fontSize:12,
    width:deviceWidth-25,
    borderWidth:1,
    borderRadius:4,
    borderColor:'#dedede'
},
input2:{
    height:45,
    borderRadius:4,
    color:'#000',
    fontSize:12,
    width:deviceWidth-25,
    borderRadius:4,
    backgroundColor:'#fff',
    marginVertical:8
},
newInputContainer:{
    flex:1,
},

})
export default styles