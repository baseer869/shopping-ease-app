import {StyleSheet} from 'react-native';
import Theme from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Theme.card
  },
  topCartView:{
    paddingVertical:15,
    backgroundColor:'#fff',
    paddingHorizontal:15,
    marginBottom:8
  },
  title:{
    fontSize:18,
    fontWeight:'700',
  lineHeight:18,
  },
  addressView:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:30,
    paddingVertical:5
  },
  text:{
    fontSize:16,
    opacity:0.3,
  },
  addressButton:{
   borderWidth:1,
   borderColor:Theme.primary,
   borderRadius:4,
   justifyContent:'center',
   alignItems:'center',
   paddingHorizontal:8,

  },
  itemContainer:{
    backgroundColor:'#fff',
    marginHorizontal:15,
    marginVertical:4,
    padding:10,
    borderRadius:4
  },
  innerItemContainer:{
    flexDirection:'row',
  },
  name:{
    fontWeight:'700',
    fontSize:16,
    width:200
  },
  price:{
    fontWeight:'400',
    fontSize:16,
  },
  summaryView:{
    paddingHorizontal:15,
    paddingVertical:10,
    marginTop:4,
    backgroundColor:'#fff'
  },
  textView:{
    marginTop:10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  bottomView:{
      backgroundColor:Theme.card,    
  },
  innerview:{
    backgroundColor:'#fff',
    paddingHorizontal:20,
    paddingVertical:20,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:6
  },
  modelView:{
    // flex:1,
    backgroundColor:'#fff',
    paddingVertical:15,
    paddingHorizontal:10,
    borderRadius:4
  },
  inputView:{
    justifyContent:'center',
    paddingVertical:10
  },
  inputText:{
  fontSize:16,
  fontWeight:'700',
  fontStyle:'normal',
  lineHeight:22
  },
  input:{
    width:'95%',
    borderWidth:1,
    borderColor:Theme.border,
    borderRadius:4,
    marginTop:2,
    // alignSelf:'c'
  }
});

export default styles;
