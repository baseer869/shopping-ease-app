import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Theme from './../../theme/colors';

const PlaceOrderScreen = ({getOrder, navigation}) => {
  const [orderDetail, setOrderdetail] = React.useState('');

  async function getOrderdetail() {
    let user = await AsyncStorage.getItem('@user_info');
    let userInfo = JSON.parse(user);
    let data = {
      user_id: userInfo.userId,
    };
    let response = await getOrder(data);
    if (response.status === 200) {
      let {orderNumber, order_status, createdAt} = response.data;

      let orderInfo = {orderNumber, order_status, createdAt};
      let detail = {...response.data?.users, orderInfo};
      console.log('orer detail response===>', detail);

      setOrderdetail(detail);
    }
  }

  React.useEffect(() => {
    getOrderdetail();
    return () =>{
      setOrderdetail('')
    }
  }, []);
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Image
          style={{width: 150, height: 150}}
          source={require('../../../assets/tick.png')}
        />
        <Text style={styles.title}>{'Thanks You'}</Text>
        <Text style={styles.text}>
          {'Your order has been\nsuccessfully placed !!'}
        </Text>
      </View>

      {orderDetail ? (
        <View style={styles.orderStatusView}>
          <View style={styles.dire}>
            <Text style={styles.orderText}>{'Name:'}</Text>
            <Text
              style={[
                styles.orderText,
                {fontSize: 14, fontWeight:'400', paddingLeft: 10},
              ]}>{`${orderDetail.username}`}</Text>
          </View>
          <View style={styles.dire}>
            <Text style={styles.orderText}>{'Order ID:'}</Text>
            <Text
              style={[
                styles.orderText,
                {fontSize: 14, fontWeight:'400', paddingLeft: 10},
              ]}>{`#${orderDetail.orderInfo.orderNumber}`}</Text>
          </View>
          <View style={styles.dire}>
            <Text style={styles.orderText}>{'Order Date:'}</Text>
            <Text
              style={[
                styles.orderText,
                {fontSize: 14, fontWeight:'400', paddingLeft: 10},
              ]}>{`${orderDetail.orderInfo.createdAt}`}</Text>
          </View>
          <View style={styles.dire}>
            <Text style={styles.orderText}>{'Order Status: '}</Text>
            <Text
              style={[
                styles.orderText,
                {
                  fontSize: 16,
                  fontWeight: '700',
                  paddingLeft: 10,
                  color: `${orderDetail.orderInfo.order_status === 'pending'}`
                    ? Theme.pending
                    : null,
                },
              ]}>{`${orderDetail.orderInfo.order_status}`}</Text>
          </View>
        </View>
      ) : null}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace('ShopMapScreen')}>
        <Text style={styles.btnText}>{'Continue shopping'} </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PlaceOrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: Theme.white,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    fontStyle: 'normal',
    opacity: 0.6,
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    fontStyle: 'normal',
    paddingTop: 60,
  },
  orderStatusView: {
    elevation: 2,
    marginHorizontal: 40,
    paddingVertical: 6,
    paddingHorizontal: 6,
    backgroundColor: '#fff',
    marginVertical: 20,
    borderRadius: 4,
  },
  dire: {
    flexDirection: 'row',
  },
  orderText: {
    fontSize: 16,
    fontWeight: '700',
    fontStyle: 'normal',
    letterSpacing:0.6
  },
  button: {
    borderWidth: 1,
    borderColor: Theme.primary,
    borderRadius: 4,
    paddingHorizontal: 15,
    paddingVertical: 15,
    width: 200,
    alignSelf: 'center',
    marginTop: 50,
  },
  btnText: {
    fontSize: 16,
    fontStyle: 'normal',
    color: Theme.primary,
    textAlign: 'center',
    fontWeight: '700',
  },
});
