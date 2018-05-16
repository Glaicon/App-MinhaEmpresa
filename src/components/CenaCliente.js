import React, { Component } from 'react'
import { View, StatusBar, Image, Text, StyleSheet } from 'react-native'

import BarraNavegacao from './BarraBavegacao'

const detalheClientes = require('../imgs/detalhe_cliente.png')
const cliente1 = require('../imgs/cliente1.png')
const cliente2 = require('../imgs/cliente2.png')

export default class CenaCliente extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FFF' }}>
                <StatusBar
                    backgroundColor='#B9C941' />

                <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#B9C941' />

                <View style={styles.cabecalho}>
                    <Image source={detalheClientes} />
                    <Text style={styles.txtTitulo}>Nossos Clientes</Text>
                </View>
                <View style={styles.detalheCliente}>
                    <Image source={cliente1} />
                    <Text style={styles.txtDetalhesCliente}>Cliente 1</Text>
                </View>
                <View style={styles.detalheCliente}>
                    <Image source={cliente2} />
                    <Text style={styles.txtDetalhesCliente}>Cliente 2</Text>
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
        color: '#B9C941',
        fontSize: 30,
        marginLeft: 20,
        marginTop: 25
    },
    detalheCliente: {
        padding: 20,
        margin: 10,
    },
    txtDetalhesCliente: {
        fontSize: 18,
        marginLeft: 20
    }
})
