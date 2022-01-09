import React from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import styles from './style';
import commonStyle from '../../theme/style';
import Loading from './../activityIndicator/ActivityIndicator';
import Theme from '../../theme/colors';

const Button = ({
  width,
  title,
  color,
  onButtonPress,
  marginTop,
  socialIcon,
  icon,
  loading,
  icActive,
}) => {
  return (
    <TouchableOpacity
      onPress={onButtonPress}
      style={
        !icActive
          ? styles.container
          : [
              styles.container,
              {
                backgroundColor: Theme.back2,
                // borderColor: Theme.primary,
              },
            ]
      }>
      {socialIcon && (
        <Image source={icon} style={{width: 25, height: 25, marginRight: 10}} />
      )}
      {loading ? (
        <Loading />
      ) : (
        <Text
          style={ !icActive ? {
              color: '#fff',
              letterSpacing: 1,
              fontSize: 16,
              fontWeight: '700',
              letterSpacing: 1,
              lineHeight: 18,
            }:
            {
              color: '#000',
              letterSpacing: 1,
              fontSize: 16,
              fontWeight: '700',
              letterSpacing: 1,
              lineHeight: 18,
              opacity:0.8
            }}
           >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
