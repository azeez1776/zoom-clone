import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'

const Header = () => {
    return (
        <View>
            <Entypo name="notification" size={30} color="#efefef" />
            <Text style={styles.heading}>Meet & Chat</Text>
            <Entypo name="new-message" size={30} color="#efefef" />

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    heading: {
        color: '#efefef',
        fontSize: 20,
        fontWeight: '700'
    }
})
