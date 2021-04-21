import React, { Component } from 'react'
import './manual.css'
import {  NavLink } from 'react-router-dom';

export default class Manual extends Component {
    render() {
        return (
            <div className="min-container-hei">

                <div className="manual-container primer-manual">

                    <div className="manual-image">
                        <img src={"/img/cardempty.png"}></img>
                    </div>

                    <div className="manual-text">
                        <h2>Primeros pasos</h2>
                        <p>
                            La tarjeta que se muestra en la parte izquierda de este texto tiene la funcion de agregar nuevas asignaciones en el horario que se desea realizar, al hacer click genera una tarjeta nueva y vacia que podra ser llenada a su gusto.
                        </p>

                        <p>
                            Algo que se debe resaltar es que cada cambio es guardado de manera automatico por la aplicacion, es decir que puede cerrar la pagina, volverla a abrir y todos sus cambios se veran reflejados nuevamente.
                        </p>


                    </div>

                </div>

                
                <div className="manual-container segundo-manual">

                    <div className="manual-text" >
                        <h2 >Como utilizar las tarjetas</h2>
                        <ul>
                            <li>Lo primero que se debe conocer son los botones de accion ubicados en la parte superior izquierda, el de la papelera elimina la tarjeta y el ojo la oculta haciendo que no sea tomada en cuenta para las validaciones.</li>
                            <li>Lo siguiente que se debe saber es sobre los iconos de estatus ubicados en la parte superior derecha de la tarjeta y en la parte superior derecha de cada bloque, estos nos ayudan a conocer el estado de la tarjeta o bloque, ya sea que este duplicada, vacia o correcta.</li>
                            <li>El campo de texto y la seleccion de color son las que tomaran las casillas una vez el horario se haya generado. </li>
                            <li>Por ultimo esta la seccion de los bloques y se puede incrementar o reducir clickenado en los simbolos + y - respectivamente, cada bloque tiene un seleccionable para dia, hora de inicio y hora del final de la actividad. </li>
                        </ul>
                    </div>

                    <div className="manual-image">
                        <img src={"/img/cardfull.png"}></img>
                    </div>

                </div>

                <div className="last-manual">

                    <div className="last-manual-image">
                        <h2 style={{textAlign:"center"}}>Como generar el horario</h2>
                        <img src={"/img/horario.jpg"}></img>
                    </div>

                    <div className="last-manual-text">
                        <p>
                            Una vez que ya completo cada una de las tarjetas es primordial que todas tengan el estatus de correcta, es decir que no haya bloques duplicados o esten vacios, en caso de que exista alguno se debe borrar o ocultarlo con el icono del ojo.
                        </p>

                        <p>
                            Acto seguido en la parte superior derecha de la pagina generadora de horarios se encuentra un menu desplegable de opciones en las que se puede reiniciar y se eliminarian todas las tarjeta o esta la opcion de generar horario, al hacer click se abre una ventana con el horario generado.
                        </p>

                        <p>
                            Por ultimo una vez en la ventana en la que se te muestra tu horario realizado, en la parte de abajo tienes dos iconos con la opcion de descargarlo, ya sea en formato PDF o en JPG y una vez hayas seleccionado el de tu agrado ya tendrias tu horario generado de manera digital en tu ordenador o dispositivo movil.
                        </p>

                        <div className="manual-container-link">
                            <NavLink to="/Builder"  className="manual-link"> ¡¡ Estoy listo para iniciar !!</NavLink> 
                        </div>

                    </div>

                </div>
                
            </div>
        )
    }
}
