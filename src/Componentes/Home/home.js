
import React, { Component } from 'react'

//estilos
import './home.css'

//secciones
import Header from './secctions/header/header'
import Information from './secctions/information/information'

export class Home extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Information></Information>
            </div>
        )
    }
}

export default Home

