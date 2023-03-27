
import React, { FC, useState } from 'react'
import { FlatList, Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import { CryptoItem } from '../Components/CryptoItem';
import { Empty } from '../Components/Empty';
import CryptoData from "../Utils/CryptoData.json"

interface CryptoType {
  id: string;
  name: string;
  symbol: string;
  img: string;
  price: string;
  price_last_24_hours: string;
}

export const HomeScreen: FC = () => {
  const [showCrypto, setShowCrypto] = useState(false)
  return (
    <View style={style.Home__container}>
      <View style={style.Title__container}>
        <Text style={style.Title}>CryptoTracker Pro</Text>
        <Image source={{uri: "https://res.cloudinary.com/dann9ji59/image/upload/v1678890590/Foto_perfil_i1wjsc.jpg"}} style={style.img} />
      </View> 
      <View style={{flex: 1, marginTop: 20}}>
       {showCrypto === false
        ?<Empty setShowCrypto={setShowCrypto} />
        :<CryptoItem setShowCrypto={setShowCrypto}/>}
      </View>
    </View>
  );
}


const style = StyleSheet.create({
  
  Home__container:{
    flex:1,
    flexDirection: 'column'
  },
  Title__container:{
    flex: 0.20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#385775" ,
  },
  Title:{
    fontFamily:"Inter",
    fontSize:25,
    fontWeight: 'bold',
    color: "white",
    margin: 20
  },
  img: {
    width:50,
    height: 50,
    borderRadius: 50,
    margin: 20
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
