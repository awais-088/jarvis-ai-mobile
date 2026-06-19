import React from 'react';
import { View, StyleSheet } from 'react-native';

const GlassCard = ({ children }: any) => {
  return <View style={styles.card}>{children}</View>;
};

export default GlassCard;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#111827',
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#1F2937',
  },
});
