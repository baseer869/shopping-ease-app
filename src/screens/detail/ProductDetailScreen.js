import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import Header from '../../components/header/index';
import Button from '../../components/button/index';
import styles from './style';
import Swiper from '../../components/swiper';
import commonStyle from '../../theme/style';
import {COLLAPSE, ARROW_DOWN} from '../../theme/images';

const {WIDTH, HEIGHT} = Dimensions.get('window');

const HomeDetailScreen = ({navigation, addItemToCart, route}) => {
  const {description, rate, name, price, id} = navigation.state.params?.item;
  let cartItem = {price, id};
  const [selected, setSelected] = useState(true);
  useEffect(() => {
    return () => {};
  }, []);

  const showDetail = () => {
    setSelected(!selected);
  };
  async function addToCart(item) {
   console.log('item in detail--->', item);

    let {price, id} = item;
    let response = await addItemToCart({
      quantity: 1,
      totalPrice: parseInt(price),
      UserId: 1,
      ProductId: id,
    });
    if (response) {
      console.log('item added to cart', response);
    } else {
      console.log('faild to add to cart');
    }
    // navigation.navigate('Cart')
  }

  return (
    <View style={[styles.container]}>
      <Header title={name} goback navigation={navigation} />
      <ScrollView>
        <Image
          source={require('../../../assets/stylo.jpeg')}
          style={{width: '99%', borderRadius: 12, alignSelf: 'center'}}
        />
        <View style={[styles.innerContainer]}>
          <Text
            style={[
              commonStyle.regularText,
              {fontSize: 15, fontWeight: 'bold', opacity: 0.9},
            ]}>
            {description}
          </Text>
          <Text
            style={[
              commonStyle.regularText,
              {fontWeight: 'bold', marginTop: 20},
            ]}>
            {price}
          </Text>
        </View>
        <View style={{width: 400, alignSelf: 'center', paddingTop: 45}}>
          <Button
            title={'Add to cart'}
            onButtonPress={() => addToCart(cartItem)}
          />
        </View>
        <View style={[styles.descriptionStyle]}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={[commonStyle.heading]}>{'Product Description'}</Text>
            {selected ? (
              <TouchableOpacity activeOpacity={0.7} onPress={showDetail}>
                <Image source={ARROW_DOWN} style={styles.icon} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity activeOpacity={0.7} onPress={showDetail}>
                <Image source={COLLAPSE} style={styles.icon} />
              </TouchableOpacity>
            )}
          </View>
          <Text
            ellipsizeMode={'tail'}
            numberOfLines={selected ? 1 : 0}
            style={[
              commonStyle.h3,
              {opacity: 0.6, paddingTop: 10, lineHeight: 20},
              selected ? {width: '90%'} : null,
            ]}>
            {description}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeDetailScreen;
