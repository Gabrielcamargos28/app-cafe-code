import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import BtnVoltar from '../../components/botaoVoltar';

export default function Home() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image
                source={require('../../imagens/ramo-superior 2.png')}
                style={styles.imageTopLeft}
            />
            <Image
                source={require('../../imagens/ramo-superior 2.png')}
                style={styles.imageBottomRight}
            />
            <View style={styles.textContainer}>
                <Text style={styles.titulo}>Bem Vindo</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Previsao') }}>
                        <Text style={styles.buttonText}>Realizar Previsao</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Coeficientes') }}>
                        <Text style={styles.buttonText}>Coeficientes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Graficos') }}>
                        <Text style={styles.buttonText}>Graficos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Informacao') }}>
                        <Text style={styles.buttonText}>Informações</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3A6604'
    },
    textContainer: {
        alignItems: 'center'
    },
    buttonContainer: {
        marginTop: 20,
    },
    button: {
        backgroundColor: '#4CAF50',
        //opacity: 0.6,
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        width: 200,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    titulo: {
        color: 'white',
        fontSize: 35
    },
    imageTopLeft: {
        position: 'absolute',
        top: 40,
        left: 0,
        width: 150, // Ajuste conforme necessário
        height: 220,
        transform: [{ rotate: '180deg' }]
    },
    imageBottomRight: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 150, // Ajuste conforme necessário
        height: 220, // Ajuste conforme necessário
    },
});
