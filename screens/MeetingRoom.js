import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import StartMeeting from '../components/StartMeeting';


const MeetingRoom = () => {

    const [name, setName] = useState('');
    const [roomID, setRoomID] = useState('');

    const startMeeting = () => {

    }

    return (
        <View style={styles.container}>
            <StartMeeting
                name={name}
                roomID={roomID}
                setName={setName}
                setRoomID={setRoomID}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1c1c1c',
        flex: 1
    },


})

export default MeetingRoom
