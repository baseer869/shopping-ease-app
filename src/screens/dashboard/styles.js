import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer:{
   paddingHorizontal:8,
  },
  item: {
    
    marginHorizontal:3,
    marginVertical:5,
    borderRadius: 8,
    backgroundColor:'#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal:4,

  },
  list: {
    paddingHorizontal:8,
    paddingVertical:8,
    backgroundColor:'#fff',
  },
  title: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 17,
    fontFamily: 'roboto',
    width:170,
    lineHeight: 16.4,

  },
  description: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    fontFamily: 'roboto',
    width:180,
    lineHeight: 16.4,
    opacity:0.5
  },
  rate: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 15,
    fontFamily: 'roboto',
    opacity: 0.5,
  },
  image:{
    width:200, 
    height:100,
    resizeMode:'cover',
    borderTopRightRadius:8,
    borderTopLeftRadius:8,
},
image2:{
  width:200, 
  height:100,
  borderRadius:4
},
popular:{
  fontStyle:'normal',
  fontSize:18,
  fontWeight:'700',
  fontFamily:'roboto',
  lineHeight:22,
  paddingVertical:8
},
cateContainer:{
  padding:10,
  borderRadius:8,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'#fff',
  borderRadius:4,
  marginHorizontal:4,
  shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation:3,
    marginVertical:8
},
cateTitle:{
  fontSize:14,
  opacity:0.4,
  fontStyle:'normal',
  fontWeight:'300',
  lineHeight:16
}
});

export default styles;
