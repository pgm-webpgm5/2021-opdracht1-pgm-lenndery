import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { WelcomeScreen, InboxScreen, MessageDetailScreen } from './app/screens';
import { Screen, TabBar } from './app/components';

const Link = ({ title, to }) => {
    const navigation = useNavigation();
    
    return (
        <Button 
            title="Click"
            onPress={() => navigation.navigate('MessageDetail', { id: 1 })}
        />
    )
}

// const Messages = ({ navigation }) => (
//     <Screen>
//         <Link />
//         <Text>Messages</Text>
//     </Screen>
// )

const MessageDetail = ({ route }) => (
    <Screen>
        <Text>Message Detail: { route.params.id }</Text>
    </Screen>
)

const Stack = createStackNavigator();

const StackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Inbox" component={InboxScreen} options={{
            headerShown: false
        }}/>
        <Stack.Screen name="MailDetails" component={MessageDetailScreen}/>
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
            { isLoading ? <WelcomeScreen/> : 
                <NavigationContainer>
                    <TabNavigator/>
                </NavigationContainer>
            }
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
