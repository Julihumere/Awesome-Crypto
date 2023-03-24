import { View, Text , Image, StyleSheet} from 'react-native'
import React from 'react'

type props = {
  MarketCrypto: any
}

export const CryptoItem = ({MarketCrypto}: props) => {

  let percentPerHour = MarketCrypto.price_last_24_hours < 0 
    ? MarketCrypto.price_last_24_hours * -1 
    : MarketCrypto.price_last_24_hours

  let arrow = MarketCrypto.price_last_24_hours > 0
  ? {uri:"https://res.cloudinary.com/dann9ji59/image/upload/v1679416497/React%20Native/arrow_up_rx21bk.png"}
  : {uri:"https://res.cloudinary.com/dann9ji59/image/upload/v1679416497/React%20Native/arrow_down_awacys.png"}

  return (
    <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>    
          <View style={style.Info__container}>
            <View style={style.Info__left}>
              <Image source={{uri: MarketCrypto.img}} style={style.Info__left__img}/>
                <View >
                  <Text style={style.Info__left__name}>{MarketCrypto.name}</Text>
              <Text style={style.Info__left__symbol}>{MarketCrypto.symbol}</Text>
                </View>
            </View>
            <View style={style.Info__right}>        
              <View style={style.Info__right__name}>
              <Text style={style.Info__right__price}>${MarketCrypto.price}</Text>
            {MarketCrypto.price_last_24_hours > 0 
              ? <Text style={style.Info__right__percent}>
                  <Image source={arrow} style={{width:10, height:10, paddingRight:10}} />{percentPerHour}%
                </Text>
              : <Text style={style.Info__right__percent__negative}>
                  <Image source={arrow} style={{width:10, height:10}} />{percentPerHour}%
                </Text>}
              </View>
            </View>
          </View>
            <Text style={style.line}></Text>
        </View> 
  )
}

const style = StyleSheet.create({
  
  Info__container:{
    height: 100,
    width: "100%",
    flexDirection: 'row',
    alignItems:"center",
    justifyContent: 'space-between',
  },

  Info__left:{
    flex: 0.4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "flex-start",
    marginLeft:30,
  },  

  Info__left__img:{
    width:50,
    height: 50,
    borderRadius: 50,
    margin: 8,
  },

  Info__left__name:{
    fontFamily: "Inter",
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#212B36'
  },
  Info__left__symbol:{
    fontFamily: "Inter",
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: "#56626E"
  },

  Info__right:{
    flex: 0.4,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Info__right__name:{
    width: 100,
    height:50,
    alignItems:'flex-end',
    justifyContent:'center'
  },

  Info__right__price:{
    fontFamily: "Inter",
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#212B36',
  },

  Info__right__percent:{
    fontFamily: "Inter",
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: "#0A8150",
  },

  Info__right__percent__negative: {
    fontFamily: "Inter",
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: "#DE3617"
  },

  line: {
    height: 1,
    width: "85%",
    backgroundColor:'#E4E8EB'
  },

})




