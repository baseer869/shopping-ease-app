import { StyleSheet } from "react-native";
import Theme from "../../theme/colors";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Theme.card
    },
    itemContainer:{
        marginVertical:4,
        backgroundColor:'#fff',
        padding:10,
        marginHorizontal:15,
        borderRadius:4,
        paddingHorizontal:10,
      // marginBottom:8

    },
    innerItemContainer:{
      flexDirection:'row',
      justifyContent:'space-between'
    },
    topView:{
      justifyContent:'space-between',
      paddingHorizontal:15,
      paddingVertical:16,
      flexDirection:'row',
      backgroundColor:'#fff',
      alignItems:'center',
      },

    cartTitleAndTotal:{
     fontWeight:'700',
     fontSize:18,
     lineHeight:22,
     textAlign:'center'
    },
    titleAndPrice:{
        fontWeight:'700',
        fontSize:16,
        lineHeight:22,
        textAlign:'left',
        width:200
       },
    imageView:{
        height:78,
        width:130, 
        backgroundColor:'#F0F4F7',
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center'
    },
    pmainView: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
      },
    mainBorder: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: Theme.border,
        height: 25,
        alignItems: 'center',
        borderRadius: 4,
        width: 80,
        marginTop: 8,
      },
      plusView: {
        width: 26,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderRightColor: Theme.border,
      },
      minusView: {
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf:'center'
      },
    cartButton:{
        height:22, width:22,
        backgroundColor:'#0B155A',
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        padding:10

    },
    detailText:{
      fontSize:16,
      fontStyle:'normal',
      fontWeight:'400',
      lineHeight:18,
      color:'#000'
    },
    summaryText:{
        fontSize:16,
        fontStyle:'normal',
        fontWeight:'700',
        lineHeight:22,
        color:'#000'
    },
    cartDetail:{
      backgroundColor:'#fff',
      paddingHorizontal:15,
      paddingVertical:8,
      marginTop:10
    },
    cartItemStyle:{
        paddingVertical:10, 
        width:'100%',
            flexDirection:'row',
        justifyContent:'space-between'
    },
    letterSpacingStyle:{
        letterSpacing:2
    }
});

export default styles