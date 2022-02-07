import React from 'react';
import styles from './style';
import {StatusBar, Text, View} from 'react-native';
import Theme from '../../theme/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({navigation}) => {
  async function getUserInfo() {
    try {
      const token = await AsyncStorage.getItem('@user_token');
      const market_Info = await AsyncStorage.getItem('@city');
      const user = await AsyncStorage.getItem('user');
      console.log('usersdsfdf----->', user);
      console.log('Access ===>', token);
      console.log('market info ===>', market_Info);
      if(token === null) {
        navigation.replace('Auth'); 
      } else if ( market_Info == null) {
        navigation.replace('Auth'); 
      } else if (token !== null && market_Info !== null) {
        navigation.replace('App');  //DashBoard of shops 
      } else if (token !== null && market_Info == null) {
        navigation.navigate('ShopMapScreen');
      } 
  }
    
    catch (e) {
      // error reading value
      console.log('splash error--->', e);
    }
  }

  React.useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Theme.primary} />
      <Text style={styles.title}>Loading...</Text>
    </View>
  );
};

export default SplashScreen;
