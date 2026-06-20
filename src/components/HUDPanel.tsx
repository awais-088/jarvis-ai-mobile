import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HUDPanel = () => {
  const hour = new Date().getHours();

  let greeting = 'Hello';

  if (hour < 12) greeting = 'Good Morning';
  else if (hour < 18) greeting = 'Good Afternoon';
  else greeting = 'Good Evening';

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>{greeting}</Text>

      <Text style={styles.status}>Jarvis Core Online</Text>
    </View>
  );
};

export default HUDPanel;

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },

  greeting: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '700',
  },

  status: {
    color: '#00E5FF',
    fontSize: 14,
    marginTop: 4,
    letterSpacing: 1,
  },
});
