import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../theme/colors';

const AIOrb = () => {
  return (
    <View style={styles.outer}>
      <View style={styles.middle}>
        <View style={styles.inner} />
      </View>
    </View>
  );
};

export default AIOrb;

const styles = StyleSheet.create({
  outer: {
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: 'rgba(0,229,255,0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  middle: {
    width: 170,
    height: 170,
    borderRadius: 85,
    backgroundColor: 'rgba(0,229,255,0.25)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  inner: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: COLORS.primary,
  },
});
