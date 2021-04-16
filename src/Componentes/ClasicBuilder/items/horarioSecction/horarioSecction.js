import React from 'react'

import './horarioSecction.css'
import { BsX } from "react-icons/bs";


import Table from '../../../table/table'

const HorarioSecction = (props) => {
    return (
        <div className="float-window">

            <div className="horario-secction-container">

            <div className="delete-card">
                    <button className="button-classic trash-button" onClick={props.OpenCloseHorarioPage} ><BsX size={18}/></button>
            </div>

                <div className="table-secction">
                    <Table horario={props.horario}></Table>
                </div>
                


            </div>
            
            
        </div>
    )
}

export default HorarioSecction
