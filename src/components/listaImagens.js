import React from 'react';
import { View, FlatList, Image, Text, StyleSheet, Dimensions } from 'react-native';
import BtnVoltar from './botaoVoltar';

const { width } = Dimensions.get('window')

export default function ListaComImagens({ data }) {
    const renderItem = ({ item }) => (
        <Item image={item.image} title={item.title} description={item.description} />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                pagingEnabled
                horizontal
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.flatListContent}
            />
            <BtnVoltar />
        </View>
    );
}

const Item = ({ image, title, description }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Image source={image} style={styles.image} />
        <Text style={{ color: 'white', fontWeight: 'bold', }}> arraste para o lado</Text>
    </View >
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3A6604',
    },
    flatListContent: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
    },
    item: {
        width: width,
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 0,
    },
    description: {
        fontSize: 16,
        color: '#555',
    },
    image: {
        width: '100%',
        height: 420,
        resizeMode: 'contain',
    },
});
