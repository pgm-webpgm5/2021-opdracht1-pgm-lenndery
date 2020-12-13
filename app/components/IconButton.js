import React from 'react';
import { Button, View, TouchableHighlight, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Label from './Headings/Label';
import { rem } from '../utils';

function IconButton({ icon, title, onPress, inGroup }) {
    return (
        <TouchableOpacity onPress={onPress} style={ [styles.wrapper, inGroup ? styles.inGroup : null]}>
            <>
                <MaterialIcons style={ styles.icon } name={icon} size={24} color="black" />
                <Label style={ styles.label }>{ title }</Label>
            </>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        alignItems: "center"
    },
    inGroup: {
        marginRight: rem(.6)
    },
    label: {
        fontSize: rem(1),
        textTransform: "uppercase"
    },
    icon: {
        marginRight: rem(.4)
    }
})

export default IconButton;