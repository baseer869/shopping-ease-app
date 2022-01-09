import React, {useState, useRef} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  TouchableHighlight,
} from 'react-native';

import styles from './style';
import style from '../../theme/style';
import {
  CLOSE,
  ACCOUNT_IN_ACTIVE,
  MAIL,
  PASSWORD,
  ADDRESS,
  ADDRESS1,
  GENDER,
} from '../../theme/images';
import NewInput from '../../components/input/NewInput';
import CheckBox from '../../components/checkbox/index';
import Button from '../../components/button/index';
import {showMessage} from 'react-native-flash-message';
const RegisterScreen = ({navigation, register}) => {
  const [firstname, setFirstName] = useState('');
  const [Email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const firstnameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const passwordRef = useRef();

  const nextFocus = current => {
    switch (current) {
      case 'firstname':
        emailRef.current.focus();
        break;
      case 'email':
        phoneRef.current.focus();
        break;
      case 'phone':
        passwordRef.current.focus();
        break;
    }
  };

  function loadData() {
    const data = {
      email: Email,
      username: firstname,
      user_type: 'Customer',
      phone: phone,
      password: password,
    };
    return data;
  }

  async function onSubmit() {
    if (!firstname) {
      return alert('Username is required');
    } else if (!Email) {
      return alert('Email is required');
    } else if (!phone) {
      return alert('Phone is required');
    } else if (!password) {
      return alert('Password is required');
    }
    setLoading(true);
    const response = await register(loadData());
    console.log('register--->', response);
    if (response.code == 200) {
      setLoading(false);
      showMessage({
        message: 'Register Successful',
        type: 'success',
      });
    } else if (response.code == 409) {
      setLoading(false);
      showMessage({
        message: 'Email address already exist, try different one',
        type: 'danger',
      });
    } else {
      setLoading(false);

      showMessage({
        message: response.message,
        type: 'danger',
      });
    }
  }

  return (
    <ScrollView contentContainerStyle={[styles.container]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '60%',
          alignSelf: 'flex-end',
          paddingTop: 30,
        }}>
        <Text
          style={[
            style.heading,
            {fontWeight: 'bold', opacity: 0.8, textAlign: 'center'},
          ]}>
          Register
        </Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={CLOSE}
            style={{width: 24, height: 24, right: 20, padding: 3}}
          />
        </TouchableOpacity>
      </View>
      <View style={[styles.inputView]}>
        <NewInput
          refer={firstnameRef}
          placeholder={'Username'}
          icon={ACCOUNT_IN_ACTIVE}
          onSubmitEditing={() => nextFocus('firstname')}
          value={firstname}
          onChangeText={text => setFirstName(text)}
        />

        <NewInput
          refer={emailRef}
          placeholder={'Email Address'}
          icon={MAIL}
          onSubmitEditing={() => nextFocus('email')}
          value={Email}
          onChangeText={text => setEmail(text)}
        />
        <NewInput
          refer={phoneRef}
          placeholder={'03xxxxxxxxx'}
          icon={ACCOUNT_IN_ACTIVE}
          onSubmitEditing={() => nextFocus('phone')}
          value={phone}
          onChangeText={text => setPhone(text)}
        />
        <NewInput
          refer={passwordRef}
          placeholder={'Password'}
          icon={PASSWORD}
          onSubmitEditing={() => nextFocus('password')}
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>

      <View
        style={{
          flex: 1,
          top: 40,
          width: '100%',
          alignItems: 'center',
          paddingHorizontal: 15,
        }}>
        <Button
          loading={loading}
          onButtonPress={() => onSubmit()}
          width={'100%'}
          title={'Sign up'}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '65%',
            marginTop: 25,
          }}>
          <Text style={[style.regularText]}>Already have an account ?</Text>
          <TouchableHighlight
            underlayColor={'#F0F4F7'}
            style={{padding: 10, bottom: 10}}
            activeOpacity={0.6}
            onPress={() => navigation.navigate('Login')}>
            <Text style={[style.regularText, {fontWeight: 'bold'}]}>Login</Text>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;
