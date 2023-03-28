import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import AddButton from './AddButton';

type props = {
  setShowCrypto: (value: boolean) => void;
};

interface cryptoType {
  id: string;
  name: string;
  symbol: string;
  img: string;
  price: number;
  price_last_24_hours: number;
}

export const CryptoItem = ({setShowCrypto}: props) => {
  const MarketCrypto: cryptoType = {
    id: '1',
    name: 'Bitcoin',
    symbol: 'BTC',
    img: 'https://res.cloudinary.com/dann9ji59/image/upload/v1679416498/React%20Native/bitcoin_lkstce.png',
    price: 7215.68,
    price_last_24_hours: 1.82,
  };

  const percentPerHour =
    MarketCrypto.price_last_24_hours < 0
      ? MarketCrypto.price_last_24_hours * -1
      : MarketCrypto.price_last_24_hours;

  const arrow =
    MarketCrypto.price_last_24_hours > 0
      ? {
          uri: 'https://res.cloudinary.com/dann9ji59/image/upload/v1679416497/React%20Native/arrow_up_rx21bk.png',
        }
      : {
          uri: 'https://res.cloudinary.com/dann9ji59/image/upload/v1679416497/React%20Native/arrow_down_awacys.png',
        };

  return (
    <View style={styles.screenInfoContainer}>
      <View style={styles.infoContainer}>
        <View style={styles.infoLeft}>
          <Image source={{uri: MarketCrypto.img}} style={styles.infLeftImg} />
          <View>
            <Text style={styles.infoLeftName}>{MarketCrypto.name}</Text>
            <Text style={styles.infoLeftSymbol}>{MarketCrypto.symbol}</Text>
          </View>
        </View>
        <View style={styles.infoRight}>
          <View style={styles.infoRightName}>
            <Text style={styles.infoRightPrice}>${MarketCrypto.price}</Text>
            {MarketCrypto.price_last_24_hours > 0 ? (
              <Text style={styles.infoRightPercentPositive}>
                <Image
                  source={arrow}
                  style={{width: 10, height: 10, paddingRight: 10}}
                />
                {percentPerHour}%
              </Text>
            ) : (
              <Text style={styles.infoRightPercentNegative}>
                <Image source={arrow} style={{width: 10, height: 10}} />
                {percentPerHour}%
              </Text>
            )}
          </View>
        </View>
      </View>
      <Text style={styles.line}></Text>
      <AddButton setShowCrypto={setShowCrypto} />
    </View>
  );
};

const styles = StyleSheet.create({
  screenInfoContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  infoContainer: {
    height: 100,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  infoLeft: {
    width: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  infLeftImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 8,
  },

  infoLeftName: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#212B36',
  },
  infoLeftSymbol: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#56626E',
  },

  infoRight: {
    width: '40%',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  infoRightName: {
    width: 100,
    height: 50,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  infoRightPrice: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#212B36',
  },

  infoRightPercentPositive: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#0A8150',
  },

  infoRightPercentNegative: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#DE3617',
  },

  line: {
    height: 1,
    width: '85%',
    backgroundColor: '#E4E8EB',
  },
});
