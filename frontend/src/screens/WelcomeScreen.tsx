import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';

export const WelcomeScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Image
            source={require('../../assets/welcome.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Welcome to EmoP!</Text>
            <Text style={styles.subtitle}>Ready to feel small but sure accomplishments in your daily life?</Text>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('SignUp')}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFEFB',
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    gap: 32,
  },
  image: {
    width: 200,
    height: 214,
  },
  textContainer: {
    alignItems: 'center',
    width: '100%',
    gap: 16,
  },
  title: {
    fontWeight: '800',
    fontSize: 24,
    color: '#1F2024',
    letterSpacing: 0.24,
    textAlign: 'center',
  },
  subtitle: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22,
    color: '#2F3036',
    textAlign: 'center',
  },
  bottomContainer: {
    padding: 24,
    paddingBottom: 34,
  },
  button: {
    backgroundColor: '#29824E',
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 14,
    color: '#FFFFFF',
  },
});
