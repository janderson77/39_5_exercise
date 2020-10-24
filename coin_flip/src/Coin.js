import React, {useState} from 'react'
import './Coin.css'

const Coin = (props) => {
    return (
        <div className="Coin">
            <img className="Coin-img" src={props.img} alt={props.side} />
        </div>
    )
}

export default Coin