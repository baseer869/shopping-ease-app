import React, {useRef, useState} from 'react';
import {View, Text, TouchableHighlight, TouchableOpacity} from 'react-native';
import styles from './style';
import style from '../../theme/style';
import Header from '../../components/header/index';
import NewInput from '../../components/input/NewInput';
import Button from '../../components/button/index';
import {
  ACCOUNT_IN_ACTIVE,
  MAIL,
  PASSWORD,
  ADDRESS1,
  ADDRESS,
} from '../../theme/images';

const AccountInformationScreen = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [state, setState ] = useState('');


  const usernameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const addressRef = useRef();

  const nextFocus = current => {
    switch (current) {
      case 'username':
        emailRef.current.focus();
        break;
      case 'email':
        phoneRef.current.focus();
        break;
      case 'address':
        addressRef.current.focus();
        break;
    }
  };

  return (
    <View style={[styles.container]}>
      <Header title={'My Account'} goback width navigation={navigation} />
      <View style={[styles.inputView]}>
        <View style={{marginVertical: 10}}>
          <Text style={styles.title}>{'Username'}</Text>
          <NewInput
            refer={usernameRef}
            placeholder={'First Name'}
            icon={ACCOUNT_IN_ACTIVE}
            onSubmitEditing={() => nextFocus('username')}
          />
        </View>
        <View style={{marginVertical: 10}}>
          <Text style={styles.title}>{'Email'}</Text>
          <NewInput
            refer={emailRef}
            placeholder={'Email Address'}
            icon={MAIL}
            onSubmitEditing={() => nextFocus('email')}
          />
        </View>
        <View style={{marginVertical: 10}}>
          <Text style={styles.title}>{'Phone'}</Text>
          <NewInput
            refer={phoneRef}
            placeholder={'03xxxxxxxxx'}
            icon={ACCOUNT_IN_ACTIVE}
            onSubmitEditing={() => nextFocus('phone')}
          />
        </View>
       
        <View style={{marginVertical: 10}}>
          <Text style={styles.title}>{'Address'}</Text>

          <NewInput
            refer={addressRef}
            placeholder={'Address (Optional)'}
            icon={ADDRESS1}
            onSubmitEditing={() => nextFocus('address')}
          />
        </View>
      </View>
      <View style={{ top: 60, width: '100%', alignItems: 'center'}}>
        <View style={{width:400}}>
        <Button title={'Edit profile'} />
        </View>  

        <View style={{marginTop: 10, width: 400}}>
          <Button
            title={'Change password'}
            onButtonPress={() => navigation.navigate('ForgetPassword')}
            icActive
          />
        </View>
      </View>
    </View>
  );
};

export default AccountInformationScreen;
