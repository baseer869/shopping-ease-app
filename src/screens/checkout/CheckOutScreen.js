import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import Loading from '../../components/activityIndicator/ActivityIndicator';
import Header from '../../components/header/index';
import styles from './style';
import {Icon} from 'react-native-vector-icons/MaterialCommunityIcons';
import Theme from '../../theme/colors';
import Button from '../../components/button';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CheckOutScreen = ({navigation, listCart, updatedProile, getUserInfo, placeOrder, updateCartStatus}) => {
  const [deliverAddress, setDeliverAddress] = React.useState(null);
 
  const [loading, setLoading] = React.useState(false);
  const [cartList, setCartList] = React.useState([]);
  const [totalPrice, setTotal] = React.useState(null);
  const [isVisible, setIsVisible] = React.useState(false);
  const [ homeAddress, setHomeAddress] = React.useState( deliverAddress? deliverAddress.homeAddress :'');
  const [phoneNumber, setPhoneNumber] = React.useState(deliverAddress? deliverAddress.phone :'');
  const [state, setState] = React.useState(deliverAddress? deliverAddress.state :'');
  const [address, setAddress] = React.useState(deliverAddress? deliverAddress.address :'');
  const [infoLoading, setInfoLoadig] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [loader, setLoader] = React.useState(false);


  async function listCartItem() {
    let user = await AsyncStorage.getItem('@user_info');
    let userInfo = JSON.parse(user);
    let response = await listCart(userInfo?.userId);
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

  async function getData() {
    let user = await AsyncStorage.getItem('@user_info');
    let userInfo = JSON.parse(user);
    let data = {
      id: userInfo?.userId,
      addressTitle: homeAddress,
      phone: phoneNumber,
      address: address,
      state: state,
    };
    return data;
  }

  async function onSubmit() {
    
    let address = await getData();
    let response = await updatedProile(address);
    console.log('address response===>', response);
    if (response.status === 200) {
      setIsVisible(false);
      let user = await AsyncStorage.getItem('@user_info');
      let userInfo = JSON.parse(user);
      if (userInfo) {
        //set loading address view
        console.log('userInfo?.userId', userInfo?.userId);
        setInfoLoadig(true);
        let response = await getUserInfo(userInfo?.userId);
        if (response.status === 200) {
          setInfoLoadig(false);
          setDeliverAddress(response.user);
          console.log('response of user infp===?', response);
        }
      }
    } else {
      alert('Unable to add address, Try again');
    }
  }

  async function UserInfo() {
    setInfoLoadig(true);
    let user = await AsyncStorage.getItem('@user_info');
    let userInfo = JSON.parse(user);
    let response = await getUserInfo(userInfo?.userId);
    if (response.status === 200) {
      setInfoLoadig(false);
      setDeliverAddress(response.user);
    }
  }

  async function EditAddress() {
    console.log('edit address');
    setIsVisible(true);
  }

async function onPlaceOrder(){
  setLoader(true)
  let user = await AsyncStorage.getItem('@user_info');
    let userInfo = JSON.parse(user);
    let user_id = userInfo?.userId
    let data ={
      user_id: user_id,
    }
    let response = await placeOrder(data);
    if(response && response.status === 200){
      // update the status of cart  
      let user = await AsyncStorage.getItem('@user_info');
      let userInfo = JSON.parse(user);
      let user_id = userInfo?.userId
      let data ={
        id: user_id,
      }
    let isPlaced = await updateCartStatus(data);
    if(isPlaced){
      setLoader(false)
      navigation.replace('PlaceOrderScreen');
    } else {
      alert('Unable to place order')
    }
      
    } else if(response.status === 400) {
      setLoader(false)
       alert('Unable to place order')
    }    
}

  useEffect(() => {
    listCartItem();
    UserInfo();
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
        
        {deliverAddress?.address !==null ? (
          <View
            style={[
              styles.itemContainer,
              {paddingHorizontal: 8, paddingVertical: 8, marginHorizontal:0},
            ]}>
            <Text style={[styles.addressText, {fontSize: 16}]}>
              {`Deliver to:`}{' '}
              <Text style={[styles.addressText, {fontWeight: '400'}]}>
                {deliverAddress?.address}
                {`,`}
              </Text>
            </Text>
            <Text style={[styles.addressText, {fontWeight: '400'}]}>
              {deliverAddress?.state}
            </Text>
            <Text style={[styles.addressText, {fontWeight: '400'}]}>
              {deliverAddress?.phone}
            </Text>
            <TouchableOpacity
              onPress={() =>  EditAddress()}
              style={{
                borderColor: Theme.border,
                borderWidth: 1,
                paddingVertical: 6,
                paddingHorizontal: 6,
                width: 80,
                marginVertical:10,
                borderRadius:4
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#000',
                  opacity: 0.5,
                  textAlign: 'center',
                  fontWeight: '700',
                }}>
                {'Edit'}
              </Text>
            </TouchableOpacity>
          </View>
        ) :
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
        }
        <View>
          {cartList.length !== 0 ? (
            loading ? (
              <Loading animating={loading} />
            ) : (
              cartList?.map(item => {
                return <Item {...item} />;
              })
            )
          ) : null}
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
            <Button loading={loader} title={'Checkout'} onButtonPress={() => onPlaceOrder()} />
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
              <Text style={styles.inputText}>Home address</Text>
              <TextInput
                placeholder="Home"
                value={ homeAddress}
                onChangeText={text => setHomeAddress(text)}
                style={styles.input}
              />
            </View>
            <View style={styles.inputView}>
              <Text style={styles.inputText}>Phone number</Text>
              <TextInput
                placeholder="Phone number"
                value={phoneNumber}
                onChangeText={text => setPhoneNumber(text)}
                style={styles.input}
              />
            </View>
            <View style={styles.inputView}>
              <Text style={styles.inputText}>State</Text>
              <TextInput
                placeholder="State"
                value={state}
                onChangeText={text => setState(text)}
                style={styles.input}
              />
            </View>
            <View style={styles.inputView}>
              <Text style={styles.inputText}>Address</Text>
              <TextInput
                placeholder="Address"
                value={address}
                onChangeText={text => setAddress(text)}
                style={styles.input}
              />
            </View>
            <View style={{marginTop: 15}}>
              <Button  onButtonPress={() => onSubmit()} title={'Add Address'} />
            </View>
          </ScrollView>
        </View>
      </Modal>

    <Modal isVisible={visible} />
      
    </View>
  );
};

export default CheckOutScreen;
