import React, { useContext, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';

import LoginPage from '../screens/LoginPage';
import SignUpPage from '../screens/SignUpPage';
import HomePage from '../screens/HomePage';
import { AuthContext } from '../context/AuthProvider';
import NotificationPage from '../screens/NotificationPage';
import SearchPage from '../screens/SearchPage';

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
            <Tab.Screen name="post2" component={SearchPage} options={
                {
                    tabBarIcon: () => (
                        <Ionicons name="search" size={24} color="black" />
                    ),
                }
            } />
            <Tab.Screen name="ProfilePage2" component={NotificationPage} options={
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

export default function Navigation() {

    const { user, setUser } = useContext(AuthContext);

    useEffect(() => {
        SecureStore.getItemAsync('user')
            .then(userString => {
                if (userString) {
                    console.log(userString)
                    // setUser('Ants') // Todo
                }
                // setIsLoading(false);
            })
    }, [])

    //   if (isLoading) {
    //     return (
    //       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //         <ActivityIndicator size="large" />
    //       </View>
    //     );
    //   }

    return (
        <>
            {user ? (
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{
                        headerShown: false
                    }}>
                        <Stack.Screen name="Home" component={HomeTabNavigator} />
                    </Stack.Navigator>
                </NavigationContainer>
            ) : (
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{
                        headerShown: false
                    }}>
                        <Stack.Screen name="SignIn" component={LoginPage} />
                        <Stack.Screen name="SignUp" component={SignUpPage} />
                    </Stack.Navigator>
                </NavigationContainer>
            )
            }
        </>
    )
}