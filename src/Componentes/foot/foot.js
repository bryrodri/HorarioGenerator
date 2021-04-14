import React, { Component } from 'react'
import { AiFillInstagram, AiFillLinkedin, AiTwotoneMail } from "react-icons/ai";


import './foot.css'

export default class Foot extends Component {
    render() {
        return (
            <div className="foot-secction">
                <div className="foot-text">
                    <span>© 2021 Generador de horarios. Desarrollado con ReactJS por Bryam Rodriguez.</span>
                </div>

                <div className="foot-redes">

                    <div className="icons-foot">
                        <a href="https://www.instagram.com/bryrodri/?hl=es-la" target="_blank" rel="noreferrer" >
                            <AiFillInstagram size={25}/>
                        </a>

                        <a href="https://www.linkedin.com/in/bryan-rodriguez-647563149/" target="_blank" rel="noreferrer" >
                            <AiFillLinkedin size={25}/>
                        </a>

                        <a href="mailto:bryrodri1@gmail.com" target="_blank" rel="noreferrer" >
                            <AiTwotoneMail size={25}/>
                        </a>
                    </div>



                

                </div>

                
            </div>
        )
    }
}
