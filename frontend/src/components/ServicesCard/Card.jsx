import React from 'react'
import styleCard from "./ServicesCard.module.scss"

const Card = (props) => {
    return (
        <div onClick={() => props.handleITClick(props.tag ? props.tag : props.href)} className={styleCard.cardBox}>

            <div className={styleCard.logoPart}>
                <img src={props.image} alt={props.serviceName} />
            </div>
            <div className={styleCard.textPart}>
                <h3>{props.serviceName}</h3>
            </div>
        </div>
    )
}

export default Card