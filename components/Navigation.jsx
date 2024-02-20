import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import LoginPage from '../screens/LoginPage';
import SignUpPage from '../screens/SignUpPage';
import HomePage from '../screens/HomePage';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            // headerShown: false,
            tabBarShowLabel: false,
        }}>
            <Tab.Screen name="Home2" component={HomePage} options={
                {
                    tabBarIcon: () => (
                        <Ionicons name="home" size={24} color="black" />
                    ),
                }
            } />
            <Tab.Screen name="post2" component={HomePage} options={
                {
                    tabBarIcon: () => (
                        <Ionicons name="search" size={24} color="black" />
                    ),
                }
            } />
            <Tab.Screen name="ProfilePage2" component={HomePage} options={
                {
                    tabBarIcon: () => (
                        <Ionicons name="notifications" size={24} color="black" />
                    ),
                }
            } />
        </Tab.Navigator>
    );
}

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="SignIn" component={LoginPage} />
                <Stack.Screen name="SignUp" component={SignUpPage} />
                <Stack.Screen name="Home" component={HomeTabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation