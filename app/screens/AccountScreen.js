import React, { useContext } from 'react';
import { StyleSheet, Image, Button, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AppText, H3, H4, Label, Screen, Wrapper } from '../components';
import { AuthContext } from '../contexts/AuthContext';
import { rem } from '../utils';

function AccountScreen(props) {
    const [ login, setLogin ] = useContext(AuthContext);
    console.log(login)
    return (
        <Screen>
            <Wrapper>
                <Image style={ styles.logo } source={require('../assets/logo_postbox_alt.png')} />
                <Label>Signed in as</Label>
                <H4 style={ styles.userEmail }>{ login.email }</H4>
                <TouchableOpacity style={ styles.button }>
                    <Text style={ styles.buttonLabel }>Configure account</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ styles.button } onPress={() => setLogin(false)}>
                    <Text style={ styles.buttonLabel }>Log out</Text>
                </TouchableOpacity>
            </Wrapper>
        </Screen>
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
    },
    button: {
        marginTop: rem(1),
        backgroundColor: 'dodgerblue',
        padding: rem(.8),
        borderRadius: 5
    },
    buttonLabel: {
        color: 'white',
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign: 'center'
    }
})

export default AccountScreen;