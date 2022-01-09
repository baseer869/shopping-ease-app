import { StyleSheet,Dimensions } from "react-native";
import Theme from "../../theme/colors";
let deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:'center',
        paddingHorizontal:14
    },
    image:{
        width:100, height:100, borderRadius:50, alignSelf:'center',
        marginTop:30
    },
    inputView:{
        marginTop:40,
        height:100,
        justifyContent:'space-between',
    },
    loginButton:{
        borderRadius:4,
        height:45,
        width: deviceWidth-25,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Theme.primary,
        marginTop:30,
    },
    loginText:{
        fontSize:16,
        fontStyle:'normal',
        fontWeight:'700',
        lineHeight:17,
        color:'#fff',
        alignSelf:'center'
    }
});


export default styles;