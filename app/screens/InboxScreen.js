import React, { useState } from 'react';
import { Button, FlatList, Modal, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import { H2, Screen, MailPreviewCard, Wrapper, Label, AppInput, IconButton, AppPicker } from '../components';
import mailData from '../data/mailData';
import { rem } from '../utils';

console.log('log')

function InboxScreen({ navigation }) {
    console.log({ navigation })
    const [ mails, setMails ] = useState(mailData);
    const [ refreshing, setRefreshing ] = useState(false);
    const [ sortVisible, setSortVisible ] = useState(false);
    const [ searchVisible, setSearchVisible ] = useState(false)
    
    const handleDelete = mailToRemove => {
        const filtered = mails.filter((m) => m.meta.id !== mailToRemove.meta.id);
        setMails(filtered)
    }
    
    const handleSearch = query => {
        query = query.toLowerCase()

        if (query.length === 0) setMails(mailData);
        else { 
            const filtered = mailData.filter((m) => {
                const toSearch = [
                    ...Object.values(m.message),
                    ...Object.values({ name: m.meta.sender.name, email: m.meta.sender.email}),
                ]
                return toSearch.join(' ').toLowerCase().includes(query)
            })
            setMails(filtered);
        }
    }
    
    return (
        <Screen style={{ height: 10000, position: "relative" }}>
            <Wrapper style={ styles.screenHero }>
                <H2>Inbox</H2>
                <Label>2 new messages</Label>
            </Wrapper>
            <Wrapper style={ styles.quickActionBar }>
                <View style={{ flexDirection: "row" }}>
                    <IconButton title="Search" icon="search" inGroup onPress={() => setSearchVisible(!searchVisible) }/>
                    <IconButton title="Sort" icon="filter-list" onPress={() => setSortVisible(!sortVisible)}/>
                </View>
                <IconButton title="New mail" icon="add-circle-outline"/>
            </Wrapper>
            <View style={ !searchVisible && styles.searchInvisible}>
                <AppInput placeholder="Search" onChangeText={(text) => {
                handleSearch(text)
                }} />
            </View>
            <View>
                <AppPicker />
            </View>
            <FlatList 
                style={ styles.messagesList }
                data={ mails }
                keyExtractor={ m => m.meta.id }
                refreshing={refreshing}
                onRefresh={() => setMails(mailData)}
                renderItem={({ item }) => 
                    <MailPreviewCard 
                        data={ item }
                        onPress={ () => navigation.navigate('MailDetails', { 
                            id: item.meta.id
                        })}
                        renderLeftActions={() => 
                            <TouchableWithoutFeedback 
                                style={ styles.deleteAction } 
                                onPress={() => handleDelete(item)}
                            >
                                <View style={ styles.deleteActionLabel }>
                                    <MaterialCommunityIcons name="delete" style={{ marginRight: rem(.2) }} size={24} color="tomato" />
                                    <Text style={ styles.deleteActionLabelText }>delete</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        }
                    />
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screenHero: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
    },
    messagesList: {
        width: '100%',
        height: '100%'
        // padding: rem(1)
    },
    deleteAction: { 
        justifyContent: "center",
        height: '100%',
        backgroundColor: '#ff634720',
        padding: rem(1.2),
        paddingRight: rem(1.4)
    },
    deleteActionLabel: {
        flexDirection: "row",
        alignItems: "center"
    },
    deleteActionLabelText: {
        color: 'tomato',
        fontWeight: '700',
        fontSize: rem(1),
        textTransform: "uppercase",
        letterSpacing: 1
    },
    quickActionBar: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    searchInvisible: {
        display: 'none'
    },
    filterModalWrapper: {
        backgroundColor: 'red'
    }
})

export default InboxScreen;