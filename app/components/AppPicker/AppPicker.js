import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { rem } from '../../utils';
import Screen from '../Screen';
import Wrapper from '../Wrapper';
import AppPickeritem from '../AppPicker/AppPickerItem'

function Pick({ placeholder, icon, items, onSelectItem, ...otherProps}) {
    const [ modalVisable, setModalVisable ] = useState(false);
    const [ selectedItem, setSelectedItem ] = useState(null);
        
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisable(!modalVisable)}>
                <View style={ styles.container }>
                    { icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={24} color="black" />}
                    <Text style={ styles.text }>{ selectedItem ? selectedItem.label : placeholder }</Text>
                    <MaterialCommunityIcons style={styles.icon} name="chevron-down" size={24} color="black" />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisable} animationType="slide">
                <Wrapper style={ styles.wrapper }>
                    <Button title="Close" onPress={() => setModalVisable(!modalVisable)}/>
                    <FlatList 
                        style={ styles.list }
                        data={items}
                        keyExtractor={({ key }) => key}
                        renderItem={({ item }) => 
                            <AppPickeritem label={ item.label } onPress={() => {
                                setModalVisable(!modalVisable);
                                if (onSelectItem) onSelectItem(item);
                                setSelectedItem(item)
                            }}/>
                        }
                    />
                </Wrapper>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: '#E7E3DA',
        padding: rem(.8),
        paddingHorizontal: rem(1.4),
        marginBottom: rem(1)
    },
    wrapper: {
        display: "flex",
        justifyContent: "flex-end",
        height: '100%',
    },
    text: {
        flex: 1,
        color: '#948461',
        fontSize: rem(1.4),
    },
    icon: {
        marginRight: rem(1.2),
        color: '#948461'
    },
    list: {
        marginTop: rem(1)
    }
})

export default Pick;