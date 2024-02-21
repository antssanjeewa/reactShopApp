import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider';

const NotificationPage = () => {
    const { logout } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Image source={require('../assets/img/login_background5.jpeg')} resizeMode='cover' style={styles.backgroundImage} />
            <Text style={{ fontSize: 40 }}>Notification</Text>
            <Button onPress={() => logout()} title='Logout'></Button>
        </View>
    )
}

export default NotificationPage

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