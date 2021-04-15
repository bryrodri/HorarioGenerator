import React, { Component } from 'react'

import { Box, Menu } from 'grommet';

import {NotificationContainer, NotificationManager} from 'react-notifications';
//estilos
import './clasicBuilder.css'
import 'react-notifications/lib/notifications.css';

//items
import CardSecction from './items/cardsSecction/cardSecction'
import HorarioSecction from './items/horarioSecction/horarioSecction'



export class ClasicBuilder extends Component {
    state={
        horario:{},
        horarioPage:false
    }

    ChangeHorario= (horario)=>{
        this.setState({horario:horario})
        console.log(this.state.horario)
    }

    BuildHorario=()=>{
        var horario = this.state.horario
        var asignaciones= horario.asignaciones.filter(x=> x.visibility===true)

        console.log(asignaciones)

        if(asignaciones.length>0){
            if(asignaciones.filter(x=>x.estatus==="duplicado").length>0){
                NotificationManager.warning('Hay tarjetas duplicadas con horarios que coinciden, Solucionelo eliminando los bloques duplicados, ocultando la tarjeta o eliminandola', 'Duplicado', 3000);
            }
            else if(asignaciones.filter(x=>x.estatus==="empty").length>0){
                NotificationManager.warning('Hay tarjetas vacias, solucionelo rellenando los campos, eliminandola o ocultandola', 'tarjetas vacias', 3000);
            }
            else{
                NotificationManager.info('Generando horarios');
            }
        }
        else{
            NotificationManager.warning('Actualmente no ha completado ni una tarjeta', 'No hay horario', 3000);
        }
    }



    HorarioPage=()=>{
        if(this.state.horarioPage){
            return <HorarioSecction OpenCloseHorarioPage={this.OpenCloseHorarioPage}></HorarioSecction>
        }
        else{
            return null
        }
    }

    OpenCloseHorarioPage=()=>{
        this.setState({horarioPage:!this.state.horarioPage})
    }

    render() {
        return (
            <div className="min-container-hei">
                    <Box align="end" pad="large">
                    <Menu
                        dropProps={{ align: { top: 'bottom', left: 'left' } }}
                        label="Acciones"
                        items={[
                        { label: 'Configuracion', onClick: () => {this.BuildHorario()} },
                        { label: 'Generar horario', onClick: () => {this.OpenCloseHorarioPage()} },
                        ]}
                    />
                    </Box>
                <CardSecction ChangeHorario={this.ChangeHorario} ></CardSecction>
                <NotificationContainer/>

                {
                    this.HorarioPage()
                }
                
            </div>
        )
    }
}


export default ClasicBuilder
