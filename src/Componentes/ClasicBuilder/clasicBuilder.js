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
        horario:null,
        horarioPage:false
    }

    async componentDidMount(){
        var horario = JSON.parse(localStorage.getItem('horario'));
        console.log(horario)

        if(JSON.parse(localStorage.getItem('horario'))){
            this.setState({horario:horario})
        }
        else{

            this.setState({horario:{nombre:"", asignaciones:[]}} )
        }

    }

    ChangeHorario= (horario)=>{
        this.setState({horario:horario},()=>{ localStorage.setItem('horario', JSON.stringify(this.state.horario))})
        

        
    }

    BuildHorario=()=>{
        var horario = this.state.horario
        var asignaciones= horario.asignaciones.filter(x=> x.visibility===true)
        window.scrollTo(0,0);
        

        if(asignaciones.length>0){
            if(asignaciones.filter(x=>x.estatus==="duplicado").length>0){
                NotificationManager.warning('Hay tarjetas duplicadas con horarios que coinciden, Solucionelo eliminando los bloques duplicados, ocultando la tarjeta o eliminandola', 'Duplicado', 3000);
            }
            else if(asignaciones.filter(x=>x.estatus==="empty").length>0){
                NotificationManager.warning('Hay tarjetas vacias, solucionelo rellenando los campos, eliminandola o ocultandola', 'tarjetas vacias', 3000);
            }
            else{
                NotificationManager.info('Generando horarios');
                
                this.OpenCloseHorarioPage()
                

                
            }
        }
        else{
            NotificationManager.warning('Actualmente no ha completado ni una tarjeta', 'No hay horario', 3000);
        }
    }

    ReiniciarHorario=()=>{
        this.setState({horario:{nombre:"", asignaciones:[]}} ,()=>{ localStorage.setItem('horario', JSON.stringify(this.state.horario))})


    }

    HorarioPage=()=>{



        if(this.state.horarioPage){
            
            return <HorarioSecction horario={this.state.horario} OpenCloseHorarioPage={this.OpenCloseHorarioPage}></HorarioSecction>
        }
        else{
            return <div></div>
        }
    }

    scrolltop=()=>{
        window.scrollTo(0,0);
    }

    OpenCloseHorarioPage=()=>{
        
        this.setState({horarioPage:!this.state.horarioPage})
    }

    render() {

        if(this.state.horario){
        return (
            <div className="min-container-hei">
                    <Box align="end" pad="large">
                    <Menu
                        dropProps={{ align: { top: 'bottom', left: 'left' } }}
                        label="Acciones"
                        items={[
                        { label: 'Reiniciar', onClick: () => {this.ReiniciarHorario()} },
                        { label: 'Generar horario', onClick: () => {this.BuildHorario()} },
                        ]}
                    />
                    </Box>
                <CardSecction ChangeHorario={this.ChangeHorario} horario={this.state.horario} ></CardSecction>
                <NotificationContainer/>

                {
                    this.HorarioPage()
                }
                
            </div>
        )
        }
        else{
            return null
        }
    }
}


export default ClasicBuilder
