import animationData from './Loader.json';
import { Player } from '@lottiefiles/react-lottie-player';
import '../CSS/Lottie.css'

import React from 'react'

function Loader() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div className='loaderContainer'>
        <Player
            src={animationData}
            // scr="https://assets2.lottiefiles.com/packages/lf20_6ySOay.json"
            className="player"
            loop
            autoplay
            style={{ height: '100px', width: '100px' }}
        />
        </div>

    )
}

export default Loader