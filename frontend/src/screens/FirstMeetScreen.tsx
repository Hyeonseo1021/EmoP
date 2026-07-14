import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';

export const FirstMeetScreen = ({ route, navigation }: any) => {
  const nickname = route?.params?.nickname || 'Nickname';

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Hello, {nickname}!</Text>
          
          <Image
            source={require('../../assets/gift.png')}
            style={styles.image}
            resizeMode="contain"
          />
          
          <View style={styles.textContainer}>
            <Text style={styles.bodyText}>I'll be your guide.</Text>
            <Text style={styles.bodyText}>Here is a little Seed Potato for you.</Text>
            <Text style={styles.bodyText}>Let's grow it together!</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.replace('MainTabs')}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Accept Gift</Text>
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
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 64,
  },
  title: {
    fontWeight: '400',
    fontSize: 20,
    color: '#1F2024',
    marginBottom: 48,
    textAlign: 'center',
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 48,
  },
  textContainer: {
    width: '100%',
    paddingLeft: 16,
  },
  bodyText: {
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 28,
    color: '#1F2024',
  },
  footer: {
    padding: 24,
  },
  button: {
    backgroundColor: '#29824E',
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 14,
    color: '#FFFFFF',
  },
});
