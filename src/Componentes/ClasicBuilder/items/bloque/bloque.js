import React from 'react'
import { Select } from 'grommet';

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

    return (
        <div className="bloque-Secction">
            <div className="bloque-dia">
                <Select
                options={DIAS}
                value={props.bloque.dia}
                onChange={({ option }) => UpdateDia(option)}
                />
            </div>

            <div className="bloque-hora">
                <Select
                options={HORAS}
                value={"hola"}
                onChange={({ option }) => console.log(option)}
                /> 

            </div>

            <div className="bloque-hora">
                <Select
                options={HORAS}
                value={"hola"}
                onChange={({ option }) => console.log(option)}
                /> 

            </div>
            
        </div>
    )
}

export default Bloque
