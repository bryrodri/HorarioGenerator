import React, { useState } from 'react'
import { TextInput } from 'grommet';
import { BiTrash, BiMinus, BiPlus } from "react-icons/bi";

//estilos
import './card.css'

//items
import Bloque from '../bloque/bloque'



export const Card = (props) => {
    

    function handleChange(event) {
        // Here, we invoke the callback with the new value
        props.changeTitle(event.target.value, props.asignacion.id);
    }
    function agregarBloque(event){

        props.addBloque(props.asignacion.id);
    }

    function eliminarBloque(event){
        props.deleteBloque(props.asignacion.id);
    }

    function deleteCard(){
        props.deleteCard(props.asignacion.id)
    }

    function UpdateDia(id, dia){
        props.UpdateDia(props.asignacion.id, id, dia)
    }

    function UpdateInicio(id, dia){
        props.UpdateInicio(props.asignacion.id, id, dia)
    }

    function UpdateFin(id, dia){
        props.UpdateFin(props.asignacion.id, id, dia)
    }


    return (
        <div className="card">

            <div className="delete-card">
                    <button className="button-classic trash-button" onClick={deleteCard}><BiTrash size={18}/></button>
            </div>

            <div className="card-title">
                <TextInput
                placeholder="Nombre"
                value={props.titulo}
                onChange={handleChange}
                style={{marginLeft:"5%"}}
                />
            </div>

            <div>
                {

                    props.asignacion.bloques.map((x,index)=>{
                        return <Bloque key={x.id} 
                        index={index}
                        bloque={x}
                        UpdateDia={UpdateDia}
                        UpdateInicio={UpdateInicio}
                        UpdateFin={UpdateFin}></Bloque>
                        
                    })
                }
            </div>

            <div className="card-button">
                <button className="button-add-delete" onClick={agregarBloque}> <BiPlus size={14}/> </button>
                <button className="button-add-delete"  onClick={eliminarBloque}> <BiMinus size={14}/> </button>
            </div>


        </div>
    )
}

export default Card

