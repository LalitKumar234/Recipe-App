import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import '../CSS/Recipe.css'
import Loader from './Lottie'


function Category() {
  const { id } = useParams();
  const [meal, setMeal] = useState("");
  const [isLoading, setLoading] = useState(true);

  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`

  useEffect(() => {
    axios.get(url).then((response) => {
      setMeal(response.data.meals)
      setLoading(false)
    })
  }, [url]);

  console.log(meal)
  return ( isLoading ? <Loader/> : (
    <>
      <div className='recipe-Container'>

        {
          Array.isArray(meal)
            ? meal.map((recipe) => {

              return (
                <>
                  <div className='mealRecipe'>
                    <h1 className='mealHeading'>{recipe.strMeal}</h1>
                    <div className='mealThumbIngredients'>
                      <div className='mealThumbButton'>
                      <img className='mealThumb' src={recipe.strMealThumb} alt="" />
                      
                      {/* <button><a href='https://ide.geeksforgeeks.org/'> Watch Video</a></button> */}
                      </div>
                      <div className='ingredients'>
                        <h2>Top Ingredients</h2>
                        <ul className='ingredientsList'>
                          <li>{recipe.strIngredient1}</li>
                          <li>{recipe.strIngredient2}</li>
                          <li>{recipe.strIngredient3}</li>
                          <li>{recipe.strIngredient4}</li>
                          <li>{recipe.strIngredient5}</li>
                          <li>{recipe.strIngredient6}</li>
                          <li>{recipe.strIngredient7}</li>
                          <li>{recipe.strIngredient8}</li>
                          <li>{recipe.strIngredient9}</li>
                          <li>{recipe.strIngredient10}</li>
                          <li>{recipe.strIngredient11}</li>
                        </ul>
                      </div>
                    </div>

                  </div>
                  <div>
                  <p className='recipeInstruction'>{recipe.strInstructions}</p>
                  </div>


                </>
              )
            })
            : null
        }


      </div>
    </>
  )
    
  )
}

export default Category