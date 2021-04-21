import React from 'react'

import { BiCheckbox, BiCheck, BiIntersect } from "react-icons/bi";

import {NotificationManager} from 'react-notifications';

//estilos
import './bloque.css'

//samples
import DIAS from '../../../../Samples/dias'
import HORAS from '../../../../Samples/horas'

const Bloque = (props) => {

    function UpdateDia(event){
        console.log(event.target.value)
        props.UpdateDia(props.bloque.id,event.target.value)
    }

    function UpdateInicio(event){
        var opcion=event.target.value
        opcion= parseInt(opcion)
        console.log(typeof opcion)
        console.log(typeof props.bloque.fin)

        console.log("inicio "+opcion)
        console.log("fin "+props.bloque.fin)
        if(props.bloque.fin){
                    // 8            10
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

    function UpdateFin(event){
        var opcion=event.target.value
        opcion= parseInt(opcion)
        console.log("fin "+opcion)
        if(props.bloque.inicio){
            console.log("inicio "+props.bloque.inicio)
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

    function icon(){

        if(props.bloque.estatus==="empty"){
            return <BiCheckbox className="icon-bloque"  size={18}/>
        }
        else if(props.bloque.estatus==="duplicado"){
            return <BiIntersect className="icon-bloque" size={18}/>
        }
        else if(props.bloque.estatus==="valido"){
            return <BiCheck className="icon-bloque"  size={18}/>
        }

        
    }

    function deleteBloque(){
        console.log(props.bloque.id)
    }


    return (
        <div className="bloque-Secction">

            <div className="text-bloque-secction">
                <span> </span>

                {
                    icon()
                }

                
            </div>

            <div className="bloque-dia">
                <select
                disabled={props.disableForm ? false : true}
                value={props.bloque.dia}
                onChange={UpdateDia}
                >
                    <option value="" disabled hidden >Dia de la semana</option>
                    {
                       DIAS.map((x, index)=>{
                        return <option value={x} key={index}>{x}</option>
                       }) 
                    }
                </select>
            </div>

            <div className="bloque-hora">
                <select
                disabled={props.disableForm ? false : true}
                value={props.bloque.inicio}
                onChange={UpdateInicio}
                >
                    <option value="" disabled hidden >Desde</option>
                    {
                       HORAS.map((x, index)=>{
                        var hora=""
                        if(x>12){
                            hora= x-12+":00 PM"
                        }
                        else{
                            hora= x+":00 AM"
                        }
                        return <option value={x} key={index}>{hora}</option>
                       }) 
                    }
                </select>
            </div>

            <div className="bloque-hora">
                <select
                
                disabled={props.disableForm ? false : true}
                value={props.bloque.fin}
                onChange={UpdateFin}
                >
                    <option value="" disabled hidden >Hasta</option>
                    {
                       HORAS.map((x,index)=>{
                        var hora=""
                        if(x>12){
                            hora= x-12+":00 PM"
                        }
                        else{
                            hora= x+":00 AM"
                        }
                        return <option value={x} key={index}>{hora}</option>
                       }) 
                    }
                </select>

            </div>
            
        </div>
    )
}

export default Bloque
