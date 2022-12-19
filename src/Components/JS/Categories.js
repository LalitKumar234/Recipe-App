import '../CSS/Categories.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MyImage from './food.png'
import Category from './Recipe';



function Categories() {

    const [category, setcategory] = useState([]);
    const [item, setItem] = useState("");
    let searchItem = item
    // console.log(searchItem)

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`

    useEffect(() => {
        axios.get(url).then((response) => {
            setcategory(response.data.meals)
        })
    }, [url])


    return (
        <>
            <div className='categoriesSection'>
                <h1 className='categoriesHeading'>Categories</h1>
                {
                    console.log(category)
                }
                <div className='categoryItems'>

                    <div className='catItem' onClick={() => { setItem('beef'); }}>

                        <img src={MyImage} alt="" className='categoryListImage'></img>
                        <span>Beef</span>

                    </div>


                    <div className='catItem' onClick={() => setItem('chicken')}>
                        <img src={MyImage} alt="" className='categoryListImage'></img>
                        <span>Chicken</span>
                    </div>
                    <div className='catItem' onClick={() => setItem('dessert')}>
                        <img src={MyImage} alt="" className='categoryListImage'></img>
                        <span>Dessert</span>
                    </div>
                    <div className='catItem' onClick={() => setItem('pasta')}>
                        <img src={MyImage} alt="" className='categoryListImage'></img>
                        <span>pasta</span>
                    </div>
                    <div className='catItem' onClick={() => setItem('pork')}>
                        <img src={MyImage} alt="" className='categoryListImage'></img>
                        <span>Pork</span>
                    </div>
                    <div className='catItem' onClick={() => setItem('seafood')}>
                        <img src={MyImage} alt="" className='categoryListImage'></img>
                        <span>Seafood</span>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Categories;