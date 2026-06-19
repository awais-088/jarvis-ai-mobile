import React from 'react';
import { View, StyleSheet } from 'react-native';

const VoiceWave = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.bar, { height: 20 }]} />
      <View style={[styles.bar, { height: 40 }]} />
      <View style={[styles.bar, { height: 60 }]} />
      <View style={[styles.bar, { height: 30 }]} />
      <View style={[styles.bar, { height: 50 }]} />
    </View>
  );
};

export default VoiceWave;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',

    marginTop: 20,
  },

  bar: {
    width: 8,
    marginHorizontal: 4,

    backgroundColor: '#00E5FF',

    borderRadius: 10,
  },
});
