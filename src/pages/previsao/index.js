import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import { useNavigation } from '@react-navigation/native'
export default function Previsao() {

    const [anoSelecionado, setAnoSelecionado] = useState('2023');
    const navigation = useNavigation();
    const anos = [];
    for (let ano = 2024; ano <= 2100; ano++) {
        anos.push(ano.toString());
    }
    const enviarAno = () => {
        navigation.navigate('Resultado', { anoSelecionado })
    }

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.titulo}> Escolha o ano para a previsao</Text>
                <Picker
                    selectedValue={anoSelecionado}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => setAnoSelecionado(itemValue)}
                >
                    <Picker.Item label="Selecione o ano" value="" />
                    {anos.map((ano, index) => (
                        <Picker.Item key={index} label={ano} value={ano} />
                    ))}
                </Picker>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={enviarAno}>
                        <Text style={styles.buttonText}>Enviar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
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
        fontSize: 25
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
    picker: {
        margin: 10,
        height: 20, // Ajuste a altura conforme necessário
        width: 300,
        color: 'white',
        backgroundColor: '#4CAF50', // Cor de fundo do Picker

    },
});
