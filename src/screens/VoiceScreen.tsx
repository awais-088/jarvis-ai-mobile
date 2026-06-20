import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import useVoice from '../hooks/useVoice';
import AIOrb from '../components/AIOrb';
import JarvisResponse from '../components/JarvisResponse';
import { executeCommand } from '../services/command.service';
const VoiceScreen = () => {
  const { text, isListening, startListening, stopListening } = useVoice();
  const response = executeCommand(text);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>VOICE COMMAND</Text>

      <AIOrb />

      <JarvisResponse command={text} response={response} />

      <TouchableOpacity
        style={[styles.button, isListening && styles.activeButton]}
        onPress={isListening ? stopListening : startListening}
      >
        <Text style={styles.buttonText}>
          {isListening ? 'STOP LISTENING' : 'START LISTENING'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default VoiceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617',
    padding: 24,
    justifyContent: 'center',
  },

  title: {
    color: '#00E5FF',
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 40,
  },

  button: {
    backgroundColor: '#00E5FF',
    padding: 18,
    borderRadius: 20,
  },

  activeButton: {
    backgroundColor: '#EF4444',
  },

  buttonText: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
