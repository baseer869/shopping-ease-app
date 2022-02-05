import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {EMPTY_CART} from '../../theme/images';
import Button from '../../components/button/index';
import style from '../../theme/style';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center'
  },
  
  image: {
    width: '40%',
    height: '40%',
  },
});

const EmptyCart = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={EMPTY_CART}
        resizeMode={'contain'}
        style={[styles.image]}
      />
        <Text style={[style.h2, {fontWeight: 'bold', letterSpacing: 0.4}]}>
          Add items to your cart
        </Text>
      <TouchableOpacity style={{
        
      }}>
        <Text>Start Shopping</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmptyCart;
