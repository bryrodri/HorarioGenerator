import React from 'react'

//estilos
import './information.css'


//items

import Fitem from './items/fitem/fitem'
import Sitem from './items/sitem/sitem'
import Titem from './items/titem/titem'

const Information = () => {
    return (
        <div className="information-secction" >
            <Fitem></Fitem>
            <Sitem></Sitem>
            <Titem></Titem>
        </div>
    )
}

export default Information
