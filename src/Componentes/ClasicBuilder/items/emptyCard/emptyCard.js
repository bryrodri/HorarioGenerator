import React from 'react'


import {BiAddToQueue } from "react-icons/bi";

//estilos
import './emptyCard.css'

const EmptyCard = (props) => {
    return (
        <div className="card empty-card" onClick={props.createCard}>
            <BiAddToQueue size={25}/>
            <span>Agregar una nueva asignatura</span>
        </div>
    )
}

export default EmptyCard
