import React, { Component } from 'react'
import { Select } from 'grommet';

//estilos
import './clasicBuilder.css'

//items
import CardSecction from './items/cardsSecction/cardSecction'
import Card from './items/card/card'
import EmptyCard from './items/emptyCard/emptyCard'

//Samples
import DIAS from '../../Samples/dias'

const OPTIONS = DIAS;

export class ClasicBuilder extends Component {
    
    state={
        horario:{
            asignaciones:[]
        },
        value: [], options: OPTIONS
    }

    createCard = ()=>{
        var id= this.state.horario.asignaciones.length==0 ? 1 : this.state.horario.asignaciones.length+1
        var asignacion={
            id:id,
            titulo:"",
            color:"",
            bloques:[]

        }
        var horario= this.state.horario
        horario.asignaciones.push(asignacion)
        this.setState(horario)
        console.log(this.state.horario)
    }
    
    render() {
        const { options, value } = this.state;
        return (
            <div>
                <CardSecction></CardSecction>
            </div>
        )
    }
}


export default ClasicBuilder
