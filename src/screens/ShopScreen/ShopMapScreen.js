import React, {useEffect} from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
  PermissionsAndroid,
} from 'react-native';
import styles from './styles';
import Geocoder from 'react-native-geocoding';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import Theme from './../../theme/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

Geocoder.init('AIzaSyA8KaApdiIILmAY1-xcgs8K2IYPr1dXKy4');

const ShopMapScreen = ({navigation, listShopByCity}) => {
  const [marketList, setMarket] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [search, setSearch] =  React.useState('');

  async function listShop() {
    setLoading(true);
    let list;
    let city = 'islamabad'; // this could be user base
    list = await listShopByCity(city);
    if (list && list.code == 200) {
      setMarket(list.data);
     const savedCity = await  AsyncStorage.setItem(`@city`, city);
     if(savedCity){
      setLoading(false);
     }
    }
  }

  useEffect(() => {
    listShop();
    return ()=>{
      setMarket([]);
    }
  },[navigation]);

 function getUserAddress() {
    try {
      let url;
      url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&amp;key=AIzaSyBJmFIckFQKaaxMAIEkuiuEf7oJ7iYROwc`;
      fetch(url).then((response)=> response.json())
        .then(response => {
          console.log('res-->', response);
        })
        .catch(error => {
          console.log('resss-->', error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  async function getPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      console.log('is granted --->', granted);
      if (granted) {
        Geolocation.getCurrentPosition(
          position => {
            console.log('user loction', position);
            getUserAddress();
          },
          error => {
            // See error code charts below.
            console.log(error.code, error.message);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
      console.log(' granted --->', granted);
    } catch (error) {
      console.log(error);
    }
  }

  // GET USER LOCATION
  useEffect(() => {
    getPermission();
  }, [search]);

  function ShopCard({title, description, img, zindex}) {
    return (
      <>
        <TouchableOpacity
          activeOpacity={0.2}
          style={[styles.shopCardStyles, {zIndex: zindex}]}>
          <Image
            source={require('../../../assets/stylo.jpeg')}
            style={styles.img}
          />
          <View style={{paddingLeft: 10}}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.des}>{description}</Text>
            <Text style={styles.rating}>{'3.5*'}</Text>
          </View>
        </TouchableOpacity>
        <Image
          style={styles.image}
          source={require('../../../assets/shop.png')}
        />
      </>
    );
  }

  function MarketItem({name, description, img, id}) {
    let data = { name, id };
    return (
      <TouchableOpacity
        style={[styles.shopCardStyles2]}
        onPress={() => navigation.navigate('ShopListScreen', {data} )}>
        <Image
          source={require('../../../assets/stylo.jpeg')}
          style={styles.img2}
        />
        <View style={{paddingVertical: 10}}>
          <Text style={[styles.title, {paddingLeft: 5}]}>{name}</Text>
          <Text style={[styles.des, {paddingLeft: 5}]}>{description}</Text>
          <Text style={[styles.rating, {paddingLeft: 5}]}>{'3.5*'}</Text>
        </View>
      </TouchableOpacity>
    );
  }

 function searchShop(text){
   setSearch(text);
  
   let searchText = text.toLowerCase();
  let list = marketList.filter((item)=> item.name.toLowerCase().includes(searchText))
  console.log('list-->', list)
  setMarket(list)
}

  return (
    <>
      <View style={styles.container}>
        <View style={styles.searchConatainer}>
          <View>
            <TextInput value={search} onChangeText={(text)=>searchShop(text)} style={styles.searchInput} placeholder={'Search...'} />
          </View>
        </View>
        <MapView
          style={styles.mapcontainer}
          initialRegion={{
            latitude: 33.6844,
            longitude: 73.0479,
            latitudeDelta: 0.007,
            longitudeDelta: 0.008,
          }}
          zoomEnabled={true}
          zoomTapEnabled={true}
          maxZoomLevel={23}>
          {marketList.map((marker, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}>
              <ShopCard
                zindex={index}
                title={marker.title}
                description={marker.description}
                img={marker.img}
              />
            </Marker>
          ))}
        </MapView>
      </View>
      <View style={{zIndex: 4}}>
        <FlatList
          horizontal={true}
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
};

export default ShopMapScreen;
