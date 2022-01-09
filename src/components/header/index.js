import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {BACK, SEARCH_ICON} from '../../theme/images';
import commonStyle from '../../theme/style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './style';

const index = ({
  route,
  home,
  selectmarket,
  search,
  goback,
  navigation,
  title,
  width,
  searcInput,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [filter, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{padding: 5}}
        onPress={() => {
          !home ? navigation.goBack() : navigation.navigate(route);
        }}>
        <Icon name={'arrow-left'} size={22} color={'#fff'} />
      </TouchableOpacity>
      <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
      {title && <Text numberOfLines={1} ellipsizeMode='tail' style={styles.title}>{title}</Text>}
      </View>
      {search && (
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.navigate('Search')}>
          <Image
            source={SEARCH_ICON}
            style={{width: 20.5, height: 20.5, padding: 12}}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default index;
