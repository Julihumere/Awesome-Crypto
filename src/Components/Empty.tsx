import react from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import AddButton from './AddButton';

type props = {
  setShowCrypto: (value: boolean) => void;
};

export const Empty = ({setShowCrypto}: props) => {
  return (
    <View style={styles.emptyContainer}>
      <Image style={styles.emptyIcon} source={require('../assets/sad.png')} />
      <Text style={styles.emptyText}>No crypto currency</Text>
      <AddButton setShowCrypto={setShowCrypto} />
    </View>
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  emptyIcon: {
    width: 100,
    height: 100,
  },
  emptyText: {
    fontSize: 30,
    fontWeight: '700',
  },
});
