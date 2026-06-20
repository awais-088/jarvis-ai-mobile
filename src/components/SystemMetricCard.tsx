import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  title: string;
  value: string;
};

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

    borderRadius: 20,

    padding: 20,

    borderWidth: 1,

    borderColor: '#1F2937',
  },

  title: {
    color: '#94A3B8',
    fontSize: 12,
  },

  value: {
    color: '#00E5FF',
    fontSize: 24,
    fontWeight: '700',
    marginTop: 8,
  },
});
