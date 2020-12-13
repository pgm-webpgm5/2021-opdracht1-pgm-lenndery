import React from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';

import { AppText, H3, H5, Label, Screen, Wrapper } from '../components';
import mailData from '../data/mailData';
import { messageRecievedDate, rem } from '../utils';

function MessageDetailScreen({ route }) {
    const { meta: { sender, date }, message: { title, body }} = mailData.find(m => m.meta.id === route.params.id )
    const recievedDate = messageRecievedDate()
    
    return (
        <Wrapper style={ styles.container }>
            <H3 style={ styles.messageTitle }>{ title }</H3>
            <View style={ styles.wrapper }>
                <View>
                    <Image style={ styles.avatar } source={{ uri: sender.avatar }}/>
                </View>
                <View style={ styles.messageContainer }>
                    <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: "flex-end"}}>
                        <H5 style={ styles.messageSender}>{ sender.name }</H5>
                        <AppText style={ styles.messageRecieved }>{ recievedDate }</AppText>
                    </View>
                    <AppText style={ styles.messageSenderEmail }>{ sender.email }</AppText>
                    <AppText style={ styles.messageBody }>{ body }</AppText>
                </View>
            </View>
        </Wrapper>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: rem(1.6),
    },
    wrapper: {
        flexDirection: "row"
    },
    messageContainer: {
        flex: 1
    },
    messageTitle: {
        marginBottom: rem(1),
        fontWeight: "bold",
    },
    messageSender: {
        fontSize: rem(1.2)
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 100,
        marginRight: rem(1)
    },
    messageBody: {
        marginTop: rem(.8), 
    },
    messageSenderEmail: {
        // fontWeight: "bold",
        color: 'grey',
        fontSize: rem(1)
    },
    messageRecieved: {
        color: 'grey',
        fontWeight: 'bold'
    }
})

export default MessageDetailScreen;