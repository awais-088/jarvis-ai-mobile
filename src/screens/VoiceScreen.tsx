import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const VoiceScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Voice Screen</Text>
    </View>
  );
};

export default VoiceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
