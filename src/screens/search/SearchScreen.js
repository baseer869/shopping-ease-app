import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from './style';
import {BACK} from '../../theme/images';
import Header from '../../components/header/index';
import Theme from '../../theme/colors';

const SearchScreen = ({navigation, filterProduct}) => {
  const [search, setSearch] = useState();
  const [product, setProduct] = useState([]);

  async function searchProduct(text) {
    let response = await filterProduct(text);
    if (response?.result) {
      let product = response.result;
      setProduct(product);
    }
  }
  useEffect(() => {
    setProduct([]);
  }, []);
  return (
    <View style={styles.container}>
      <Header
        title={'Search'}
        searchProduct={searchProduct}
        home
        search
        navigation={navigation}
      />
      <View style={{height: 2, marginTop: 10, backgroundColor: Theme.border}} />
      {
        <FlatList
          data={product ? product : []}
          renderItem={({item, index}) => {
           let  { name, price, description, image, id } = item; 
    let product = {name, description,  image, price, id};

            return (
              <View style={styles.productContainer}>
                <TouchableOpacity onPress={()=> navigation.navigate('ProductDetailScreen', {item: product}) } style={styles.itemContainer}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      style={{width: 70, height: 70}}
                      source={require('../../../assets/mic.jpeg')}
                    />
                    <View style={{paddingLeft: 10}}>
                      <Text
                        numberOfLines={1}
                        style={[styles.priceTitle, {fontWeight: '700'}]}>
                        {item.name}
                      </Text>
                      <Text style={styles.priceTitle}>{item.price}</Text>
                      <Text
                        style={[
                          styles.priceTitle,
                          {fontWeight: '700', fontStyle: 'italic'},
                        ]}>
                        {'From: '}
                        <Text
                          style={{
                            fontStyle: 'normal',
                            color: Theme.primary,
                            fontWeight: '400',
                          }}>
                          {item.Shop.shop_name}
                        </Text>{' '}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      }
    </View>
  );
};

export default SearchScreen;
