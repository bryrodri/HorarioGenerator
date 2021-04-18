import React from 'react'
import { TextInput } from 'grommet';
import { BiTrash, BiMinus, BiPlus, BiIntersect, BiBadge, BiBadgeCheck, BiHide, BiShow } from "react-icons/bi";

//estilos
import './card.css'

//items
import Bloque from '../bloque/bloque'



export const Card = (props) => {
    

    function handleChange(event) {
        // Here, we invoke the callback with the new value
        props.changeTitle(event.target.value, props.asignacion.id);
    }

    function changeColor(event){
        props.changeColor(event.target.value, props.asignacion.id)
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

    function hideCard(){
        props.hideCard(props.asignacion.id)
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

    function statusIcon(){
        if(props.asignacion.estatus=="valido"){
            return <BiBadgeCheck size={18}/>
        }
        else if(props.asignacion.estatus=="empty"){
            return <BiBadge size={18}/>
        }
        else if(props.asignacion.estatus=="duplicado"){
            return <BiIntersect size={18}/>
        }

    }

    function visIcon(){
        if(!props.asignacion.visibility){
            return <BiHide size={18}/>
        }
        else{
            return <BiShow size={18}/>
        }

    }

    return (
        <div className={"card " + (!props.asignacion.visibility ? 'novisibility-card' : props.asignacion.estatus==="duplicado"&&props.asignacion.visibility ? "duplicate-card" : '')} >

            <div className="delete-card">
                    <button className="button-classic trash-button" onClick={deleteCard}><BiTrash size={18}/></button>
                    <button className="button-classic trash-button" onClick={hideCard}>{visIcon()}</button>
            </div>

            <div className="card-Estatus">
                {
                    statusIcon()
                }
            </div>

            <div className="card-title">
                <TextInput
                placeholder="Nombre"
                value={props.asignacion.titulo}
                onChange={handleChange}
                disabled={props.asignacion.visibility ? false : true}
                />
            </div>

            <div className="card-title" style={{marginTop:"10px"}}>
            <input type="color" value={props.asignacion.color} disabled={props.asignacion.visibility ? false : true} style={{width:"98%"}} onChange={changeColor} />
            </div>

            <div>
                {

                    props.asignacion.bloques.map((x,index)=>{
                        return <Bloque key={x.id} 
                        index={index}
                        disableForm={props.asignacion.visibility}
                        bloque={x}
                        UpdateDia={UpdateDia}
                        UpdateInicio={UpdateInicio}
                        UpdateFin={UpdateFin}></Bloque>
                        
                    })
                }
            </div>

            <div className="card-button">
                <button className="button-add-delete" disabled={props.asignacion.visibility ? false : true} onClick={agregarBloque}> <BiPlus size={14}/> </button>
                <button className="button-add-delete" disabled={props.asignacion.visibility ? false : true} onClick={eliminarBloque}> <BiMinus size={14}/> </button>
            </div>


        </div>
    )
}

export default Card

