import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const VoiceScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>JARVIS VOICE</Text>

      <View style={styles.waveContainer}>
        <View style={styles.circleOuter}>
          <View style={styles.circleMiddle}>
            <TouchableOpacity style={styles.circleInner}>
              <Text style={styles.mic}>🎤</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Text style={styles.status}>Tap to Speak</Text>
    </View>
  );
};

export default VoiceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050816',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: '#00E5FF',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 3,
  },

  waveContainer: {
    marginVertical: 50,
  },

  circleOuter: {
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: 'rgba(0,229,255,0.08)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  circleMiddle: {
    width: 190,
    height: 190,
    borderRadius: 95,
    backgroundColor: 'rgba(0,229,255,0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  circleInner: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#00E5FF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  mic: {
    fontSize: 42,
  },

  status: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});
