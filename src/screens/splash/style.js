import { StyleSheet } from "react-native";
import Theme from "../../theme/colors";


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: Theme.primary,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:30,
        fontWeight:'700',
        fontStyle:'normal',
        color:'#fff',
        letterSpacing:10
    }
});

export default styles;