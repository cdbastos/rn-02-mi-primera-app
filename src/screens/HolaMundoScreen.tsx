import React from 'react'
import { Text, View } from 'react-native'

export const HolaMundoScreen = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white',
        }}>
            <Text style={{
                fontSize: 25,
                textAlign: 'center'
            }}>Hola Mundo desde screen</Text>
        </View>
    )
}
