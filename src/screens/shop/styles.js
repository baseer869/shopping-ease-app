import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchConatainer: {
    paddingBottom: 8,
    backgroundColor: '#fff',
    height: 80,
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    shadowColor: '#000',
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
  itemContainer: {
    marginHorizontal: 8,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: 22,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: 16,
    width: 180,
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 16,
    opacity: 0.4,
    width: 180,
  },
  image: {
    width: 100,
    height: 100,
  },
  img: {
    width: 200,
    height: 100,
    borderTopLeftRadius:12,
    borderTopRightRadius:12,
    resizeMode:'cover'
    
  },
  rate: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    opacity: 0.4,
  },
  shopListContainer: {
    marginVertical: 10,
  },
  text: {
    fontSize: 22,
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: 25,
    letterSpacing: 0.5,
    paddingHorizontal: 10,
  },
  selectText: {
    fontStyle: 'normal',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.4,
  },
  list: {
    padding: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listTitle: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 17,
    letterSpacing: 0.7,
  },
  exploreTitle:{
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 17,
    letterSpacing: 0.7,
  }
});

export default styles;
