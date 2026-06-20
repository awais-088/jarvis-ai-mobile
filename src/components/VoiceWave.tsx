import React from 'react';
import { View, StyleSheet } from 'react-native';

const VoiceWave = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.bar, styles.h20]} />
      <View style={[styles.bar, styles.h30]} />
      <View style={[styles.bar, styles.h40]} />
      <View style={[styles.bar, styles.h50]} />
      <View style={[styles.bar, styles.h60]} />
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
  h20: { height: 20 },
  h30: { height: 30 },
  h40: { height: 40 },
  h50: { height: 50 },
  h60: { height: 60 },
});
