import React, { Component } from 'react'
import { View, StatusBar, Image, Text, StyleSheet } from 'react-native'

import BarraNavegacao from './BarraBavegacao'

const detalheContatos = require('../imgs/detalhe_contato.png')

export default class CenaContatos extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FFF' }}>
                <StatusBar
                    backgroundColor='#61BD8C' />

                <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#61BD8C' />

                <View style={styles.cabecalho}>
                    <Image source={detalheContatos} />
                    <Text style={styles.txtTitulo}>Contatos</Text>
                </View>
                <View style={styles.detalheContatos}>
                    <Text style={styles.txtContatos}>TEL: (62) 3261-1046</Text>
                    <Text style={styles.txtContatos}>CEL: (62) 9689-0691</Text>
                    <Text style={styles.txtContatos}>EMAIL: glaiconreis@gmail.com</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cabecalho: {
        flexDirection: 'row',
        marginTop: 20
    },
    txtTitulo: {
        color: '#61BD8C',
        fontSize: 30,
        marginLeft: 20,
        marginTop: 25
    },
    detalheContatos: {
        marginTop: 20,
        padding: 20
    },
    txtContatos: {
        fontSize: 18
    }
})
