import React, { Component } from 'react'
import { AppRegistry } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components'
import App from './App';

import CenaClientes from './src/components/CenaCliente'
import CenaPrincipal from './src/components/CenaPrincipal'
import CenaContatos from './src/components/CenaContatos'
import CenaEmpresas from './src/components/CenaEmpresas'
import CenaServicos from './src/components/CenaServicos'

export default class App5 extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ id: 'principal' }}
                renderScene={(route, navigator) => {
                    switch (route.id) {
                        case 'principal':
                            return (<CenaPrincipal navigator={navigator} />)
                        case 'cliente':
                            return (<CenaClientes navigator={navigator} />)
                        case 'contato':
                            return (<CenaContatos navigator={navigator} />)
                        case 'empresa':
                            return (<CenaEmpresas navigator={navigator} />)
                        case 'servico':
                            return (<CenaServicos navigator={navigator} />)
                        default:
                            return false
                    }
                }}
            />
        )
    }
}

AppRegistry.registerComponent('app5', () => App5);
