import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import MeetingRoom from './screens/MeetingRoom'
import Home from './screens/Home'

const Navigation = () => {

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={Home}
            >
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Meeting Room"
                    component={MeetingRoom}
                    options={{
                        title: 'Start a Meeting',
                        headerStyle: {
                            backgroundColor: '#1c1c1c'
                        },
                        headerTintColor: 'white'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
