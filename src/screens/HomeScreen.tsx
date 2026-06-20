import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import SystemMetricCard from '../components/SystemMetricCard';
import AIOrb from '../components/AIOrb';
import GlassCard from '../components/GlassCard';
import { COLORS } from '../theme/colors';
import VoiceWave from '../components/VoiceWave';
import HUDPanel from '../components/HUDPanel';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const now = new Date();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.time}>{now.toLocaleTimeString()}</Text>
        <HUDPanel />
        <Text style={styles.system}>JARVIS OS</Text>

        <Text style={styles.name}>ONLINE</Text>

        <Text style={styles.subTitle}>Artificial Intelligence Assistant</Text>
        <Text style={styles.startup}>
          Hello Awais, how can I help you today?
        </Text>
        <View style={styles.orbContainer}>
          <AIOrb />
          <View style={styles.metricsRow}>
            <SystemMetricCard title="CPU" value="98%" />

            <View style={styles.metricGap} />

            <SystemMetricCard title="RAM" value="16GB" />
          </View>

          <View style={styles.metricsRow}>
            <SystemMetricCard title="NETWORK" value="ONLINE" />

            <View style={styles.metricGap} />

            <SystemMetricCard title="BATTERY" value="100%" />
          </View>
          <VoiceWave />
        </View>
        <View style={styles.metricsRow}>
          <SystemMetricCard title="CPU" value="14%" />

          <SystemMetricCard title="RAM" value="39%" />
        </View>

        <View style={styles.metricsRow}>
          <SystemMetricCard title="NETWORK" value="99%" />

          <SystemMetricCard title="AI CORE" value="ACTIVE" />
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
          <Text style={styles.cardTitle}>SYSTEM STATUS</Text>

          <Text style={styles.cardText}>Voice Engine Ready</Text>

          <Text style={styles.cardText}>AI Core Active</Text>

          <Text style={styles.cardText}>Device Control Pending</Text>
        </GlassCard>

        <GlassCard>
          <Text style={styles.cardTitle}>Quick Actions</Text>

          <Text style={styles.cardText}>WhatsApp • Chrome • Calls</Text>
        </GlassCard>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingBottom: 120,
  },

  content: {
    padding: 24,
    paddingTop: 60,
  },
  time: {
    color: '#00E5FF',
    fontSize: 16,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
  },
  greeting: {
    color: COLORS.gray,
    fontSize: 18,
  },
  startup: {
    color: '#00E5FF',
    marginTop: 12,
    fontSize: 15,
  },
  subTitle: {
    color: '#64748B',
    fontSize: 14,
    marginTop: 6,
  },
  metricsRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },

  metricGap: {
    width: 12,
  },

  name: {
    color: COLORS.text,
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 5,
  },
  system: {
    color: '#00E5FF',
    fontSize: 18,
    letterSpacing: 4,
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
