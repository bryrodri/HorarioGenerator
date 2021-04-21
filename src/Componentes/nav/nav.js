import React, { Component } from 'react'
import {  NavLink } from 'react-router-dom';
import { BiHomeAlt, BiBookBookmark } from "react-icons/bi";

//estilos
import './nav.css'

export class Nav extends Component {
    render() {
        return (
            <div className="nav-container">
                
                <div className="nav-menu">
                    <NavLink to="/Home"  className="nav--buton"> <BiHomeAlt size={22} /> <span className="text--nav">Inicio</span></NavLink> 
                    <NavLink to="/Manual"  className="nav--buton"> <BiBookBookmark size={22} /> <span className="text--nav">Manual</span></NavLink> 
                </div>

                <div className="nav--action">
                    <NavLink to="/Builder" activeClassName='nav--action--button-dis' className="nav--action--button">  <span>Crear Horario</span></NavLink> 
                </div>

            </div>
        )
    }
}

export default Nav
