import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import { io } from 'socket.io-client';
import StartMeeting from '../components/StartMeeting';
import { Camera } from 'expo-camera';

let socket;

const MeetingRoom = () => {


    const [name, setName] = useState('');
    const [roomID, setRoomID] = useState('');
    const [activeUsers, setActiveUsers] = useState();
    const [startCamera, setStartCamera] = useState(false);

    const joinRoom = () => {
        switchCamera();
        setStartCamera(true)
        socket.emit('join-room', { roomID: roomID, userName: name })
    }

    const switchCamera = async () => {
        const { status } = await Camera.requestPermissionsAsync();
        if (status === 'granted') setStartCamera(true);
        else Alert.alert('Access Denied');
    }

    useEffect(() => {
        const API_URL = 'http://996e-196-249-98-53.ngrok.io/';
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
            {startCamera ? (
                <View>
                    <Camera
                        type="front"
                        style={{ width: '100%', height: 600 }}
                    />
                </View>
            ) :
                (
                    <StartMeeting
                        name={name}
                        roomID={roomID}
                        setName={setName}
                        setRoomID={setRoomID}
                        joinRoom={joinRoom}
                    />
                )
            }
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
