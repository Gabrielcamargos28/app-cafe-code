import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import BtnVoltar from '../../components/botaoVoltar';


export default function Resultado({ route }) {
    const { anoSelecionado } = route.params;

    const x = anoSelecionado;
    const coeficientes = [{
        "Exponent": 1,
        "Coeff.": -726570564.303838
    }, {
        "Exponent": 2,
        "Coeff.": 542496.6634343168
    }, {
        "Exponent": 3,
        "Coeff.": -180.02483588751227
    }, {
        "Exponent": 4,
        "Coeff.": 0.02240256023966685
    }, {
        "Exponent": 0,
        "Coeff.": 364912198276.80585
    }];

    function regressaoQuartoGrau(x) {
        let resultado = 0;
        for (let i = 0; i < coeficientes.length; i++) {
            resultado += coeficientes[i]["Coeff."] * Math.pow(x, coeficientes[i]["Exponent"]);
        }
        return resultado;
    }


    const resultadoRegressao = regressaoQuartoGrau(x).toFixed(2);
    const trezePorcento = (resultadoRegressao * 0.13).toFixed(2);
    const resultadoRegressaoMais = resultadoRegressao + trezePorcento
    const resultadoRegressaoMenos = resultadoRegressao - trezePorcento

    return (
        <View style={styles.container}>
            <Text style={styles.containerText}>Resultado da regressão para o ano {anoSelecionado}: R$ {resultadoRegressao}</Text>
            <Text style={styles.containerText}>Eficacia do algoritmo de <Text style={styles.red}>87%</Text></Text>
            <BtnVoltar />
        </View >

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3A6604',
    },
    red: {
        color: 'red'
    },
    containerText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 24
    },
});