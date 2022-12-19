import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './CSS/Recipes.css'
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import BookmarksIcon from '@mui/icons-material/Bookmarks';




function Recipes() {
  const [recipes, setRecipes] = useState("");
  const [category, setCategory] = useState("");
  let food = category;

  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`


  useEffect(() => {
    
    axios.get(url).then((response) => {
      setRecipes(response.data.meals)

    })
  }, [url])



  const readLater = (recipe) => {
    let bookMarks = JSON.parse(localStorage.getItem('bookMarks') || "[]")
    bookMarks.push(recipe)

    localStorage.setItem('bookMarks', JSON.stringify(bookMarks));
    console.log(bookMarks)

  }

  return ( <> 

        <div className='recipeContainer'>
        <div className='TabContainer'>
          <ul className='Tab-Section'>
            <li className='tabs' activeClassName="active" onClick={(() => setCategory(''))}>Popular</li>
            <li className='tabs' onClick={(() => setCategory('beef'))}>Beef</li>
            <li className='tabs' onClick={(() => setCategory('chicken'))}>Chicken</li>
            <li className='tabs' onClick={(() => setCategory('breakfast'))}>Breakfast</li>
            <li className='tabs' onClick={(() => setCategory('pasta'))}>Pasta</li>
            <li className='tabs' onClick={(() => setCategory('pork'))}>Pork</li>
            <li className='tabs' onClick={(() => setCategory('seafood'))}>Seafood</li>
          </ul>
        </div>
        <div className='foodSection'>
          {
            Array.isArray(recipes)
              ? recipes.map((recipe) => {

                return (

                  <div className='FoodCard'>
                    <Link className="link" to={`/recipe/${(recipe.idMeal)}`}>
                      <div className='foodImage' key={recipe.strMealThumb}><img src={recipe.strMealThumb} className="foodImage" alt="" /></div>
                    </Link>
                    <div className='foodCardContent'>
                      <h3 className='foodTitle' key={recipe.strMeal}>{recipe.strMeal}</h3>
                      <p className='foodDescription' key={recipe.strArea}>{`${recipe.strIngredient1}, ${recipe.strIngredient2}, ${recipe.strIngredient3}, ${recipe.strIngredient4}, ${recipe.strIngredient5}`}</p>
                      <IconButton aria-label="bookmark" onClick={() => readLater(recipe)}>
                        <BookmarksIcon />
                      </IconButton>
                    </div>
                  </div>
                )
              })
              : null
          }
        </div>
      </div>
 


    </>
         )

}

export default Recipes