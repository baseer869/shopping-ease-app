import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Theme from '../../theme/colors';

const MainHeader = ({title, title2, onMenuPress, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name={'menu'} size={24} color={'#fff'} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onMenuPress()}
          activeOpacity={0.5}
          style={styles.changeView}>
          {title && (
            <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.title}>
              {title}
            </Text>
          )}
          <Icon name={'menu-down'} size={25} color={'#fff'} />
        </TouchableOpacity>
        <View style={styles.leftMenu}>
          <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
            <Icon name={'cart-outline'} size={25} color={'#fff'} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity activeOpacity={1} style={styles.searchInput} onPress={()=> navigation.navigate('SearchScreen')} >
        <TextInput
          placeholder={'Search for product, Shop and More'}
          style={styles.input}
          editable={false}

        />
      </TouchableOpacity>
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  container:{
    backgroundColor: Theme.primary,
    flex: 1,
    height:120,
    paddingTop:10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  changeView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    paddingRight: 100,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: 18,
    letterSpacing: 0.3,
    color: '#fff',
    width: 60,
  },
  leftMenu: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 6,
    justifyContent: 'space-between',
  },
  searchInput: {
    backgroundColor: Theme.white,
    marginHorizontal:14,
    marginTop:20
  },
  input: {
    backgroundColor: Theme.white,
    height: 45,
    marginHorizontal:20,

  },
});
