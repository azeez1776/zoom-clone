import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { io } from 'socket.io-client';
import StartMeeting from '../components/StartMeeting';


const MeetingRoom = () => {

    const [name, setName] = useState('');
    const [roomID, setRoomID] = useState('');

    useEffect(() => {
        const API_URL = 'http://localhost:3001/';
        const socket = io(API_URL);
        socket.on('connection', () => {
            console.log('connected');
        })
    }, [])

    const joinRoom = () => {
        socket.emit('join-room', { roomID: roomID, userName: name })
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
