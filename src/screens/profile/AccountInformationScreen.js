import React, {useRef, useState} from 'react';
import {View, Text, TouchableHighlight, TouchableOpacity, ActivityIndicator} from 'react-native';
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
import  AsyncStorage  from '@react-native-async-storage/async-storage';

const AccountInformationScreen = ({navigation, getUserInfo}) => {
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [address, setAddress] = useState(null);
    const [state, setState ] = useState(null);
    const [city, setCity ] = useState(null);
    const [loading, setLoading] = useState(false);


  const usernameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const addressRef = useRef();

  const nextFocus = current => {
    switch (current) {
      case 'username':
        emailRef.current.focus();
        break;
      case 'city':
        phoneRef.current.focus();
        break;
      case 'address':
        addressRef.current.focus();
        break;
    }
  };

 async function getUserProfile(){
   setLoading(true)
   let userInfo = await AsyncStorage.getItem("@user_info");
   let user = JSON.parse(userInfo);
   let response = await getUserInfo(user.email);
   if(response){
    let { phone, username, state, zipCode, city, address } = response.user;
    setUsername(username)
    setPhone(phone)
    setAddress(address)
    setState(state)
    setCity(city)
    setLoading(false);
   }

   
 }

React.useEffect( ()=>{
    getUserProfile()
  }, [] )


  return (
    <View style={[styles.container]}>
      <Header title={'My Account'} goback width home navigation={navigation} />
    {  loading ? <ActivityIndicator animating={loading}/>:
    
   <View style={[styles.inputView]}>
      <View style={{marginVertical: 10}}>
        <Text style={styles.title}>{'Username'}</Text>
        <NewInput
          refer={usernameRef}
          placeholder={'First Name'}
          icon={ACCOUNT_IN_ACTIVE}
          onSubmitEditing={() => nextFocus('username')}
          value={username}
        />
      </View>
      <View style={{marginVertical: 10}}>
        <Text style={styles.title}>{'Email'}</Text>
        <NewInput
          refer={emailRef}
          placeholder={'City'}
          icon={MAIL}
          onSubmitEditing={() => nextFocus('city')}
          value={city}
        />
      </View>
      <View style={{marginVertical: 10}}>
        <Text style={styles.title}>{'Phone'}</Text>
        <NewInput
          refer={phoneRef}
          placeholder={'03xxxxxxxxx'}
          icon={ACCOUNT_IN_ACTIVE}
          onSubmitEditing={() => nextFocus('phone')}
          value={phone}
        />
      </View>
    
      <View style={{marginVertical: 10}}>
        <Text style={styles.title}>{'Address'}</Text>

        <NewInput
          refer={addressRef}
          placeholder={'Address (Optional)'}
          icon={ADDRESS1}
          onSubmitEditing={() => nextFocus('address')}
          value={address}
        />
      </View>
      <View style={{width:400}}>
      <Button title={'Edit profile'} />
      </View> 
    </View>
  } 

    </View>
  );
};

export default AccountInformationScreen;
