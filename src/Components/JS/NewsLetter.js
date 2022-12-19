import React from 'react'
import '../CSS/NewsLetter.css'
import MyImage from './KitchenTable.jpg'

function NewsLetter() {
    return (
        <>
            <div className='newsLetterSection' style={{ backgroundImage:`url(${MyImage})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
                <div className='newsLetterHeading'>
                    <h1>Subscribe to get weekely <br /> recipe updates</h1>
                </div>
                <div className='newsLetterInputBox'>
                    <input className='newsLetterInput' placeholder='Enter your email here' type="text" />
                    <button className='subscribeButton'>Subscribe</button>

                </div>
            </div>
        </>
    )
}

export default NewsLetter