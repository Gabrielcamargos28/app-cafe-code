import React, { Component } from 'react'
import ListaComImagens from '../../components/listaImagens'
import { SafeAreaViewBase, Text, View } from 'react-native'


const data = [
    {
        id: '1',
        image: require('../../imagens/coeficientes/coeficienteGrau1.png'),
        title: 'Coeficiente grau 1',
        description: '',
    },
    {
        id: '2',
        image: require('../../imagens/coeficientes/coeficienteGrau2.png'),
        title: 'Coeficiente grau 2',
        description: '',
    },
    {
        id: '3',
        image: require('../../imagens/coeficientes/coeficienteGrau3.png'),
        title: 'Coeficiente grau 3',
        description: '',
    },
    {
        id: '4',
        image: require('../../imagens/coeficientes/coeficienteGrau4.png'),
        title: 'Coeficiente grau 4',
        description: '',
    },
    {
        id: '5',
        image: require('../../imagens/coeficientes/coeficienteGrau5.png'),
        title: 'Coeficiente grau 5',
        description: '',
    },
    {
        id: '6',
        image: require('../../imagens/coeficientes/coeficienteGrau6.png'),
        title: 'Coeficiente grau 6',
        description: '',
    },
    {
        id: '7',
        image: require('../../imagens/coeficientes/coeficienteGrau7.png'),
        title: 'Coeficiente grau 7',
        description: '',
    },
    {
        id: '8',
        image: require('../../imagens/coeficientes/coeficienteGrau8.png'),
        title: 'Coeficiente grau 8',
        description: '',
    },
    {
        id: '9',
        image: require('../../imagens/coeficientes/coeficienteGrau9.png'),
        title: 'Coeficiente grau 9',
        description: '',
    },
    {
        id: '10',
        image: require('../../imagens/coeficientes/coeficienteGrau10.png'),
        title: 'Coeficiente grau 10',
        description: '',
    },
]

export default function Coeficientes() {

    return (
        <View style={{ flex: 1 }}>
            <ListaComImagens data={data}></ListaComImagens>
        </View>
    )
}