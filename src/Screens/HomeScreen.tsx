import React, {FC, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {CryptoItem} from '../Components/CryptoItem';
import {Empty} from '../Components/Empty';

export const HomeScreen: FC = () => {
  const [showCrypto, setShowCrypto] = useState(false);
  return (
    <View style={style.homeContainer}>
      <View style={style.titleContainer}>
        <Text style={style.title}>CryptoTracker Pro</Text>
        <Image
          source={{
            uri: 'https://res.cloudinary.com/dann9ji59/image/upload/v1678890590/Foto_perfil_i1wjsc.jpg',
          }}
          style={style.img}
        />
      </View>
      <View style={style.statusCrypto}>
        {showCrypto === false ? (
          <Empty setShowCrypto={setShowCrypto} />
        ) : (
          <CryptoItem setShowCrypto={setShowCrypto} />
        )}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  homeContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  titleContainer: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#385775',
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    margin: 20,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 20,
  },
  statusCrypto: {
    flex: 1,
    marginTop: 20,
  },
});
