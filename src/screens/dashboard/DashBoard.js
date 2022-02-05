import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import styles from './styles';
import Header from '../../components/header/index';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Theme from '../../theme/colors';
import Loading from './../../components/activityIndicator/ActivityIndicator';

const DashBoard = ({navigation, listCategory, listProduct, listAllProduct}) => {
  
  const [shopId, setShop] = useState(navigation.state.params?.id || null);
  const [product, setProduct] = React.useState([]);
  const [category, setCategory] = React.useState([]);
  const [active, setActive] = React.useState(null);
  const [allActive, setAllActive] = React.useState(false);
  const [loading, setLoading] = useState(false);
  
  async function Category(id) {
    setLoading(true)
    let list;
    list = await listCategory(id);
    if (list.code == 200) {
      setCategory(list?.data.result);
      setLoading(false)
    }
  }
  async function filterProductByCategory(id, index) {
    setActive(id);
    setAllActive(false);
    let list;
    let data = {shopId, id};

    list = await listProduct(data);
    if (list.code == 200) {
      setProduct(list?.data.result);
    }
  }

  async function Products(shopId) {
    setLoading(true)
    setAllActive(true);
    setActive(null);
    let list;
    let data = {shopId};
    list = await listAllProduct(data);
    if (list.code == 200) {
      setProduct(list?.data.result);
      setLoading(false)
      setAllActive(true);
    }
  }

  useEffect(() => {
    
    Category(shopId);
    setActive(0);
    return () => {
      setCategory([]);
    };
  }, [navigation]);

  useEffect(() => {
    Products(shopId);
    return () => {
      setProduct([]);
    };
  }, [navigation]);

  function Item({name, description, rate, price, isAvaialbe, image}) {
    
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('ProductDetailScreen')}
        style={styles.item}>
        <Image
          style={styles.image}
          source={require('../../../assets/mic.jpeg')}
        />
        <View style={{padding: 6}}>
        
          <Text numberOfLines={1} style={styles.title}>
            {name}
          </Text>
          <Text numberOfLines={1} style={[styles.title,{ fontSize:14, opacity:0.8 }]}>
            {price}
          </Text>
          <Text numberOfLines={2} style={styles.description}>
            {description}
          </Text>
          <Text style={styles.rate}>{rate}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  function CateItem({name, index, image, id}) {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => filterProductByCategory(id, id)}
        style={styles.cateContainer}>
        <Text
          style={
            active === id
              ? [
                  styles.cateTitle,
                  {color: Theme.primary, opacity: 0.8, fontWeight: '700'},
                ]
              : styles.cateTitle
          }>
          {name}
        </Text>
      </TouchableOpacity>
    );
  }

  function ListProduct({name, description, rate, price, image, id}) {
    let item = {name, description, rate, image, price, id};
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('ProductDetailScreen', {item: item})}
        activeOpacity={0.5}
        style={styles.list}>
        <Image
          style={styles.image2}
          source={require('../../../assets/mic.jpeg')}
        />
        <View style={{padding: 6}}>
        <Text numberOfLines={1} style={styles.title}>
            {name}
          </Text>
          <Text numberOfLines={1} style={[styles.title,{opacity:0.8, fontSize:14}]}>
            {price}
          </Text>
          <Text numberOfLines={2} style={styles.description}>
            {description}
          </Text>
          <Text style={styles.rate}>{rate}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <ImageBackground
            source={require('../../../assets/mobile.jpeg')}
            style={{height: 250}}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.goBack()}
              style={{padding: 10}}>
              <Icon
                color={Theme.primary}
                name={'arrow-back-ios'}
                style={{color: Theme.primary}}
              />
            </TouchableOpacity>
          </ImageBackground>
        </View>

        {/* Most popular product */}
       {
        loading ? (
        <Loading color={Theme.primary} size  animating={loading} />
        ): (
      <View style={styles.topContainer}>
          <Text style={styles.popular}>Popular</Text>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={product}
            renderItem={({item}) => {
              return <Item {...item} />
            }}
            keyExtractor={(item, index) => String(item?.id + index)}
          />
          <View
            style={{
              paddingVertical: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            { category && <TouchableOpacity
              style={ allActive ? [styles.cateContainer,{backgroundColor: Theme.primary, paddingHorizontal: 18},]:[styles.cateContainer] }
              onPress={()=>Products(shopId)}
              >
              <Icon
                name="format-list-bulleted"
                size={20}
                style={ allActive ? { color:  Theme.white}: {  color:'#000', opacity:0.4  }}
              />
            </TouchableOpacity>
            }
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={category}
              renderItem={({item, index}) => {
                return <CateItem {...item} index={index} />;
              }}
              keyExtractor={(item, index) => String(item?.id + index)}
            />
          </View>
          {/* product view  */}
          <FlatList
            data={product}
            numColumns={2}
            key={'1'}
            contentContainerStyle={{
              flex: 1,
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginVertical: 10,
            }}
            renderItem={({item}) => {
              return <ListProduct {...item} />;
            }}
            keyExtractor={(item, index) => String(item?.id + index)}
          />
        </View>
        )

       }  

        
      </ScrollView>
    </View>
  );
};

export default DashBoard;
