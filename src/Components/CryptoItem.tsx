import { View, Text , Image, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'

export const CryptoItem = ({setShowCrypto}: any) => {

  const MarketCrypto : any = {
      "id": '1',
      "name": "Bitcoin",
      "symbol": "BTC",
      "img": "https://res.cloudinary.com/dann9ji59/image/upload/v1679416498/React%20Native/bitcoin_lkstce.png",
      "price": "7,215.68",
      "price_last_24_hours":"1.82"
  }
  

  let percentPerHour = MarketCrypto.price_last_24_hours < 0 
    ? MarketCrypto.price_last_24_hours * -1 
    : MarketCrypto.price_last_24_hours

  let arrow = MarketCrypto.price_last_24_hours > 0
  ? {uri:"https://res.cloudinary.com/dann9ji59/image/upload/v1679416497/React%20Native/arrow_up_rx21bk.png"}
  : {uri:"https://res.cloudinary.com/dann9ji59/image/upload/v1679416497/React%20Native/arrow_down_awacys.png"}

  return (
    <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>    
          <View style={styles.Info__container}>
            <View style={styles.Info__left}>
              <Image source={{uri: MarketCrypto.img}} style={styles.Info__left__img}/>
                <View >
                  <Text style={styles.Info__left__name}>{MarketCrypto.name}</Text>
              <Text style={styles.Info__left__symbol}>{MarketCrypto.symbol}</Text>
                </View>
            </View>
            <View style={styles.Info__right}>        
              <View style={styles.Info__right__name}>
              <Text style={styles.Info__right__price}>${MarketCrypto.price}</Text>
            {MarketCrypto.price_last_24_hours > 0 
              ? <Text style={styles.Info__right__percent}>
                  <Image source={arrow} style={{width:10, height:10, paddingRight:10}} />{percentPerHour}%
                </Text>
              : <Text style={styles.Info__right__percent__negative}>
                  <Image source={arrow} style={{width:10, height:10}} />{percentPerHour}%
                </Text>}
              </View>
            </View>
          </View>
            <Text style={styles.line}></Text>
            <TouchableOpacity style={styles.Button__container} onPress={()=>setShowCrypto(true)}>
                <Text style={styles.Button__add}>+ Add a Cryptocurrency</Text>
            </TouchableOpacity> 
        </View> 
  )
}

const styles = StyleSheet.create({
  
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
  Button__container: {
    alignItems:'center',
    justifyContent:'flex-start',
    marginTop:20,
    marginBottom:20
  },

  Button__add: {
    fontFamily: "Inter",
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: '#385775',
  }

})




