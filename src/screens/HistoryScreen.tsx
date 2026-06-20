import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import { commandHistory } from '../store/historyStore';

const HistoryScreen = () => {
  return (
    <FlatList
      style={styles.container}
      data={commandHistory}
      keyExtractor={(_, i) => i.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.command}>{item.command}</Text>

          <Text style={styles.time}>{item.time}</Text>
        </View>
      )}
    />
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617',
    padding: 20,
  },

  card: {
    backgroundColor: '#111827',
    padding: 20,
    borderRadius: 20,
    marginBottom: 15,
  },

  command: {
    color: '#fff',
  },

  time: {
    color: '#00E5FF',
    marginTop: 5,
  },
});
