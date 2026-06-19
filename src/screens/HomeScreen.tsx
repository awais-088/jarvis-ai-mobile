import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

import AIOrb from '../components/AIOrb';
import GlassCard from '../components/GlassCard';
import { COLORS } from '../theme/colors';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.greeting}>Good Evening</Text>

      <Text style={styles.name}>Alexander</Text>

      <View style={styles.orbContainer}>
        <AIOrb />
      </View>

      <GlassCard>
        <Text style={styles.cardTitle}>Voice Assistant</Text>

        <Text style={styles.cardText}>Ready to listen...</Text>
      </GlassCard>

      <GlassCard>
        <Text style={styles.cardTitle}>AI Status</Text>

        <Text style={styles.cardText}>Online</Text>
      </GlassCard>

      <GlassCard>
        <Text style={styles.cardTitle}>Quick Actions</Text>

        <Text style={styles.cardText}>WhatsApp • Chrome • Calls</Text>
      </GlassCard>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  content: {
    padding: 24,
    paddingTop: 60,
  },

  greeting: {
    color: COLORS.gray,
    fontSize: 18,
  },

  name: {
    color: COLORS.text,
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 5,
  },

  orbContainer: {
    alignItems: 'center',
    marginVertical: 40,
  },

  cardTitle: {
    color: COLORS.text,
    fontSize: 18,
    fontWeight: '600',
  },

  cardText: {
    color: COLORS.gray,
    marginTop: 8,
  },
});
