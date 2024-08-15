import React from 'react'
import { StyleSheet, View } from 'react-native';

export const Separator = () => {
    return (
        <View style={styles.separator} />
    )
}

const styles = StyleSheet.create({
    separator: {
        backgroundColor: '#1C1D30',
        marginVertical: 2,
        height:3,
        borderBottomColor: '#1C1D30',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
});
