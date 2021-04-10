import React, { useState } from 'react'
import { TextInput } from 'grommet';


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

    return (
        <div className="card">

            <div className="delete-card">
                    <button onClick={deleteCard}>x</button>
            </div>

            <div className="card-title">
                <TextInput
                placeholder="type here"
                value={props.titulo}
                onChange={handleChange}
                style={{marginLeft:"5%"}}
                />
            </div>

            <div>
                {

                    props.asignacion.bloques.map(x=>{
                        return <Bloque key={x.id} 
                        bloque={x}
                        UpdateDia={UpdateDia}></Bloque>
                        
                    })
                }
            </div>

            <div className="card-button">
                <button onClick={agregarBloque}>+</button>
                <button onClick={eliminarBloque}>-</button>
            </div>


        </div>
    )
}

export default Card

