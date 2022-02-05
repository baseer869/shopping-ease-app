import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { createAppContainer,  } from 'react-navigation';
import { createStackNavigator ,TransitionPresets} from 'react-navigation-stack';
import HomeScreen from './../screens/home/Index';
import {  HOME_IN_ACTIVE, HOME_ACTIVE, CART, ACCOUNT_ACTIVE, ACCOUNT_IN_ACTIVE } from '../theme/images';
import commonStyle from '../theme/style';
import ProductDetailScreen from './../screens/detail/index';
import ShopCategoryScreen from '../screens/category/ShopCategoryScreen';
import ProductHomeScreen from './../screens/productpage/index';
import CartHomeScreen from './../screens/cart/index';
import AccountHomeScreen from '../screens/account/index'
import LoginScreen from './../screens/login/index';
import RegisterScreen from '../screens/register/index';
import AccountInformationScreen from './../screens/profile/index';
import ForgetPasswordScreen from '../screens/forgetpassword/index';
import CheckOutScreen from './../screens/checkout/index';
import SearchScreen from './../screens/search/index';
import ChangePaymentScreen from './../screens/payment/ChangePaymentScreen';
import FavouriteScreen from './../screens/favorite/index';
import SearchShopScreen from './../screens/searchshop/SearchScreen';
import AddAddressScreen from './../screens/addAddress/AddAddressScreen';
import ShopMapScreen from '../screens/ShopScreen/index';
import ShopListScreen from '../screens/shop/index';
import DashBoard from './../screens/dashboard/index';
import SplashScreen from '../screens/splash/SplashScreen';
import DrawerItem from '../components/drawer/DrawerItem';

const HomeStack = createStackNavigator({
    Home:{screen: HomeScreen},
    Shop: {screen: ShopCategoryScreen},
    Product: {screen: ProductHomeScreen},
    ProductDetail: {screen: ProductDetailScreen},
    SearchShop: {screen:SearchShopScreen}
}, { initialRouteName:'Home',
    headerMode:"none",
    defaultNavigationOptions: {
        ...TransitionPresets.SlideFromRightIOS,
      },
})


const CartStack = createStackNavigator({
      CartHome: {screen: CartHomeScreen},
      CheckOut: {screen: CheckOutScreen},
      Payment: {screen: ChangePaymentScreen}
}, {
    headerMode:'none',
    initialRouteName:'CartHome',
    defaultNavigationOptions: {
        ...TransitionPresets.SlideFromRightIOS,
      },
    
})


const AccountStack = createStackNavigator({
    Account : {screen: AccountHomeScreen},
    AccountInformation :{screen: AccountInformationScreen},
    ForgetPassword: {screen: ForgetPasswordScreen},
    FavouriteProduct:{screen: FavouriteScreen}
    
}, {
headerMode:'none', initialRouteName:'Account',
defaultNavigationOptions: {
    ...TransitionPresets.SlideFromRightIOS,
  },
})

const BottomTabs = createMaterialBottomTabNavigator({
Home: {
    screen: HomeStack,
    navigationOptions:{
        title:'',
        tabBarIcon: ({focused, activeColor, })=>{
            return ( 
                <View style={{ width:40, alignItems:'center',}}>
                  <Image source={ focused ? HOME_ACTIVE: HOME_IN_ACTIVE} style={{width:24, height:24 }}/>
                  <Text style={[commonStyle.regularText, focused && {color:'rgb(11,21,90)', fontWeight:'bold' },  {fontSize:10}]}>{'Home'}</Text>
                </View>
               
            )
        }
    }
},

Cart: {
    screen: CartStack,
    navigationOptions:{
        title:'',
        tabBarIcon: ({focused, activeColor, })=>{
            return ( 
                <View style={{ width:40, alignItems:'center', justifyContent:'center'}}>
                  <Text style={{color:"#F54F22", borderRadius:50,textAlign:'center', width:20, height:13, position:'absolute',top:-2, fontSize:10, backgroundColor:'#F9BD0A', elevation:3, right:0 }}>{'2'}</Text>
                  <Image source={CART} style={{width:50, height:50,  }}/>
                </View>
               
            )
        }
    }
},
Account: {
    screen: AccountStack,
    navigationOptions:{
        title:'',
        tabBarIcon: ({focused, activeColor, })=>{
            return ( 
                <View style={{ width:40, alignItems:'center',}}>
                <Image source={ focused ? ACCOUNT_ACTIVE: ACCOUNT_IN_ACTIVE} style={{width:24, height:24, }}/>
                <Text style={[commonStyle.regularText, focused && {color:'rgb(11,21,90)', fontWeight:'bold' },  {fontSize:10}]}>{'Account'}</Text>
              </View>
               
            )
        },
        
    },

}
//



},
{
    initialRouteName:"Home",
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#fff' },
   
},
);


/**************************** APP STACK ************************/

let AppStack = createStackNavigator({
    ShopMapScreen:ShopMapScreen,
    ShopListScreen: ShopListScreen,  
    ShopDashBoard:DashBoard,
    ProductDetailScreen: ProductDetailScreen,
    SearchScreen: SearchScreen,
    Profile: AccountInformationScreen,
    Cart: CartHomeScreen,
    CheckOutScreen: CheckOutScreen

},{
    initialRouteName:"ShopMapScreen",
    headerMode:'none'
})


/**************************** DRAWER ************************/

let DrawerStack =   createDrawerNavigator({
    App: AppStack
},
{
    initialRouteName:'App',
    contentComponent: (props)=>  <DrawerItem {...props} />
});

/**************************** AUTH ************************/

const AuthStack = createStackNavigator({
Login: {screen: LoginScreen},
Register: {screen: RegisterScreen}

}, {
    headerMode:'none'
}) 

/**************************** APP ************************/

const MainStack = createStackNavigator({
Splash: SplashScreen,
// DashBoard: DashBoard ,
Auth: AuthStack,
App: DrawerStack,
// App:BottomTabs,

}, 
{
    initialRouteName:'App',
    headerMode:'none',
    defaultNavigationOptions: {
        ...TransitionPresets.SlideFromRightIOS,
      },
}
)

export default AppNavigatior = createAppContainer(MainStack)