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
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                />
                <Stack.Screen
                    name="Meeting Room"
                    component={MeetingRoom}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
