import React, {useEffect} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Header from '../../components/header/index';
import {PLUS, MINUS} from '../../theme/images';
import styles from './style';
import commonStyle from '../../theme/style';
import HorizontalLine from '../../components/horizontalLine/index';
import Button from '../../components/button/index';
import EmptyCart from '../../components/UI/EmptyCart';
import {AsyncStorage} from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Theme from '../../theme/colors';
import Loading from '../../components/activityIndicator/ActivityIndicator';

const CartHomeScreen = ({
  listCart,
  navigation,
  cartItems,
  totalAmount,
  subTotalCounter,
  clearCartAction,
  removeFromCart,
  addItemToCart,
  cartListItem,
  removeItemFromCart,
}) => {
  const [loading, setLoading] = React.useState(true);
  const [cartList, setCartList] = React.useState([]);
  const [cartTotalPrice, setTotal] = React.useState(null);

  function clearCart() {
    clearCartAction();
  }

  async function listCartItem() {
    // let user = await AsyncStorage.getItem('user');
    let id = 1;
    let response = await listCart(id);
    if (response.status === 200) {
      setLoading(false);
      setCartList(response.data?.result);
      setTotal(response.data?.cartTotal.cartTotal);
    } else if (response.status === 400) {
      setLoading(false);
      setCartList([]);
      setTotal(null);
    }
  }
  console.log('cccc-->',cartTotalPrice)

  async function AddItem(totalPrice, ProductId, id) {
    console.log(totalPrice, ProductId, id);
    if( cartTotalPrice && parseInt(cartTotalPrice)  === 10000  ){
     alert('Cart limit exedec'); 
    } else {

    const response = await addItemToCart({
      ProductId: ProductId,
      price: parseInt(totalPrice),
      UserId: 1,
      id: id, //cart id;
    });
    if (response.data.result) {
      let {id} = response.data.result;

      let productIndex = cartList.map(item => {
        let productPrice = parseInt(item.Product.price);
        if(item.id  === id ){
          setTotal( cartTotalPrice+ productPrice );
        }
        return item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: productPrice + item.totalPrice,
              
            }
          : item;
      });
      console.log('total price-->',productIndex )
      setCartList(productIndex);
    }
  }
  }

  // Remove quantity
  // RemoveQuantity

  async function RemoveQuantity(price, quantity, productId, cartId) {
    let data = {
      price: price,
      UserId: 1,
      ProductId: productId,
      quantity: quantity,
    };
    let response = await removeItemFromCart(data);
    console.log('remove from cart', response);
    if (response.result) {
      let {id} = response.result;

      let productIndex = cartList.map(item => {
        let productPrice = parseInt(item.Product.price);
        if(item.id  === id ){
          setTotal( cartTotalPrice + productPrice );
        }
        return item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1,
              totalPrice: item.totalPrice- productPrice ,
            }
          : item;
      });
      setCartList(productIndex);

    }
    
  }

  // useEffect(() => {}, []);

  useEffect(() => {
    listCartItem();
    return () => {
      setCartList([]);
    };
  }, []);

  function ItemInCart({image, quantity, id, totalPrice, Product}) {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.innerItemContainer}>
          <Image
            source={require('../../../assets/pepsi.jpg')}
            resizeMode={'contain'}
            style={{width: 100, height: 100}}
          />
          <View>
            <Text
              numberOfLines={3}
              style={styles.titleAndPrice}>{`${Product?.name}`}</Text>
            <Text
              style={[
                styles.titleAndPrice,
                {paddingTop: 10},
              ]}>{`${totalPrice}`}</Text>
          </View>
        </View>
        <View style={styles.pmainView}>
          <View style={styles.mainBorder}>
            <TouchableOpacity
              onPress={() => AddItem(totalPrice, Product.id, id)}
              style={styles.plusView}>
              <Icon name="plus" style={{height: 11, width: 11}} />
            </TouchableOpacity>
            <View style={styles.plusView}>
              <Text>{quantity}</Text>
            </View>
            <TouchableOpacity
              onPress={() =>
                RemoveQuantity(Product.price, quantity, Product.id, id)
              }
              style={styles.minusView}>
              <Icon name="minus" style={{height: 11, width: 11}} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{bottom: 10}}
        style={{flex: 1}}>
        <Header
          title={'Cart'}
          goback
          width
          route={'Home'}
          home
          navigation={navigation}
        />
        {loading ? (
          <Loading animating={loading} />
        ) : cartList.length !== 0 ? (
          <View>
            <View style={styles.topView}>
              <Text
                style={styles.cartTitleAndTotal}>{`My Shopping Cart (2)`}</Text>
              <Text
                style={styles.cartTitleAndTotal}>{`Total: ${cartTotalPrice}`}</Text>
            </View>
            {cartList?.map(item => {
              return <ItemInCart {...item} />;
            })}
            {/* cart detail */}

            <View style={styles.cartDetail}>
              <View style={styles.cartItemStyle}>
                <Text style={styles.summaryText}>{'Order Summary'}</Text>
              </View>
              <View style={styles.cartItemStyle}>
                <Text style={[commonStyle.h3, styles.letterSpacingStyle]}>
                  {'Discount :'}
                </Text>
                <Text style={[commonStyle.h3, styles.letterSpacingStyle]}>
                  {'0'}
                </Text>
              </View>
              <View style={[styles.cartItemStyle]}>
                <Text style={[commonStyle.h3, styles.letterSpacingStyle]}>
                  {'Packing / Delivery fee :'}
                </Text>
                <Text style={[commonStyle.h3, styles.letterSpacingStyle]}>
                  {'Rs.0'}
                </Text>
              </View>
              <HorizontalLine />
              <View style={styles.cartItemStyle}>
                <Text
                  style={[
                    commonStyle.h3,
                    {fontWeight: '700', letterSpacing: 2},
                  ]}>
                  {'Total Amount:'}
                </Text>
                <Text
                  style={[
                    commonStyle.h3,
                    {fontWeight: '700', letterSpacing: 2},
                  ]}>{`Rs.${cartTotalPrice}/-`}</Text>
              </View>
            </View>
          </View>
        ) : (
          <View
            style={{
              flex: 1,
              height: 800,
              justifyContent: 'center',
              backgroundColor: '#fff',
            }}>
            <Image
              style={{
                width: 100,
                height: 100,
                marginBottom: 10,
                alignSelf: 'center',
              }}
              source={require('../../../assets/cart.gif')}
            />
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 18,
                fontStyle: 'normal',
                fontWeight: '400',
              }}>
              {'Add item to your cart'}
            </Text>
            <View style={{paddingHorizontal: 80, marginTop:10, marginVertical: 0}}>
              <Button
                onButtonPress={() => navigation.navigate('ShopListScreen')}
                title={'Start shopping'}
              />
            </View>
          </View>
        )}
      </ScrollView>
      <View style={{height: 4, backgroundColor: Theme.card}} />
      {cartList.length !== 0 && (
        <View style={{paddingVertical: 10, backgroundColor: '#fff'}}>
          <View style={{padding: 10}}>
            <Button
              onButtonPress={() => navigation.navigate('CheckOutScreen')}
              title={'Proceed to checkout'}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default CartHomeScreen;
