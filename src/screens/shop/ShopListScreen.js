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
        onPress={() => navigation.navigate('ShopDashBoard', { id: id })}
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


const ShopListScreen = ({listMarket, navigation, route, listShop}) => {
  
  let {name, id} = navigation.state?.params?.data;


  const [shopList, setShopList] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [hardwareShop, setHardwareShop] = useState([]);
  const [clothesShop, setClothesShop] = useState([]);
  const [bookShop, setBookShop] = useState([]);
  const [pharmacyShop, setPharmacyShop] = useState([]);
  const [marketList, setMarket] = React.useState([]);
  const [loader, setloader] = useState(false);
  const [marketName, setMarketName] = useState('');

  async function listMarketByCity(id) {
    setLoading(true);
    let list;
    let city = 'islamabad'; // this could be user base
    list = await listMarket(city); //market load
    console.log('lisststtt-->', list);
    if (list && list.code == 200) {
      setLoading(false);
      setMarket(list.data);
      const savedCity = await AsyncStorage.setItem(`@city`, city);
      if (savedCity) {
        setLoading(false);
      }
    }
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
    listMarket();
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
        {/* <RenderHeader />   */}
        <Text style={styles.exploreTitle}>{'Explore market'}</Text>
        {loading && <Loading animating={loading} />}
        <FlatList
          data={marketList}
          showsHorizontalScrollIndicator={false}
          data={marketList}
          renderItem={({item, index}) => {
            return <MarketItem {...item} />;
          }}
          keyExtractor={(item, index) => String(item?.id + index)}
          // ItemSeparatorComponent={() => (
          //   <View style={{height: 0.6, backgroundColor: '#000'}} />
          // )}
        />
      </View>
    </>
  );

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
        onPress={() => listShopBaseOnMarket(id, name)}
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
    <View style={styles.container}>
      <ScrollView>
        <AppHeader navigation={navigation} title={ marketName? marketName:'kkk'} onMenuPress={() => loadMarket()} />
        <Loading animating={loader} />
        {shopList ? (
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
        ) : null}
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
        <View
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
            renderItem={({item}) => <Item navigation={navigation} {...item} />}
          />
        </View>
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
  );
};

export default ShopListScreen;
