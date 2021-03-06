import React, { Component } from 'react'
import { View, StatusBar, Image, Text, StyleSheet } from 'react-native'

import BarraNavegacao from './BarraBavegacao'

const detalheServico = require('../imgs/detalhe_servico.png')

export default class CenaServicos extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FFF' }}>
                <StatusBar
                    backgroundColor='#19D1C8' />

                <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#19D1C8'/>

                <View style={styles.cabecalho}>
                    <Image source={detalheServico} />
                    <Text style={styles.txtTitulo}>Nossos Serviços</Text>
                </View>
                <View style={styles.detalheServico}>
                    <Text style={styles.txtServico}>. Consultoria</Text>
                    <Text style={styles.txtServico}>. Processos</Text>
                    <Text style={styles.txtServico}>. Acompanhamento de Projetos</Text>
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
        color: '#19D1C8',
        fontSize: 30,
        marginLeft: 20,
        marginTop: 25
    },
    detalheServico: {
        marginTop: 20,
        padding: 20
    },
    txtServico: {
        fontSize: 18,
        marginLeft: 20,
    }
})
