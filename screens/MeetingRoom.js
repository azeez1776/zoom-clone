import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { io } from 'socket.io-client';
import StartMeeting from '../components/StartMeeting';
import { Camera } from 'expo-camera';

let socket;

const MeetingRoom = () => {


    const [name, setName] = useState('');
    const [roomID, setRoomID] = useState('');
    const [activeUsers, setActiveUsers] = useState();

    const joinRoom = () => {
        socket.emit('join-room', { roomID: roomID, userName: name })
    }

    useEffect(() => {
        const API_URL = 'http://c250-196-249-97-238.ngrok.io/';
        socket = io(API_URL);
        socket.on('connection', () => {
            console.log('connected');
        });
        socket.on('all-users', users => {
            console.log("Active Users");
            console.log(users)
            setActiveUsers(users)
        })
    }, [])

    return (
        <View style={styles.container}>
            <StartMeeting
                name={name}
                roomID={roomID}
                setName={setName}
                setRoomID={setRoomID}
                joinRoom={joinRoom}
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
