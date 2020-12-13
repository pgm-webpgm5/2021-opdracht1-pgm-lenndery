import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text, FlatList, SafeAreaView, StatusBar, Platform } from 'react-native';
import { H2, ListItem } from '../components';
import colors from '../config/colors';
import { rem } from '../utils';

function Screen ({ children, title, backgroundColor = colors.background, style }) {
    return (
        <SafeAreaView style={[styles.screen, style, { backgroundColor: backgroundColor }]}>
            <View>
                { children }
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    title: {
        width: '100%',
        padding: rem(1),
    }
})

export default Screen