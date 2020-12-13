import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { WelcomeScreen, InboxScreen, MessageDetailScreen, LoginScreen, ComposeScreen } from './app/screens';
import { LoggedInCheck, Screen, TabBar } from './app/components';
import { AuthContext } from './app/contexts/AuthContext';

const Link = ({ title, to }) => {
    const navigation = useNavigation();
    
    return (
        <Button 
            title="Click"
            onPress={() => navigation.navigate('MessageDetail', { id: 1 })}
        />
    )
}

const Stack = createStackNavigator();

const StackNavigator = () => (
    <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Inbox" component={InboxScreen} options={{
            headerShown: false
        }}/>
        <Stack.Screen name="MailDetails" component={MessageDetailScreen}/>
        <Stack.Screen name="CreateMail" component={ComposeScreen}/>
    </Stack.Navigator>
)

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
    <Tab.Navigator tabBarOptions={{
        activeBackgroundColor: '#F5F5F5',
        activeTintColor: 'tomato'
    }}>
        <Tab.Screen 
            name="Inbox" 
            component={StackNavigator}
            options={{
                tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="inbox" size={ size } color={ color } />
            }}
        />
        <Tab.Screen 
            name="Account" 
            component={WelcomeScreen}
            options={{
                tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="account-outline" size={ size } color={ color } />
            }}
        />
    </Tab.Navigator>
)


export default function App() {
    const [ isLoading, setIsLoading ] = useState(true)
    const [ login, setLogin ] = useState(false)
    
    const appLoading = () => {
        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }
    
    useEffect(() => {
        appLoading();
    }, [])
    
    return (
        <>
            <AuthContext.Provider value={ [login, setLogin] }>
                { isLoading ? <WelcomeScreen/> : 
                    <LoggedInCheck 
                        is={ <NavigationContainer><TabNavigator/></NavigationContainer> }
                        isNot={ <LoginScreen /> }
                    />
                }
            </AuthContext.Provider>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
