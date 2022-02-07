import React, {useRef, useState} from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import styles from './style';
import HorizontalLine from '../../components/horizontalLine/index';
import Theme from '../../theme/colors';

const NewInput = ({
  placeholder,
  value,
  onChangeText,
  icon,
  refer,
  onSubmitEditing,
  onfocus,
  active,
  border
}) => {
  console.log('value',value)
  return (
    <TextInput
      style={border? styles.input: styles.input2 }
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      ref={refer}
      onSubmitEditing={onSubmitEditing}
      returnKeyType={'next'}
      onFocus={onfocus}
      placeholderTextColor={'#000'}
    />
  );
};

export default NewInput;
