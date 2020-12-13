import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { Screen } from '../components';

function WelcomeScreen(props) {
    return (
        <>
            <Screen style={ styles.screen }>
                <Image style={ styles.logo } source={require('../assets/logo_postbox_alt.png')} />
            </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 250,
        resizeMode: 'contain'
    }
})

export default WelcomeScreen;