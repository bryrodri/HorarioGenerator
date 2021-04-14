import React, { Component } from 'react'

import { Grommet, Box, Menu } from 'grommet';
//estilos
import './clasicBuilder.css'

//items
import CardSecction from './items/cardsSecction/cardSecction'



export class ClasicBuilder extends Component {
    


    
    render() {
        
        return (
            <div className="min-container-hei">
                    <Box align="end" pad="large">
                    <Menu
                        dropProps={{ align: { top: 'bottom', left: 'left' } }}
                        label="Acciones"
                        items={[
                        { label: 'Configuracion', onClick: () => {console.log("hola")} },
                        { label: 'Generar horario', gap: 'small' },
                        ]}
                    />
                    </Box>
                <CardSecction></CardSecction>
            </div>
        )
    }
}


export default ClasicBuilder
