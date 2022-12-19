import React from 'react'
import '../CSS/Hero.css'
import { Button } from '@mui/material';
import MyImage from './food.png'
import { Link } from 'react-router-dom';


function Hero() {
    return (
        <>
            <div className='heroSection'>
                <div className='herotext'>
                    <div className='heroTitle'>Let's Start <br /> Cooking With <br />Popular Recipes</div>
                    <div className='heroSubTitle'>Want to learn cook but confused how to start? <br /> No need to worry </div>
                    <div className='heroCTA'>
                        <Link className="link" to={`/recipes`}>
                            <Button variant="contained" color="secondary">Get Started</Button>
                        </Link>
                        <Link className="link" to={`/recipes`}>
                        <Button variant="outlined" color="secondary">Explore Menu</Button>
                        </Link>
                    </div>
                </div>
                <div className='heroImage'>
                    <div className='heroBG'></div>
                    <img className="hImage" src={MyImage} alt="Food" />
                    <div className='card'>
                        <div className='cardContent'>
                            <div className='cardInfo'>
                                <img src={MyImage} alt="Food" className="cardImage" />
                                <div className='cardHeadingRating'>
                                    <div className='cardHeading'>Fruit Sandwich</div>
                                    <div className='cardRating'>🔥 5.93</div>
                                </div>
                            </div>
                            <div className='card-Text'>Bread, Strawberry, Jam, Blueberry, Orange, Rasberry</div>
                        </div>

                    </div>
                    <div className='card2'>
                        <div className='cardContent'>
                            <div className='cardInfo'>
                                <img src={MyImage} alt="Food" className="cardImage" />
                                <div className='cardHeadingRating'>
                                    <div className='cardHeading'>Fruit Salad</div>
                                    <div className='cardRating'>🔥 3.68</div>
                                </div>
                            </div>
                            <div className='card-Text'>Orange, Strawberry, Cherry, Blueberry, Kiwi</div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero