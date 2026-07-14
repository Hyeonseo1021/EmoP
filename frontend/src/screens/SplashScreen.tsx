import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export const SplashScreen = ({ navigation }: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Welcome');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/splash.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>EmoP</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFEFB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 214,
    marginBottom: 5,
  },
  title: {
    fontWeight: '800',
    fontSize: 24,
    color: '#000000',
    letterSpacing: 0.24,
  },
});
