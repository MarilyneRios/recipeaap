import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios";

function ReadRecipe() {
    // Récupérer l'identifiant de la recette depuis le paramètre de l'URL
    const { id} = useParams();
    // Récupérer l'identifiant de l'utilisateur depuis le stockage local
    const userId = window.localStorage.getItem("id");
    const [recipe, setRecipe]= useState([])
    const [savedRecipes, setsavedRecipes] =useState([])

    //Récup une recette du back
    useEffect(() => {
        const getRecipe = () => {
        axios.get("http://localhost:3001/recipe/recipe-by-id/" + id)
          .then((result) => {
            //console.log("getRecipe :" + JSON.stringify(result.data));
            setRecipe(result.data);
          })
          .catch((error) => console.log("getRecipe error" + error));
      };
        getRecipe();
    }, []);

    // récup une recette préférée
    useEffect(()=> {
      const fetchSavedRecipes = () => {
        axios.get( 'http://localhost:3001/recipe/saved-recipes/'+ userId)
        .then((result) => {
          console.log("fetchSavedRecipes:" + JSON.stringify(result.data.savedRecipes));
         setsavedRecipes(result.data.savedRecipes);
       })
       .catch((error) => console.log("fetchSavedRecipes error" + error));
      }
      fetchSavedRecipes();
    }, [userId])

    //Ajouter une recette aux préférées
    const savedRecipe = (recipeId) => {
      axios
        .put("http://localhost:3001/recipes", { userId, recipeId })
        .then((result) => {
          console.log("savedRecipe :" + result);
        })
        .catch((error) => console.log("savedRecipe error :" + error));
    };

  return (
    <div className="d-flex  justify-content-center container border rounded shadow my-3">
        {recipe ? (
          <>
          <div className="p-2 col-6 my-3">
          <img src={recipe.imageUrl} alt={recipe.name} className="img-fluid  rounded"/>
          </div>
          <div className="p-2  col-6 my-3">
          <div className="d-flex justify-content-between px-3">
          <h2 className="link-success fst-italic mx-2">{recipe.name}</h2>
            <button className="btn btn-outline-danger mx-2 my-1" onClick={() => savedRecipe(recipe.userId)}>Mes préférées</button>
          </div>
          <div>
          <h3 className="mt-2">Les ingrédients</h3>
            <p>{recipe.ingredients}</p>
            <h3 className="mt-2">La préparation</h3>
            <p>{recipe.instructions}</p>
            <h3 className="mt-2">Les bienfaits de la recette</h3>
            <p>{recipe.comments}</p>
            <h3 className="mt-2">L&apos;auteur</h3>
            <p>{recipe.pseudo}</p>
          </div>
          </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
    </div>
  );
}

export default ReadRecipe