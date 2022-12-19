import React from 'react'
import '../CSS/Footer.css'

function Footer() {
    return (
        <>
            <div className='Footer'>
                <div className='FooterSection'>
                    <div className='about'>
                        <div className='aboutHeading'>
                            <h1>FoodMood</h1>
                        </div>
                        <div className='aboutContent'>
                            <p>Learn to cook with our wide variety of recipes <br /> from popular chefs all over the world.</p>
                        </div>
                    </div>
                    <div className='recipes'>
                        <h3>Recipes</h3>
                        <div className='recipesItems'>
                            <div>Chicken</div>
                            <div>Beef</div>
                            <div>Dessert</div>
                            <div>Seafood</div>
                        </div>
                    </div>
                    <div className='contactLinks'>
                        <h3>Contact Links</h3>
                        <div className='contactLinksItems'>
                            <div>Contact Us</div>
                            <div>Learn to Cook</div>
                            <div>Get Intouch</div>
                        </div>
                    </div>
                    <div className='socialLinks'>
                        <h3>Social Media</h3>
                        <div className='socialLinksItems'>
                            <div>Facebook</div>
                            <div>Instagram</div>
                            <div>Twitter</div>
                            <div>LinkedIn</div>
                        </div>
                    </div>

                </div>
                <div className='bottomFooter'>Designed and Developed with ❤️ by Lalit Kumar</div>
            </div>
        </>
    )
}

export default Footer