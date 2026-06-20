import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface Props {
  command: string;
  response: string;
}

const JarvisResponse = ({ command, response }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>COMMAND</Text>

      <Text style={styles.text}>{command || 'Waiting...'}</Text>

      <Text style={styles.label}>JARVIS RESPONSE</Text>

      <Text style={styles.response}>{response || 'Ready'}</Text>
    </View>
  );
};

export default JarvisResponse;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111827',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#00E5FF44',
    marginBottom: 20,
  },
  response: {
    color: '#00E5FF',
    fontSize: 16,
    marginTop: 10,
  },

  label: {
    color: '#00E5FF',
    marginBottom: 10,
    letterSpacing: 2,
  },

  text: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});
