import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import Header from '../components/Header'
import ContactMenu from '../components/ContactMenu'
import MenuButtons from '../components/MenuButtons'
import SearchBar from '../components/SearchBar'

const Home = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={{ height: '100%' }}>
                <Header />
                <SearchBar />
                <MenuButtons />
                <ContactMenu />
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1c1c1c',
        padding: 15
    }
})

export default Home
