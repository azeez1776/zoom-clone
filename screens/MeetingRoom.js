import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'


const MeetingRoom = () => {

    const [name, setName] = useState('');
    const [roomID, setRoomID] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.startMeetingContainer}>
                <View style={styles.info}>
                    <TextInput
                        style={styles.textInput}
                        value={name}
                        onChangeText={text => setName(text)}
                        placeholder={'Enter your name'}
                        placeholderTextColor="#767476"
                    />
                </View>
                <View style={styles.info}>
                    <TextInput
                        style={styles.textInput}
                        value={name}
                        onChangeText={text => setName(text)}
                        placeholder={'Enter your name'}
                        placeholderTextColor="#767476"
                    />
                </View>
                <View style={styles.btn}>
                    <TouchableOpacity>

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
        fontSize: 18
    }


})

export default MeetingRoom
