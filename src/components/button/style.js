import { StyleSheet } from "react-native";
import Theme from './../../theme/colors';

const styles = StyleSheet.create({
    container:{
        height:45,
        backgroundColor:Theme.primary,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4,
        flexDirection:'row',
        paddingHorizontal:8
    },
    button2:{
        backgroundColor:'#fff',
        borderColor:'rgb(11,21,90)',
        borderWidth:0.3
    }
});

export default styles