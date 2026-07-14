import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

export const SignUpScreen = ({ navigation }: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.header}>
            <Text style={styles.title}>Sign up</Text>
            <Text style={styles.subtitle}>Create an account to get started</Text>
          </View>

          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Name</Text>
              <View style={[styles.inputContainer, name.length > 0 && styles.inputActive]}>
                <TextInput
                  style={styles.input}
                  placeholder="test"
                  placeholderTextColor="#8F9098"
                  value={name}
                  onChangeText={setName}
                />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email Address</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="name@email.com"
                  placeholderTextColor="#8F9098"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Create a password"
                  placeholderTextColor="#8F9098"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <Text style={styles.eyeIcon}>{showPassword ? '👁️' : '👁️‍🗨️'}</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Confirm password</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Confirm password"
                  placeholderTextColor="#8F9098"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry={!showConfirmPassword}
                />
                <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                  <Text style={styles.eyeIcon}>{showConfirmPassword ? '👁️' : '👁️‍🗨️'}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.checkboxContainer}>
            <TouchableOpacity 
              style={[styles.checkbox, agree && styles.checkboxChecked]} 
              onPress={() => setAgree(!agree)}
            >
              {agree && <Text style={styles.checkIcon}>✓</Text>}
            </TouchableOpacity>
            <Text style={styles.termsText}>
              I've read and agree with the <Text style={styles.linkText}>Terms and Conditions</Text> and the <Text style={styles.linkText}>Privacy Policy</Text>.
            </Text>
          </View>

          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('Login')}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
        </ScrollView>
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
  scrollContent: {
    padding: 24,
    paddingTop: 44, // roughly status bar + padding
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontWeight: '800',
    fontSize: 18,
    color: '#1F2024',
    letterSpacing: 0.09,
    marginBottom: 8,
  },
  subtitle: {
    fontWeight: '400',
    fontSize: 14,
    color: '#71727A',
    lineHeight: 20,
  },
  form: {
    gap: 16,
    marginBottom: 24,
  },
  inputGroup: {
    gap: 8,
  },
  label: {
    fontWeight: '700',
    fontSize: 12,
    color: '#2F3036',
  },
  inputContainer: {
    borderWidth: 1.5,
    borderColor: '#C5C6CC',
    borderRadius: 12,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
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
  eyeIcon: {
    fontSize: 16,
    color: '#8F9098',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    gap: 12,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: '#C5C6CC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#006FFD',
    borderColor: '#006FFD',
  },
  checkIcon: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  termsText: {
    flex: 1,
    fontSize: 12,
    color: '#71727A',
    lineHeight: 16,
  },
  linkText: {
    fontWeight: '600',
    color: '#006FFD',
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
