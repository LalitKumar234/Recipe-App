import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../CSS/Popular.css'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Popular() {
    const [recipes, setRecipes] = useState("");

    const url = "https://www.themealdb.com/api/json/v1/1/search.php?s="
    // const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772"


    useEffect(() => {
        axios.get(url).then((response) => {
            // console.log(response.data.meals)
            // console.log(response.data.meals)
            setRecipes(response.data.meals)
        })
    }, [])


    return (
        <>
            <div className='popularContent'>
                <div className='popularFood'>
                    <h1 className='popularHeading'>Popular Food</h1>
                    <div className='popularSubHeading'>we provide a variety of food and beverages recipes <br /> with high taste from famous chefs</div>
                    <div className='popularCardContainer'>
                        {
                            Array.isArray(recipes)
                                ? recipes.slice(1, 4).map((recipe) => {

                                    return (
                                        <div className='FoodCard'>
                                            <div className='foodImage' key={recipe.strMealThumb}><img src={recipe.strMealThumb} className="foodImage" alt="" /></div>
                                            <div className='foodCardContent'>
                                                <h3 className='foodTitle' key={recipe.strMeal}>{recipe.strMeal}</h3>
                                                <p className='foodDescription' key={recipe.strArea}>{`${recipe.strIngredient1}, ${recipe.strIngredient2}, ${recipe.strIngredient3}, ${recipe.strIngredient4}, ${recipe.strIngredient5}`}</p>
                                            </div>
                                        </div>)
                                })
                                : null
                        }
                    </div>
                </div>
                <Link className="link" to={`/recipes`}>
                <div className='exploreFood'><Button variant="outlined" color="secondary">Explore More</Button></div>
                </Link>
            </div>
        </>
    )
}

export default Popular