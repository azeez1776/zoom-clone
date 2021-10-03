import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import ContactMenu from '../components/ContactMenu'
import MenuButtons from '../components/MenuButtons'
import SearchBar from '../components/SearchBar'

const Home = () => {
    return (
        <View>
            <Header />
            <SearchBar />
            <MenuButtons />
            <ContactMenu />
        </View>
    )
}

const styles = StyleSheet.create({})

export default Home
