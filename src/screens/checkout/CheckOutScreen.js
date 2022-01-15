import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import Loading from '../../components/activityIndicator/ActivityIndicator';
import Header from '../../components/header/index';
import styles from './style';
import {Icon} from 'react-native-vector-icons/MaterialCommunityIcons';
import Theme from '../../theme/colors';
import Button from '../../components/button';
import Modal from 'react-native-modal';
import NewInput from '../../components/input/NewInput';

const CheckOutScreen = ({navigation, listCart}) => {
  const [loading, setLoading] = React.useState(false);
  const [cartList, setCartList] = React.useState([]);
  const [totalPrice, setTotal] = React.useState(null);
  const [isVisible, setIsVisible] = React.useState(false);

  async function listCartItem() {
    let id = 1;
    let response = await listCart(id);
    console.log('response in checkout-->', response);
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

  useEffect(() => {
    listCartItem();
  }, []);

  function Item({price, sum, image, quantity, id, totalPrice, Product}) {
    // var product = {price, sum, quantity, id};
    return (
      <View style={styles.itemContainer}>
        <View style={styles.innerItemContainer}>
          <Image
            source={require('../../../assets/pepsi.jpg')}
            resizeMode={'contain'}
            style={{width: 100, height: 100}}
          />
          <View style={{paddingLeft: 10}}>
            <Text
              numberOfLines={1}
              style={styles.name}>{`${Product?.name}`}</Text>
            <View style={{paddingTop: 8}}>
              <Text style={styles.price}>{`Total price: ${totalPrice}`}</Text>
              <Text style={styles.price}>{`Quantity: ${quantity}`}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header goback width title={'CheckOut'} navigation={navigation} />
      <ScrollView>
        <View style={styles.topCartView}>
          <Text style={styles.title}>Customer's Shipping Address</Text>
          <View style={styles.addressView}>
            <Text
              style={
                styles.text
              }>{`Currently you have\n no saved address`}</Text>
            <TouchableOpacity
              onPress={() => setIsVisible(true)}
              style={styles.addressButton}>
              <Text style={styles.addText}>Add New Address</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          {cartList.length !== 0 ? (
            loading ? (
              <Loading animating={loading} />
            ) : (
              cartList?.map(item => {
                return <Item {...item} />;
              })
            )
          ) : (
            <Text>No item in cart</Text>
          )}
        </View>
        <View style={styles.summaryView}>
          <Text style={styles.title}>Order Summary</Text>
          <View style={styles.textView}>
            <Text style={[styles.price, {opacity: 0.6}]}>Total Quantity</Text>
            <Text style={[styles.price, {opacity: 0.6}]}>10</Text>
          </View>
          <View style={styles.textView}>
            <Text style={[styles.price, {opacity: 0.6}]}>Total Price</Text>
            <Text style={[styles.price, {opacity: 0.6}]}>10</Text>
          </View>
          <View style={styles.textView}>
            <Text style={[styles.price, {opacity: 0.6}]}>Shipping Charges</Text>
            <Text style={[styles.price, {opacity: 0.6}]}>30</Text>
          </View>
          <View style={{borderWidth: 0.5, opacity: 0.4, paddingTop: 12}} />
          <View style={styles.textView}>
            <Text style={[styles.price, {fontWeight: '700'}]}>
              Total Payment
            </Text>
            <Text
              style={[
                styles.price,
                {fontWeight: '700', color: Theme.primary},
              ]}>{`${'3000'}/-`}</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomView}>
        <View style={styles.innerview}>
          <Text style={styles.title}>{`${'3000'}/-`}</Text>
          <View style={{width: 150}}>
            <Button title={'Checkout'} onButtonPress={() => alert('heelo')} />
          </View>
        </View>
      </View>
      <Modal
        isVisible={isVisible}
        animationIn={'bounceInUp'}
        animationOut={'slideOutDown'}
        backdropColor={'black'}>
        <View style={styles.modelView}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={[styles.title, {paddingBottom: 20}]}>
              Add Shipping Address
            </Text>
            <TouchableOpacity
              onPress={() => setIsVisible(false)}
              style={{padding: 5}}>
              <Text
                style={[
                  styles.title,
                  {fontWeight: '400', paddingBottom: 20, opacity: 0.9},
                ]}>
                {'Close'}
              </Text>
            </TouchableOpacity>
          </View>

          <ScrollView>
            <View style={styles.inputView}>
              <Text style={styles.inputText}>City</Text>
              <TextInput placeholder="City" style={styles.input} />
            </View>
            <View style={styles.inputView}>
              <Text style={styles.inputText}>City</Text>
              <TextInput placeholder="City" style={styles.input} />
            </View>
            <View style={styles.inputView}>
              <Text style={styles.inputText}>City</Text>
              <TextInput placeholder="City" style={styles.input} />
            </View>
            <View style={styles.inputView}>
              <Text style={styles.inputText}>City</Text>
              <TextInput placeholder="City" style={styles.input} />
            </View>
            <View style={{marginTop: 15}}>
              <Button
                onButtonPress={() => alert('subkit address')}
                title={'Add Address'}
              />
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

export default CheckOutScreen;
