import React from 'react';
import { View, Text, TouchableHighlight, TouchableOpacity } from 'react-native';

function PickItem({ label, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View>
                <Text>{ label }</Text>
            </View>
        </TouchableOpacity>
    );
}

export default PickItem;