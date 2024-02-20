import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomePage = () => {
    return (
        <View style={styles.container}>
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
    }
})