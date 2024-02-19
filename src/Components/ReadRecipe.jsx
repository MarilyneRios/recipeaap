import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios";

function ReadRecipe() {
    const{id} = useParams()
    const [recipe, setRecipe]= useState([])

    useEffect(() => {
       axios.get( 'http://localhost:3001/recipe/recipe-by-id/'+id)
       .then((result) => {
        //console.log(result)
        setRecipe(result.data)
      })
      .catch(err => console.log(err))
    }, [])

  return (
    <div className="d-flex flex-column justify-content-center align-items-center border rounded shadow w-75 mx-auto">
        {recipe ? (
          <>
            <h2>{recipe.name}</h2>
            <img src={recipe.imageUrl} alt={recipe.name} className="img-fluid w-50 rounded"/>
            <h3>Les ingrédients</h3>
            <p>{recipe.ingredients}</p>
            <h3>La préparation</h3>
            <p>{recipe.instructions}</p>
            <h3>Les bienfaits de la recette</h3>
            <p>{recipe.comments}</p>
            <h3>L&apos;auteur</h3>
            <p>{recipe.pseudo}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
    </div>
    );
    
}

export default ReadRecipe