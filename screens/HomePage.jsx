import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomePage = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/img/login_background2.jpeg')} resizeMode='cover' style={styles.backgroundImage} />
            <Text style={{ fontSize: 40 }}>Welcome</Text>
        </View>
    )
}

export default HomePage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
})