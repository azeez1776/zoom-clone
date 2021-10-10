import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'


const MeetingRoom = () => {

    const [name, setName] = useState('');
    const [roomID, setRoomID] = useState('');

    const startMeeting = () => {

    }

    return (
        <View style={styles.container}>
            <View style={styles.startMeetingContainer}>
                <View style={styles.info}>
                    <TextInput
                        style={styles.textInput}
                        value={roomID}
                        onChangeText={text => setRoomID(text)}
                        placeholder={'Enter your name'}
                        placeholderTextColor="#767476"
                    />
                </View>
                <View style={styles.info}>
                    <TextInput
                        style={styles.textInput}
                        value={name}
                        onChangeText={text => setName(text)}
                        placeholder={'Enter Room ID'}
                        placeholderTextColor="#767476"
                    />
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity
                        onPress={startMeeting}
                        style={styles.btn}
                    >
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Start Meeting</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1c1c1c',
        flex: 1
    },
    info: {
        width: '100%',
        height: 50,
        backgroundColor: '#373538',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#484648',
        padding: 12,
        justifyContent: 'center'
    },
    textInput: {
        backgroundColor: '#373538',
        fontSize: 18,
        color: 'white'
    },
    buttonView: {
        alignItems: 'center'
    },
    btn: {
        backgroundColor: '#0470DC',
        width: 350,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        borderRadius: 15
    }


})

export default MeetingRoom
