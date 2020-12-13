import React from 'react';
import { View, Text, TouchableHighlight, TouchableOpacity, StyleSheet } from 'react-native';
import { rem } from '../../utils';

function AppPickItem({ label, onPress }) {
    console.log(label)
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={ styles.item }>
                <Text>{ label }</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'lightgrey',
        padding: rem(1),
        borderRadius: 10,
        marginBottom: rem(1)
    }
})

export default AppPickItem;