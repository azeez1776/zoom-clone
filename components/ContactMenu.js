import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';

const ContactMenu = () => {


    const contacts = [
        {
            type: "starred",
            name: "starred"
        },
        {
            type: "contact",
            name: "samatar",
            photo: require("../assets/three.png")
        },
        {
            type: "contact",
            name: "abdi",
            photo: require("../assets/two.jpg")
        },
        {
            type: "contact",
            name: "aboud",
            photo: require("../assets/one.jpeg")
        }
    ];

    return (
        <View style={styles.container}>
            {contacts.map((contact, index) => {
                return (
                    <View key={index} style={styles.row}>
                        {contact.type === "starred" ?
                            (
                                <View style={styles.starredIcon}>
                                    <AntDesign name="star" size={23} color="#efefef" />
                                </View>

                            ) :
                            (
                                <Image source={contact.photo} style={styles.image} />
                            )
                        }
                        <Text style={styles.text}>
                            {contact.name}
                        </Text>
                    </View>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    starredIcon: {
        backgroundColor: '#333333',
        width: 55,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    row: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center'
    },
    text: {
        color: 'white',
        paddingLeft: 15,
        fontSize: 15
    },
    image: {
        width: 55,
        height: 55,
        borderRadius: 20
    }
})

export default ContactMenu
