import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { H4, H5 } from '.';
import colors from '../config/colors';
import { messageRecievedDate, rem } from '../utils';
import AppText from './AppText';

function MailPreviewCard({ data, onPress = null, renderLeftActions , renderRightActions = null }) {
    const { meta: { sender, reciever, date }, message: { title, body } } = data;
    const recievedDate = messageRecievedDate(date)
    
    return (
        <Swipeable 
            containerStyle={ styles.container } 
            renderLeftActions={renderLeftActions} 
            renderRightActions={renderRightActions}
        >
            <TouchableWithoutFeedback style={ styles.wrapper } onPress={onPress}>
                <View>
                    <Image style={ styles.avatar } source={{
                        uri: sender.avatar,
                    }} />
                </View>
                <View style={ styles.messagePreview }>
                    <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: "flex-end"}}>
                        <H5 style={ styles.messageName }>{ sender.name }</H5>
                        <AppText style={ styles.messageRecieved }>{ recievedDate }</AppText>
                    </View>
                    <H5 style={ [styles.messageTitle ] }>{ title }</H5>
                    <Text style={ styles.messageDetail }>{ body.substring(0, 70) + '...' }</Text>
                </View>
            </TouchableWithoutFeedback>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: rem(1),
    }, 
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: colors.background
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 120,
        marginRight: rem(1.2)
    },
    messagePreview: {
        paddingVertical: rem(1),
        // width: '100%',
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
        flex: 1
    },
    messageName: {
        // marginBottom: rem(.2)
    },
    messageTitle: {
        fontWeight: '600',
        marginBottom: rem(.2)
    },
    messageDetail: {
        color: 'grey'
    },
    messageRecieved: {
        color: 'grey',
        fontWeight: 'bold'
    }
})

export default MailPreviewCard;