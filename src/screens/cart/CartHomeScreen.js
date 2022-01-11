import React, {useEffect} from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Header from '../../components/header/index';
import { PLUS, MINUS } from '../../theme/images';
import styles from './style';
import commonStyle from '../../theme/style';
import HorizontalLine from '../../components/horizontalLine/index';
import Button from '../../components/button/index';
import EmptyCart from '../../components/UI/EmptyCart';

const CartHomeScreen = ({navigation, cartItems, totalAmount, subTotalCounter, clearCartAction, addItemToCart, removeFromCart}) => {


   

    useEffect(()=>{

    }, [cartItems])

 function clearCart(){
    clearCartAction()
 }

function ItemInCart({price, sum, image, name, quantity, id}) {
    var product ={ price, sum, name, quantity, id }

   return ( <View style={[styles.itemStyle]}>
       <View style={[styles.imageView]}>
       <Image source={require('../../../assets/pepsi.jpg')} resizeMode={'contain'} style={{width:50, height:50,}} />
       </View>
       <View style={{paddingTop:3, flex:1, justifyContent:'space-between', paddingLeft:10 }}>

       <Text style={commonStyle.regularText}>{name}</Text>
      {/* cart todo: */}
      <View style={{ width:70, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
       <TouchableOpacity activeOpacity={0.8} onPress={()=>removeFromCart(product)} style={[styles.cartButton]}>
          <Image source={MINUS} style={{width:12,height:12, tintColor:'#fff'}}/>
       </TouchableOpacity>
       <Text style={[commonStyle.regularText,]}>{quantity}</Text>
       <TouchableOpacity onPress={()=>addToCart(product)} activeOpacity={0.8} style={[styles.cartButton]}>
          <Image source={PLUS} style={{width:12,height:12, tintColor:'#fff'}}/>
       </TouchableOpacity>
       </View>
       </View>
       <Text style={[commonStyle.regularText, {alignSelf:'flex-end', fontWeight:'bold', opacity:0.8}]}>{sum}</Text>

    </View>)
}



    return (
        <View style={[styles.container]}>
            <Header title={'Cart'} goback width route={'Home'} home navigation={navigation} />
          { cartItems.length !== 0 ?   <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{bottom:10,   alignItems:'center'}}>
                {cartItems.map((item)=>{
                    return (
                        <ItemInCart {...item}/>
                    )
                })}
                {/* cart detail */}
                <View style={[styles.cartView]}>
                <Text style={[commonStyle.heading]}>{'Cart detail'}</Text>
                </View>
                <View style={[styles.cartDetail]}>
                    <View style={[styles.cartItemStyle]}>
                    <Text style={[commonStyle.h3, styles.letterSpacingStyle]}>{`Subtotal (${subTotalCounter}):`}</Text>
                    <Text style={[commonStyle.h3, styles.letterSpacingStyle]}>{`Rs.${totalAmount}`}</Text>
                    </View>
                    <View style={[styles.cartItemStyle]}>
                    <Text style={[commonStyle.h3, styles.letterSpacingStyle]}>{'Discount :'}</Text>
                    <Text style={[commonStyle.h3,styles.letterSpacingStyle]}>{'Nill'}</Text>
                    </View>
                    <View style={[styles.cartItemStyle]}>
                    <Text style={[commonStyle.h3, styles.letterSpacingStyle]}>{'Packing / Delivery fee :'}</Text>
                    <Text style={[commonStyle.h3, styles.letterSpacingStyle]}>{'Rs.0'}</Text>
                    </View>
                </View>
                <HorizontalLine/>
                <View style={[styles.cartItemStyle, {padding:16}]}>
                    <Text style={[commonStyle.h3,{fontWeight:'bold', letterSpacing:2}]}>{'Total :'}</Text>
                    <Text style={[commonStyle.h3, {fontWeight:'bold', letterSpacing:2}]}>{`Rs.${totalAmount}/-`}</Text>
                    </View>
                    <View style={{flex:1,width:'100%', marginTop:20}}>
                    <Button onButtonPress={()=>navigation.navigate('CheckOut')} title={'Proceed to checkout'} />

                    </View>
                    <View style={{marginTop:10, width:'100%'}}>
                    <Button title={'Clear cart'} onButtonPress={clearCart} />

                    </View>

            </ScrollView>
            :  <EmptyCart navigation={navigation}/> }
        </View>
    )
}

export default CartHomeScreen

