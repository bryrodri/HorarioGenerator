import React, { Component } from 'react'

import { Box, Menu } from 'grommet';

import { MdHelpOutline } from "react-icons/md";
import { BiTrash, BiIntersect, BiBadge, BiBadgeCheck, BiShow, BiCheckbox, BiCheck } from "react-icons/bi";


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
                
                    <Box align="center" justify="between" pad="medium" direction="row">

                    <div className="information--secction">
                        <MdHelpOutline className="information--icon"  size={18}/>

                        <div className="information--container">
                            <div className="information--item">
                                <BiTrash size={16} />
                                <span>Icono de accion para eliminar tarjeta</span>
                            </div>
                            <div className="information--item">
                                <BiShow size={16} />
                                <span>Icono de accion para ocultar o mostrar tarjeta</span>
                            </div>

                            <div className="information--item">
                                
                                <BiBadge size={16} />
                                <span>Icono de estatus e indica que la tarjeta le falta alguna fecha o nombre</span>
                            </div>
                            <div className="information--item">
                                <BiBadgeCheck size={16} />
                                <span>Icono de estatus e indica que la tarjeta esta correcta </span>
                            </div>
                            <div className="information--item">
                                <BiIntersect size={16} />
                                <span>Icono de estatus e indica que la tarjeta o bloque esta duplicado</span>
                            </div>

                            <div className="information--item">
                                <BiCheckbox size={16} />
                                <span>Icono de estatus e indica que el bloque esta vacio o le falta algun campo</span>
                            </div>

                            <div className="information--item">
                                <BiCheck size={16} />
                                <span>Icono de estatus e indica que el bloque esta correcto</span>
                            </div>
                        </div>
                    </div>


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
