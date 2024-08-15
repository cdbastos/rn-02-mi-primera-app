import React from 'react'
import { Dimensions, StyleSheet, Text, View, useWindowDimensions } from 'react-native'

export const PositionScreen = () => {

  return (
    <View style={styles.container}> 
        <View style={styles.cajaMorada} />
        <View style={styles.cajaNaranja} />
        <View style={styles.cajaVerde} />
        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        // justifyContent: 'center',
        // alignItems: 'center',
        flex: 1,
        backgroundColor: '#28C4D9',
    },
    cajaMorada: {
        backgroundColor: '#5856D6',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        top: 0,
        right: 0,
    
    },
    cajaNaranja: {
        backgroundColor: '#F0A23B',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    cajaVerde: {
        backgroundColor: '#44BB66',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',    
    }
})
