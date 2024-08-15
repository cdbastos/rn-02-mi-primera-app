import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Separator } from '../components/Separator';
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {
    
    const [contador, setContador] = useState(15);

    return (
        <View style={styles.container}>

            <Separator />

            <Text style={styles.textTitle}>Contador: {contador}</Text>

            <Fab title="-1" onPress={() => setContador(contador - 1)} position="bl" />

            <Fab title="+1" onPress={() => setContador(contador + 1)} position="br" />

            <Separator />

            {/* <TouchableOpacity style={styles.buttonFabLocationLeft}  onPress={() => setContador(contador - 1)}>
                <View style={styles.buttonFab}>
                    <Text style={ styles.textButton }>- 1</Text>
                </View>
            </TouchableOpacity> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 15,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    textButton: {
        color: '#fff',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    },
    textTitle: {
        fontSize: 25,
        textAlign: 'center',
        marginVertical: 30,
        fontWeight: 'bold',
    },

    button: {
        alignItems: 'center',
        backgroundColor: '#E36F1E',
        padding: 10,
    },

    buttonFab: {
        justifyContent: 'center',
        backgroundColor: '#E36F1E',
        width: 60,
        height: 60,
        borderRadius: 100,
    },

    buttonFabLocationRight: {
        position: 'absolute',
        bottom: 25,
        right: 0,
    },

    buttonFabLocationLeft: {
        position: 'absolute',
        bottom: 25,
        left: 0,
    },
});
