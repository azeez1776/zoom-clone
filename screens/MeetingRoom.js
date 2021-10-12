import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, SafeAreaView } from 'react-native'
import { io } from 'socket.io-client';
import StartMeeting from '../components/StartMeeting';
import { Camera } from 'expo-camera';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

let socket;
const menuItems = [
    {
        id: 1,
        name: 'microphone',
        text: 'Mute'
    },
    {
        id: 2,
        name: 'video-camera',
        text: 'Stop Video'
    },
    {
        id: 3,
        name: 'upload',
        text: 'Share Content'
    },
    {
        id: 4,
        name: 'group',
        text: 'Participants'
    },
]


const MeetingRoom = () => {


    const [name, setName] = useState('');
    const [roomID, setRoomID] = useState('');
    const [activeUsers, setActiveUsers] = useState(['mariki', 'tony']);
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
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={styles.master}>
                        <View style={styles.mainView}>
                            <View style={styles.cameraContainer}>
                                <Camera
                                    type="front"
                                    style={{
                                        width: activeUsers === 0 ? '100%' : 200,
                                        height: activeUsers === 0 ? 600 : 200
                                    }}
                                />
                            </View>
                            <View style={styles.userInvite}>
                                {activeUsers.map((user, id) => {
                                    return (
                                        <View style={styles.userView} key={id}>
                                            <Text style={styles.textUser}>{user}</Text>
                                        </View>
                                    )
                                })}
                            </View>
                        </View>
                    </View>
                    <View style={styles.menu} >
                        {menuItems.map((icon, id) => {
                            return (
                                <TouchableOpacity
                                    style={styles.tile}
                                    key={id}
                                >
                                    <FontAwesome name={icon.name} size={24} color={"#efefef"} />
                                    <Text style={styles.textTile}>{icon.text}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </SafeAreaView>
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
    tile: {
        alignItems: 'center',
        margin: 5
    },
    textTile: {
        color: 'white',
        marginTop: 10
    },
    menu: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    mainView: {
        flex: 1,
        justifyContent: 'center',
        // backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '100%'
    },
    textUser: {
        color: 'white'
    },
    userView: {
        height: 200,
        width: 200,
        backgroundColor: 'grey',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    userInvite: {
        flexDirection: 'row',
        // flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    },
    master: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'black'
    }


})

export default MeetingRoom
