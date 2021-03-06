import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import AppHeader from '../../components/mainHeader/MainHeader';
import styles from './styles';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import RBSheet from 'react-native-raw-bottom-sheet';
import Theme from '../../theme/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Loading from '../../components/activityIndicator/ActivityIndicator';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Item({shop_name, description, rate, navigation, id}) {
  return (
    <View style={styles.itemContainer}>
      <View style={{}}>
        <View>
          <Image
            source={require('../../../assets/stylo.jpeg')}
            style={styles.img}
          />
        </View>
        <View style={{paddingTop: 8, paddingLeft: 8}}>
          <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.title}>
            {shop_name}
          </Text>
          <Text
            numberOfLines={2}
            ellipsizeMode={'tail'}
            style={styles.description}>
            {'description here...'}
          </Text>
          <Text style={styles.rate}>{'3.2'}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('ShopDashBoard', {id: id})}
        activeOpacity={0.4}
        style={{
          //pink
          backgroundColor: Theme.card,
          //light   color:'#ff0db6'
          // backgroundColor:'#ff0db6',

          // yellow
          //  backgroundColor:'#ffbe0d',
          //   backgroundColor: '#fff5db',
          padding: 8,
          alignSelf: 'flex-start',
          width: '100%',
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 14,
            fontStyle: 'normal',
            fontWeight: '700',
            // color: '#ffbe0d',
            color: Theme.primary, //pink
            textAlign: 'center',
          }}>
          Shop Now
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const ShopListScreen = ({
  listMarket,
  navigation,
  route,
  listShop,
  checkCart,
  clearCartOnMarketChange,
}) => {
  let {name, id} = navigation.state.params?.data;

  const [shopList, setShopList] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [hardwareShop, setHardwareShop] = useState([]);
  const [clothesShop, setClothesShop] = useState([]);
  const [bookShop, setBookShop] = useState([]);
  const [pharmacyShop, setPharmacyShop] = useState([]);
  const [marketList, setMarket] = React.useState([]);
  const [loader, setloader] = useState(false);
  const [marketName, setMarketName] = useState('');
  const [isVisible, setVisible] = useState(false);
  const [marketId, setMarketId] = useState(null);

  async function listMarketByCity(id) {
    setLoading(true);
    let list;
    let city = 'islamabad'; // this could be user base
    list = await listMarket(city); //market load
    if (list && list.code == 200) {
      setLoading(false);
      setMarket(list.data);
      const savedCity = await AsyncStorage.setItem(`@city`, city);
      if (savedCity) {
        setLoading(false);
      }
    }
  }

  async function cleartCart() {
    setVisible(true);
    let clear = false;
    return clear;
  }

  async function listShopBaseOnMarket(id, name) {
    setMarketName(name);
    sheetRef.current.close();
    setShopList([]);
    setLoading(true);
    setloader(true);
    let list = await listShop(id);

    if (list && list.code == 200) {
      setLoading(false);
      setloader(false);
      setShopList(list.data);
      const savedCity = await AsyncStorage.setItem(`@city`, city);
      if (savedCity) {
        setLoading(false);
        setloader(false);
      }
    }
  }
  function loadMarket() {
    sheetRef.current.open();
    listMarketByCity();
  }

  useEffect(() => {
    listShopBaseOnMarket(id);
    setMarketName(name);
  }, []);

  // useEffect(()=>{

  // },)

  const sheetRef = React.useRef(null);
  function closeSheet() {
    // sheetRef.current.close()
  }

  const RenderMarket = () => (
    <>
      <View
        style={{
          backgroundColor: '#f5f5f5',
          padding: 16,
          height: 400,
          borderRadius: 8,
        }}>
        <Text style={styles.exploreTitle}>{'Explore more market'}</Text>
        {loading && <Loading animating={loading} />}
        <FlatList
          data={marketList}
          showsHorizontalScrollIndicator={false}
          data={marketList}
          renderItem={({item, index}) => {
            return <MarketItem {...item} />;
          }}
          keyExtractor={(item, index) => String(item?.id + index)}
        />
      </View>
    </>
  );

  async function changeMarket(id, name) {
    let user = await AsyncStorage.getItem('@user_info');
    let userInfo = JSON.parse(user);
    let response = await checkCart(userInfo.userId);
    if (response.data.length > 0) {
      setVisible(true);
     setMarketName(name);
      setMarketId(id);
    } else {
      listShopBaseOnMarket(id, name);
    }
  }

  async function clearCart() {
    let user = await AsyncStorage.getItem('@user_info');
    let userInfo = JSON.parse(user);
    let response = await clearCartOnMarketChange(userInfo.userId);
    if (response.data === 1 || response.status === 200) {
      setVisible(false);
      listShopBaseOnMarket(marketId, name);
    }
  }
  const RenderHeader = () => (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        borderRadius: 8,
        paddingHorizontal: 2,
      }}>
      <TouchableOpacity onPress={() => closeSheet()} activeOpacity={0.5}>
        <Icon name={'close'} size={25} style={{padding: 10}} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('sss')} activeOpacity={0.5}>
        <Text style={[styles.selectText, {color: Theme.primary}]}>
          View on map
        </Text>
      </TouchableOpacity>
    </View>
  );

  function MarketItem({name, id}) {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => changeMarket(id, name)}
        style={styles.list}>
        <Text style={styles.listTitle}>{name}</Text>
        <Image
          source={require('../../../assets/mic.jpeg')}
          style={{width: 60, height: 60, resizeMode: 'contain'}}
        />
      </TouchableOpacity>
    );
  }

  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <AppHeader
            navigation={navigation}
            title={marketName ? marketName : null}
            onMenuPress={() => loadMarket()}
          />
          <Loading animating={loader} />
          {shopList.length > 0 ? (
            <View style={styles.shopListContainer}>
              <Text style={styles.text}>{shopList && shopList[0]?.name}</Text>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={shopList[0]?.Shops}
                keyExtractor={(item, index) => item + index}
                renderItem={({item}) => (
                  <Item navigation={navigation} {...item} />
                )}
              />
            </View>
          ) : (
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf:'center'}}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '700',
                  fontStyle: 'normal',
                  letterSpacing: 0.4,
                }}>
                {'Oops... there is no registered\nstore in this market'}
              </Text>
            </View>
          )}
          {shopList ? (
            <View style={styles.shopListContainer}>
              <Text style={styles.text}>{shopList && shopList[1]?.name}</Text>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={shopList[1]?.Shops}
                keyExtractor={(item, index) => item + index}
                renderItem={({item}) => (
                  <Item navigation={navigation} {...item} />
                )}
              />
            </View>
          ) : null}
          {shopList ? (
            <View style={styles.shopListContainer}>
              <Text style={styles.text}>{shopList && shopList[2]?.name}</Text>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={shopList[2]?.Shops}
                keyExtractor={(item, index) => item + index}
                renderItem={({item}) => (
                  <Item navigation={navigation} {...item} />
                )}
              />
            </View>
          ) : null}
          {shopList ? (
            <View style={styles.shopListContainer}>
              <Text style={styles.text}>{shopList && shopList[3]?.name}</Text>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={shopList[3]?.Shops}
                keyExtractor={(item, index) => item + index}
                renderItem={({item}) => (
                  <Item navigation={navigation} {...item} />
                )}
              />
            </View>
          ) : null}
          {  shopList.length >0 ? <View
            style={{
              paddingVertical: 15,
              flex: 1,
              // paddingHorizontal: 6,
              alignSelf: 'center',
            }}>
            <Text style={styles.text}>{'Others'}</Text>
            <FlatList
              data={shopList}
              keyExtractor={(item, index) => item + index}
              renderItem={({item}) => (
                <Item navigation={navigation} {...item} />
              )}
            />
          </View>: null
          }
        </ScrollView>
        <RBSheet
          ref={sheetRef}
          closeOnDragDown={true}
          closeOnPressMask={false}
          style={{backgroundColor: '#fff'}}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
              borderRadius: 30,
            },
            container: {
              backgroundColor: 'transparent',
              borderRadius: 30,
            },
            draggableIcon: {
              backgroundColor: '#000',
            },
          }}>
          <RenderMarket />
        </RBSheet>
      </View>
      <Modal isVisible={isVisible}>
        <View style={styles.modelView}>
          <Text style={{fontSize: 22, fontWeight: '700', alignSelf: 'center'}}>
            {`Changing market you lost\n current cart`}{' '}
          </Text>

          <View style={styles.buttonView}>
            <TouchableOpacity
              style={styles.button1}
              onPress={() => setVisible(false)}>
              <Text style={[styles.text, {fontWeight: '400', fontSize: 16}]}>
                {`Close`}{' '}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => clearCart()}
              style={styles.button2}>
              <Text
                style={[
                  styles.text,
                  {fontWeight: '400', fontSize: 16, color: '#fff'},
                ]}>
                {`Confirm`}{' '}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ShopListScreen;
