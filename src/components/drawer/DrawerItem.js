import React from 'react';
import {StyleSheet, Text, View, Image, } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Theme from '../../theme/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';


function Item({title, icon, onItemPress}) {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      activeOpacity={0.7}
      onPress={() => onItemPress()}>
      <Icon name={icon} size={22} color={Theme.primary} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const DrawerItem = ({navigation}) => {
  const [user, setUser] = React.useState(null)
let userInfo;

 async function getUser(){
  userInfo = await   AsyncStorage.getItem("@user_info");
  userInfo =  JSON.parse(userInfo); 
  setUser(userInfo)

}

 function logout() {
   let logout =  AsyncStorage.removeItem("@user_token");
   let userinfo =  AsyncStorage.removeItem("@user_info");


   if(logout){
     navigation.replace('Auth');
   }
}

React.useEffect(()=>{
 getUser()  
},[])
  return (
    <View style={styles.drwerConatiner}>
      <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
        <Image
          source={require('../../../assets/shop.png')}
          style={{
            width: 40,
            height: 40,
            resizeMode: 'contain',
            borderRadius: 50,
          }}
        />
        <Text style={[styles.title, {fontWeight: '700'}]}>
          {`Welcome ${user?.name}`}
        </Text>
      </View>
        <Text numberOfLines={1} style={{fontWeight: '700', fontSize:14, color: Theme.primary, paddingLeft:75, paddingVertical:4, bottom:20}}>
          {`${user?.email}`}
        </Text>
      <View style={{height: 2, backgroundColor: Theme.card}} />
      <View style={{paddingTop: 30}}>
        <Item
          title={'My Profile'}
          onItemPress={() => navigation.navigate('Profile')}
          icon={'account-outline'}
        />
        <Item
          title={'Address'}
          onItemPress={() => navigation.navigate('Profile')}
          icon={'pencil-outline'}
        />
        <Item
          title={'Cart'}
          onItemPress={() => navigation.navigate('Cart')}
          icon={'cart-outline'}
        />
        <Item
          title={'My Orders'}
          onItemPress={() => navigation.navigate('Profile')}
          icon={'shopping-outline'}
        />
      </View>
      <View style={{height: 2, backgroundColor: Theme.card}} />
      <View style={{paddingTop: 20}}>
        <Item
          title={'Terms & Conditions'}
          onItemPress={() => navigation.navigate('Profile')}
          icon={'card-text-outline'}
        />
        <Item
          title={'How it works'}
          onItemPress={() => navigation.navigate('Profile')}
          icon={'comment-alert-outline'}
        />
      </View>
      <View style={{top: 70}}>
        <View style={{height: 2, backgroundColor: Theme.card}} />
        <Item
          title={'Logout'}
          onItemPress={() => logout()}
          icon={'logout'}
        />
      </View>
    </View>
  );
};

export default DrawerItem;

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 22,
    paddingLeft: 20,
    letterSpacing: 0.7,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    marginVertical: 20,
  },
  drwerConatiner: {
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
});
