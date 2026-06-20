import React, { useEffect, useRef } from 'react';
import { Animated, View, StyleSheet } from 'react-native';

type Props = {
  listening?: boolean;
  processing?: boolean;
};

const AIOrb = ({ listening, processing }: Props) => {
  const pulse = useRef(new Animated.Value(1)).current;

  const rotate = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, {
          toValue: 1.15,
          duration: 1200,
          useNativeDriver: true,
        }),

        Animated.timing(pulse, {
          toValue: 1,
          duration: 1200,
          useNativeDriver: true,
        }),
      ]),
    ).start();

    Animated.loop(
      Animated.timing(rotate, {
        toValue: 1,
        duration: 6000,
        useNativeDriver: true,
      }),
    ).start();
  }, [pulse, rotate]);

  const spin = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const innerColorStyle = processing
    ? styles.processing
    : listening
    ? styles.listening
    : styles.ready;
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.rotatingRing,
          {
            transform: [{ rotate: spin }],
          },
        ]}
      />

      <Animated.View
        style={[
          styles.outer,
          {
            transform: [{ scale: pulse }],
          },
        ]}
      >
        <View style={styles.middle}>
          <View style={[styles.inner, innerColorStyle]} />
        </View>
      </Animated.View>
    </View>
  );
};

export default AIOrb;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ready: {
    backgroundColor: '#00E5FF',
  },

  listening: {
    backgroundColor: '#00FFAA',
  },

  processing: {
    backgroundColor: '#FFD700',
  },
  rotatingRing: {
    position: 'absolute',

    width: 250,
    height: 250,

    borderRadius: 125,

    borderWidth: 2,

    borderColor: '#00E5FF',

    borderStyle: 'dashed',
  },

  outer: {
    width: 230,
    height: 230,

    borderRadius: 115,

    backgroundColor: 'rgba(0,229,255,0.08)',

    justifyContent: 'center',
    alignItems: 'center',
  },

  middle: {
    width: 170,
    height: 170,

    borderRadius: 85,

    backgroundColor: 'rgba(0,229,255,0.15)',

    justifyContent: 'center',
    alignItems: 'center',
  },

  inner: {
    width: 100,
    height: 100,
    borderRadius: 50,

    borderWidth: 2,
    borderColor: '#67E8F9',

    shadowColor: '#00E5FF',
    shadowOpacity: 1,
    shadowRadius: 25,

    elevation: 20,
  },
});
