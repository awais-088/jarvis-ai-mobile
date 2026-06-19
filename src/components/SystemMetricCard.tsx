import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  title: string;
  value: string;
}

const SystemMetricCard = ({ title, value }: Props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default SystemMetricCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#111827',
    borderRadius: 18,
    padding: 20,
    margin: 5,
    borderWidth: 1,
    borderColor: '#00E5FF33',
  },

  title: {
    color: '#94A3B8',
    fontSize: 14,
  },

  value: {
    color: '#00E5FF',
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 8,
  },
});
