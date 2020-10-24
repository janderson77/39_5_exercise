import React, {useState} from 'react';
import Coin from './Coin'
import {choice} from './choice'

const CoinBoard = (props) => {
    const [coin, setCoin] = useState(null);
    const [headCount, setHeadCount] = useState(0)
    const [tailsCount, setTailsCount] = useState(0)
    const flipCoin = () => {
        const newCoin = choice(props.coins);
        setCoin(newCoin);
        if (newCoin.side === 'heads'){
            setHeadCount(count => count + 1)
        }else{
            setTailsCount(count => count + 1)
        }
    }

    const currCoin = coin ? (
        <Coin side={coin.side} img={coin.img} />
    ): null;

    return(
        <div className="CoinBoard">
            <h1>Let's flip a coin!</h1>
            {currCoin}
            <button className="CoinBoard-button" onClick={flipCoin} >Flip Me!</button>
            <div>
                <p>Out of {headCount + tailsCount} flips, there have been {headCount} heads and {tailsCount} tails</p>
            </div>
        </div>
    )
}

CoinBoard.defaultProps = {
    coins: [
        {
            side: 'heads',
            img: 'https://cdn11.bigcommerce.com/s-obvfn8/images/stencil/1280x1280/products/77521/1055532/064lswxUIQ-1941P-BUa__59565.1597190754.jpg?c=3'
        },
        {
            side: 'tails',
            img: 'https://cdn11.bigcommerce.com/s-obvfn8/images/stencil/1280x1280/products/77521/1055535/063cgmUIQ-1941P-BUb__69232.1597190754.jpg?c=3'
        }
    ]
}

export default CoinBoard