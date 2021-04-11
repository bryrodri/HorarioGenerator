import React from 'react'
import { Select } from 'grommet';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

//estilos
import './bloque.css'

//samples
import DIAS from '../../../../Samples/dias'
import HORAS from '../../../../Samples/horas'

const Bloque = (props) => {

    function UpdateDia(opcion){
        console.log(opcion)
        props.UpdateDia(props.bloque.id,opcion)
    }

    function UpdateInicio(opcion){
        console.log(opcion)

        if(props.bloque.fin){
            if(props.bloque.fin<opcion || props.bloque.fin===opcion){
                NotificationManager.info('La hora de inicio debe ser menor que la hora final y deben ser diferentes.');
            }
            else{
                props.UpdateInicio(props.bloque.id,opcion)
            }
        }
        else{
            props.UpdateInicio(props.bloque.id,opcion)
        }
    }

    function UpdateFin(opcion){
        console.log(opcion)
        if(props.bloque.inicio){
            if(props.bloque.inicio>opcion || props.bloque.inicio===opcion){
                NotificationManager.info('La hora de inicio debe ser menor que la hora final y deben ser diferentes.');
            }
            else{
                props.UpdateFin(props.bloque.id,opcion)
            }
        }
        else{
            props.UpdateFin(props.bloque.id,opcion)
        }
    }


    return (
        <div className="bloque-Secction">
            <div className="text-bloque-secction">
                <span>Bloque {props.index+1} {props.bloque.estatus}</span>
            </div>

            <div className="bloque-dia">
                <Select
                size={"medium"}
                placeholder={"Dia de la semana"}

                options={DIAS}
                value={props.bloque.dia}
                onChange={({ option }) => UpdateDia(option)}
                />
            </div>

            <div className="bloque-hora">
                <Select
                options={HORAS}
                placeholder={"Desde"}
                value={props.bloque.inicio}
                onChange={({ option }) => UpdateInicio(option)}
                /> 

            </div>

            <div className="bloque-hora">
                <Select
                options={HORAS}
                placeholder={"Hasta"}
                value={props.bloque.fin}
                onChange={({ option }) => UpdateFin(option)}
                /> 

            </div>
            <NotificationContainer/>
        </div>
    )
}

export default Bloque
