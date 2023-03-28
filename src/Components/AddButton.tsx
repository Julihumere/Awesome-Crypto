import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

type props = {
  setShowCrypto: (value: boolean) => void;
};

export default function AddButton({setShowCrypto}: props) {
  return (
    <View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => setShowCrypto(true)}>
        <Text style={styles.buttonAdd}>+ Add a Cryptocurrency</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20,
    marginBottom: 20,
  },

  buttonAdd: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: '#385775',
  },
});
