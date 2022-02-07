import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ToastAndroid,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {
  ARROW_FORWARD,
  FACEBOOK_ICON,
  GOOGLE_ICON,
  MAIL,
  PASSWORD,
} from '../../theme/images';
import styles from './style';
import NewInput from './../../components/input/NewInput';
import {Error} from '../../components/bottomSheet/Error';
import {showMessage, hideMessage} from 'react-native-flash-message';
import Button from '../../components/button/index';
import style from '../../theme/style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from './../../components/activityIndicator/ActivityIndicator';

const LoginScreen = ({login, navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [active, setActive] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const usernameRef = useRef();
  const passwordRef = useRef();

  async function loginSubmit() {
    if (!username) {
      return alert('Username is required');
    } else if (!password) {
      return alert('Password is required');
    }
    setLoading(true);
    const response = await login({
      email: username.trim(),
      password: password.trim(),
    });

    if (response.code == 200) {
      const isSave = AsyncStorage.setItem("@user_token", response?.token);
      // let {id, email, name} = response;
      // let user = {id, email, name};
       console.log('login--->', response);
   let userInfo =  AsyncStorage.setItem("@user_info", JSON.stringify(response)); //logged user
      if (userInfo) {
        setLoading(false);
        navigation.navigate('ShopMapScreen');
      }
    } else if (response.code == 401) {
      setLoading(false);
      showMessage({
        message: 'Invalid email or Password',
        type: 'danger',
      });
      setMessage(response.message);
    }
  }

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <View style={[styles.container]}>
      {/* <Image
        style={[styles.image]}
        source={require('../../../assets/profile.png')}
      /> */}
      <Text style={{fontSize: 22, fontWeight: '500', paddingBottom: 30}}>
        Shopping Ease{' '}
      </Text>
      <NewInput
        value={username}
        placeholder={'Email Address'}
        icon={MAIL}
        onChangeText={text => setUsername(text)}
        refer={usernameRef}
        onSubmitEditing={() => passwordRef.current.focus()}
        onfocus={() => setActive(true)}
        active={active}
      />
      <NewInput
        value={password}
        placeholder={'Password'}
        icon={PASSWORD}
        onChangeText={text => setPassword(text)}
        refer={passwordRef}
        onfocus={() => setActive(true)}
        active={active}
      />
      <TouchableOpacity
        onPress={() => loginSubmit()}
        style={styles.loginButton}>
        {loading ? (
          <Loading />
        ) : (
          <Text style={styles.loginText}>{'Login'}</Text>
        )}
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '45%',
          paddingTop: 40,
        }}>
        <Text style={[style.regularText]}>No Account ?</Text>
        <TouchableHighlight
          underlayColor={'#F0F4F7'}
          style={{padding: 10, bottom: 10}}
          activeOpacity={0.6}
          onPress={() => navigation.navigate('Register')}>
          <Text style={[style.regularText, {fontWeight: 'bold'}]}>
            Register
          </Text>
        </TouchableHighlight>
      </View>
      <TouchableOpacity
        style={{
          borderWidth: 0.5,
          padding: 10,
          borderColor: 'rgb(11,21,90)',
          opacity: 0.7,
          marginTop: 20,
          marginBottom: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '45%',
        }}>
        <Text style={[style.regularText]}>Switch to captain</Text>
        <Image source={ARROW_FORWARD} style={{width: 16, height: 16}} />
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
