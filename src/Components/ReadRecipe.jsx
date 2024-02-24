import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios";

function ReadRecipe() {
    // Récupérer l'identifiant de la recette 
    const { id} = useParams();
    // Récupérer l'identifiant de l'utilisateur depuis le stockage local
    const userId = window.localStorage.getItem("id");
    const [recipe, setRecipe]= useState([]);
    const [savedRecipes, setSavedRecipes] = useState([]);

    //Récup une recette du back
    useEffect(() => {
        const getRecipe = () => {
        axios.get("http://localhost:3001/recipe/recipe-by-id/" + id)
          .then((result) => {
            console.log('getRecipe' + result);
            setRecipe(result.data);
          })
          .catch((error) => console.log("getRecipe error" + error));
      };

      // Récup une recette préférée
        const fetchSavedRecipes = () => {
        axios.get('http://localhost:3001/recipe/saved-recipes/'+ userId)
            .then((result) => {
                console.log('fetchSavedRecipes : ' +result.data.savedRecipes);
                if (result.data.savedRecipes) {
                    setSavedRecipes(result.data.savedRecipes);
                }
            })
            .catch((error) => console.log("fetchSavedRecipes error" + error));
    }
      fetchSavedRecipes();
      getRecipe();
    }, [id,userId]);       

    //Ajouter une recette aux préférées
    const savedRecipe = (recipeId) => {
      axios.put("http://localhost:3001/recipe", { userId, recipeId })
        .then((result) => {
          console.log("savedRecipe : " + result);
          setSavedRecipes(result.data.savedRecipes);
        })
        .catch((error) => console.log("savedRecipe error :" + error));
    };
    const isRecipeSaved = (id) => savedRecipes && savedRecipes.includes(id);


  return (
    <div className="d-flex  justify-content-center container border rounded shadow my-3"
    style={{ backgroundColor: "#f8f9fa" }}>
        {recipe ? (
          <>
          <div className="p-2 col-4 my-3">
          <img src={recipe.imageUrl} alt={recipe.name} className="img-fluid  rounded" />
          </div>
          <div className="  col-8 my-3">
          <div className="d-flex justify-content-between ">
          <h2 className="link-success fst-italic fw-bold">{recipe.name}</h2>
            <button className="btn btn-outline-danger  my-1 " 
            onClick={() => savedRecipe(recipe._id)}
             disabled ={isRecipeSaved(recipe._id)}
            >
            {isRecipeSaved(recipe._id) ? "Préférée" : "Non préférée"}
            </button>
          </div>
          <div>
            <h4 className="mt-2 fw-bold text-secondary">{recipe.category}</h4>
            
            <h4 className="mt-2">Les ingrédients</h4>
            <p>{recipe.ingredients}</p>
            
            <h4 className="mt-2">La préparation</h4>
            <p>{recipe.instructions}</p>
            <h4 className="mt-2">Le temps de préparation</h4>
            <p>{recipe.makingTime}</p>
            <h4 className="mt-2">Le temps de cuisson</h4>
            <p>{recipe.cookingTime}</p>
            <h4 className="mt-2">Les bienfaits de la recette</h4>
            <p>{recipe.comments}</p>
            <h4 className="mt-2">L&apos;auteur</h4>
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