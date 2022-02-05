import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        height:100
    },
    searchHeader:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20

    },
    productContainer:{
        marginVertical:6,
        paddingHorizontal:10,
        paddingVertical:4,
        borderRadius:4,    },
    itemContainer:{
        elevation:2,
        backgroundColor:'#fff',
        paddingHorizontal:10,
        paddingVertical:8
    },
    priceTitle:{
        fontStyle:'normal',
        fontSize:16,
        fontWeight:'400',
        color:'#000',
        width:300
    }
});

export default styles