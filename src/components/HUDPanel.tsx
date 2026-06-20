import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  title: string;
  value: string;
}

const HUDPanel = ({ title, value }: Props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default HUDPanel;

const styles = StyleSheet.create({
  card: {
    flex: 1,

    backgroundColor: '#0F172A',

    borderRadius: 20,

    margin: 6,

    padding: 18,

    borderWidth: 1,

    borderColor: '#00E5FF55',
  },

  title: {
    color: '#64748B',
  },

  value: {
    color: '#00E5FF',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
  },
});
