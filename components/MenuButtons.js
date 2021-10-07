import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const MenuButtons = ({ navigation }) => {

    const items = [
        {
            id: 1,
            name: 'video-camera',
            title: 'Start Meeting',
            customColor: '#ff751f'
        },
        {
            id: 2,
            name: 'plus-square',
            title: 'Join',
        },
        {
            id: 3,
            name: 'calendar',
            title: 'Schedule',
        },
        {
            id: 4,
            name: 'upload',
            title: 'Share Screen',
        }
    ];

    const openMeeting = () => navigation.navgate('Meeting Room')

    return (
        <View style={styles.container}>
            {items.map((item, id) => {
                return (
                    <View key={id} style={styles.btnContainer}>
                        <TouchableOpacity
                            onPress={openMeeting}
                            style={{ ...styles.button, backgroundColor: item.customColor ?? "#0470dc" }}
                        >
                            <FontAwesome name={item.name} size={23} color="#efefef" />
                        </TouchableOpacity>
                        <Text style={styles.menuText}>{item.title}</Text>
                    </View>
                )
            })}
        </View>
    )
}

export default MenuButtons

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        paddingBottom: 10,
        borderBottomColor: '#1f1f1f',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    btnContainer: {
        alignItems: 'center',
        flex: 1
    },
    button: {
        width: 50,
        height: 50,
        backgroundColor: 'blue',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuText: {
        color: '#858585',
        fontSize: 12,
        paddingTop: 10,
        fontWeight: '600'
    }
})
