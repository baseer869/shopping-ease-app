import React from 'react'
import { Text, View , Image, TouchableOpacity} from 'react-native'
import Header from '../../components/header/index';
import styles from './style';
import commonStyle from '../../theme/style';
import { ARROW_FORWARD, ACCOUNT_IN_ACTIVE, LOGOUT, HEART, CARD, ADDRESS } from '../../theme/images';
import HorizontalLine from '../../components/horizontalLine/index';

const AcountHomeScreen = ({navigation}) => {
    return (
        <View style={[styles.container]}>
            <Header title={'Profile'} goback width />
            <View style={[styles.innerContainer]}>
            <Image style={[styles.profileImage]} source={require('../../../assets/profile.png')} />
               <Text style={[commonStyle.heading, {textAlign:'center', paddingTop:8}]}> Baseer Ahmed </Text>
               <Text style={[commonStyle.regularText, {textAlign:'center', paddingTop:8, opacity:0.5}]}>Ahmedbaserr75@gmail.com</Text>
               <Text style={[commonStyle.heading, {paddingTop:15, paddingHorizontal:20}]}>My Account </Text>
               <View style={{ height:'55%', justifyContent:'space-evenly', }}>
                   <View style={{  justifyContent:'space-between', height:40,}}>
                       <View style={styles.iconView}>
                           <Image source={ACCOUNT_IN_ACTIVE} style={[styles.icon]} />
                           <Text style={[commonStyle.h2,{ position:'absolute', left:45}]}>Account Information </Text>
                          <TouchableOpacity style={{ padding:2}} onPress={()=>navigation.navigate('AccountInformation')}>

                          <Image  source={ARROW_FORWARD} style={[styles.icon]} />
                          </TouchableOpacity>

                       </View>
                   <HorizontalLine/>

                   </View>
                   {/*  */}
                   <View style={{  justifyContent:'space-between', height:40}}>
                       <View style={styles.iconView}>
                           <Image source={ADDRESS} style={[styles.icon]} />
                           <Text style={[commonStyle.h2, { position:'absolute', left:45}]}>Address </Text>
                          <TouchableOpacity style={{ padding:2}} onPress={()=>alert('press')}>

                          <Image  source={ARROW_FORWARD} style={[styles.icon]} />
                          </TouchableOpacity>

                       </View>
                   <HorizontalLine/>

                   </View>
                   {/*  */}
                   <View style={{  justifyContent:'space-between', height:40}}>
                       <View style={styles.iconView}>
                           <Image source={CARD} style={[styles.icon]} />
                           <Text style={[commonStyle.h2, { position:'absolute', left:45}]}>Account & Card </Text>
                          <TouchableOpacity style={{ padding:2}} onPress={()=>alert('press')}>

                          <Image  source={ARROW_FORWARD} style={[styles.icon]} />
                          </TouchableOpacity>

                       </View>
                   <HorizontalLine/>

                   </View>
                   {/*  */}
                   <View style={{  justifyContent:'space-between', height:40}}>
                       <View style={styles.iconView}>
                           <Image source={HEART} style={[styles.icon]} />
                           <Text style={[commonStyle.h2, { position:'absolute', left:45}]}>Favourite List </Text>
                          <TouchableOpacity style={{ padding:2}} onPress={()=>navigation.navigate('FavouriteProduct')}>

                          <Image  source={ARROW_FORWARD} style={[styles.icon]} />
                          </TouchableOpacity>

                       </View>
                   <HorizontalLine/>

                   </View>
                   
               <Text style={[commonStyle.heading, {paddingTop:15, paddingHorizontal:20}]}>Settings </Text>
                
             
               </View>
               <TouchableOpacity  activeOpacity={0.4} style={{paddingHorizontal:20, flexDirection:'row', alignItems:'center', width:'32%', justifyContent:'space-between'}}>
                           <Image source={LOGOUT} style={[styles.icon]} />
                           <Text style={[commonStyle.h2,{textAlign:'left'} ]}>Log Out </Text>

                       </TouchableOpacity>
            </View>
        </View>
    )
}

export default AcountHomeScreen

