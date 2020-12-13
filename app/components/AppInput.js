import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFormikContext } from 'formik'

import { rem } from '../utils';

function Input({ icon, ...otherProps }) {    
    return (
        <View style={[styles.wrapper, otherProps.multiline && styles.areaWrapper]}>
            { icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={24} color="black" />}
            <TextInput style={[styles.input, otherProps.multiline && styles.area]} { ...otherProps } placeholderTextColor="#94846150"/>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: '#E7E3DA',
        padding: rem(.8),
        paddingHorizontal: rem(1.4),
        marginBottom: rem(1)
    },
    icon: {
        marginRight: rem(1.2),
        color: '#948461'
    },
    input: {
        color: '#948461',
        fontSize: rem(1.4),
        flex: 1
    },
    areaWrapper: {
        alignItems: "flex-start",
    },
    area: {
        minHeight: 300,
        textAlignVertical: "top"
    }
})

export default Input;