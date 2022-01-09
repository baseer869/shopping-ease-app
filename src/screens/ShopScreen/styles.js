import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapcontainer: {
    height: '100%',
    bottom: 40,
    zIndex: 1,
  },
  searchConatainer: {
    backgroundColor: '#fff',
    height: 80,
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
  },
  searchConatainer2: {
    backgroundColor: '#fff',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
  },
  searchInput: {
    backgroundColor: '#f0f2f5',
    width: 300,
    height: 38,
    borderRadius: 8,
    top: 12,
    paddingHorizontal: 4,
  },
  shopCardStyles: {
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginLeft:10,
    paddingVertical:10,
  },
  shopCardStyles2: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    marginVertical:10,
    marginHorizontal:6

  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: 16.04,
  },
  des:{
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 20.04,
    opacity:0.4,
    width:200,
  },
  img:{
   width:50,
   height:50,
   resizeMode:'contain'
  },
  img2:{
    width:200,
    height:100,
    alignSelf:'center',
    borderTopLeftRadius:8,
    borderTopRightRadius:8
   },
  image: {
    height: 40,
    width: 40,
  },
});

export default styles;
