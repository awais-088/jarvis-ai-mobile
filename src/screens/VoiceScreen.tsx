import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import { useVoice } from '../hooks/useVoice';
import AIOrb from '../components/AIOrb';
import JarvisResponse from '../components/JarvisResponse';
import { executeCommand } from '../services/command.service';
const VoiceScreen = () => {
  const { text, isListening, isProcessing, startListening, stopListening } =
    useVoice();
  const response = executeCommand(text);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.title}>VOICE COMMAND</Text>

        <AIOrb listening={isListening} processing={isProcessing} />

        <Text style={styles.status}>
          {isListening
            ? 'Listening...'
            : isProcessing
            ? 'Processing...'
            : 'Ready'}
        </Text>

        <JarvisResponse command={text} response={response} />

        <TouchableOpacity
          style={[styles.button, isListening && styles.activeButton]}
          onPress={isListening ? stopListening : startListening}
        >
          <Text style={styles.buttonText}>
            {isListening ? 'STOP LISTENING' : 'START LISTENING'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
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
  status: {
    color: '#00E5FF',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    fontSize: 16,
    fontWeight: '600',
  },
  scrollContent: {
    paddingBottom: 120,
  },
  buttonText: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
