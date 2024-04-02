import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Informacao() {
    return (

        <View style={styles.container}>

            <Text style={styles.titulo}>Inforrmacoes</Text>
            <Text>A base de dados tem como intensão prever o preço médio do café em determinado ano inserido.</Text>
            <Text>Base de dados: https://portalweb.cooxupe.com.br:9080/portal/precohistoricocafe_2.jsp</Text>
            <Text>Foi usado a ferramenta Knime para o tratamento de dados e realização de cálculos</Text>
            <Image style={styles.imageBottomRight} source={require('../../imagens/logoIf.png')}></Image>
        </View>
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
        width: 100, // Ajuste conforme necessário
        height: 120, // Ajuste conforme necessário
    },
});
