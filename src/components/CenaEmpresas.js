import React, { Component } from 'react'
import { View, StatusBar, Image, Text, StyleSheet } from 'react-native'

import BarraNavegacao from './BarraBavegacao'

const detalheEmpresa = require('../imgs/detalhe_empresa.png')

export default class CenaServicos extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FFF' }}>
                <StatusBar
                    backgroundColor='#EC7148' />

                <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#EC7148'/>

                <View style={styles.cabecalho}>
                    <Image source={detalheEmpresa} />
                    <Text style={styles.txtTitulo}>A Empresa</Text>
                </View>
                <View style={styles.detalheEmpresa}>
                    <Text style={styles.txtEmpresa}>
                        A ATM Consultoria está no mercado a mais de 20 anos...
                    </Text>
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
        color: '#EC7148',
        fontSize: 30,
        marginLeft: 20,
        marginTop: 25
    },
    detalheEmpresa: {
        padding: 20,
        margin: 10,
    },
    txtEmpresa: {
        fontSize: 18,
        marginLeft: 20
    }
})
