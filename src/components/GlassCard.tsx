import React from 'react';
import { View, StyleSheet } from 'react-native';

const GlassCard = ({ children }: any) => {
  return <View style={styles.card}>{children}</View>;
};

export default GlassCard;

const styles = StyleSheet.create({
  card: {
    width: '100%',

    backgroundColor: 'rgba(17,24,39,0.85)',

    borderRadius: 24,

    padding: 20,

    marginBottom: 18,

    borderWidth: 1,

    borderColor: '#00E5FF55',

    shadowColor: '#00E5FF',

    shadowOffset: {
      width: 0,
      height: 0,
    },

    shadowOpacity: 0.3,

    shadowRadius: 12,

    elevation: 8,
  },
});
