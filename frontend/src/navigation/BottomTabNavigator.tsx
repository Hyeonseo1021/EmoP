import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import { View, Text } from 'react-native';
import { theme } from '../constants/theme';

const Tab = createBottomTabNavigator();

// Placeholder for other screens
const ChallengeScreen = () => <View style={{flex:1, justifyContent:'center', alignItems:'center'}}><Text>Challenge Screen</Text></View>;
const ChatScreen = () => <View style={{flex:1, justifyContent:'center', alignItems:'center'}}><Text>Chat with Roti Screen</Text></View>;
const ProfileScreen = () => <View style={{flex:1, justifyContent:'center', alignItems:'center'}}><Text>Profile Screen</Text></View>;

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textSecondary,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          borderTopWidth: 1,
          borderTopColor: theme.colors.border,
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: '홈' }} />
      <Tab.Screen name="Challenge" component={ChallengeScreen} options={{ tabBarLabel: '챌린지' }} />
      <Tab.Screen name="Chat" component={ChatScreen} options={{ tabBarLabel: '로티와 대화' }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarLabel: '프로필' }} />
    </Tab.Navigator>
  );
};
