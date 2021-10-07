import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'


const MeetingRoom = () => {

    const [name, setName] = useState('');
    const [roomID, setRoomID] = useState('');

    return (
        <View style={styles.container}>
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
        </View>
    )
}

export default MeetingRoom

const styles = StyleSheet.create({})
