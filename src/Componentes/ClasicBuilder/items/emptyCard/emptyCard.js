import React from 'react'
import './emptyCard.css'

const EmptyCard = (props) => {
    return (
        <div className="card" onClick={props.createCard}>
            <p>+</p>
        </div>
    )
}

export default EmptyCard
