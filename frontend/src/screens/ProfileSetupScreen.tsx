import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform, Image } from 'react-native';

export const ProfileSetupScreen = ({ navigation }: any) => {
  const [nickname, setNickname] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Profile Setup</Text>
          </View>

          <View style={styles.content}>
            <Image
              source={require('../../assets/profile_setup.png')}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.question}>Nice to meet you!</Text>
            <Text style={styles.question}>What should I call you?</Text>

            <View style={[styles.inputContainer, nickname.length > 0 && styles.inputActive]}>
              <TextInput
                style={styles.input}
                placeholder="Enter your nickname"
                placeholderTextColor="#8F9098"
                value={nickname}
                onChangeText={setNickname}
                autoCorrect={false}
              />
            </View>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.replace('FirstMeet', { nickname: nickname || 'Nickname' })}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFEFB',
  },
  keyboardView: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 32,
    paddingTop: 48,
    paddingBottom: 24,
  },
  title: {
    fontWeight: '800',
    fontSize: 24,
    color: '#1F2024',
    letterSpacing: 0.24,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    gap: 32,
  },
  image: {
    width: 200,
    height: 200,
  },
  question: {
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 24,
    color: '#1F2024',
    textAlign: 'center',
  },
  inputContainer: {
    borderWidth: 1.5,
    borderColor: '#C5C6CC',
    borderRadius: 12,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    width: '100%',
  },
  inputActive: {
    borderColor: '#006FFD',
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#1F2024',
    height: '100%',
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
