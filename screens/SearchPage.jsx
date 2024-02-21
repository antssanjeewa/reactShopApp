import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SearchPage = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/img/login_background3.jpeg')} resizeMode='cover' style={styles.backgroundImage} />
            <Text style={{ fontSize: 40 }}>Search</Text>
        </View>
    )
}

export default SearchPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'yellow',
        // justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
})