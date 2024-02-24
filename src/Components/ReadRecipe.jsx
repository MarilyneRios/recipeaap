import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios";
import { Link } from "react-router-dom";


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

       const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:3001/recipe/saved-recipes/' + userId);
        console.log('Response:', response);
        if (response.data.savedRecipes) {
          setSavedRecipes(response.data.savedRecipes);
        }
      } catch(error) {
        console.log("Error fetching saved recipes:", error);
      }
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

    const isRecipeSaved = (id) => savedRecipes.includes(id);

  return (
    <div className="d-flex  justify-content-center container border rounded shadow my-3 "
    style={{ backgroundColor: "#f8f9fa", minHeight:"76vh" }}>
    <div className=" col-auto mt-3">
      <Link className="btn btn-outline-success"to="/"> Retour liste</Link>
    </div>
        {recipe ? (
          <>
          <div className="p-2 col-4 mt-3 mx-1">
          <img src={recipe.imageUrl} alt={recipe.name} className="img-fluid w-100 justify-content-center rounded shadow-lg" 
          style={{ maxHeight: '300px' }}/>
          </div>

          <div className=" px-3 col-6 ">
          <div className="d-flex justify-content-between pt-3">
          <h2 className="link-success fst-italic fw-bold">{recipe.name}</h2>
            <button className="btn btn-outline-danger  my-1 " 
             onClick={() => savedRecipe(recipe._id)}
             disabled ={isRecipeSaved(recipe._id)}
             type="button"
            >
            {isRecipeSaved(recipe._id) ? "Préférée" : "aime"}
            </button>
          </div>

          <div>
            <h4 className="mt-2 fw-bold text-secondary">{recipe.category}</h4>
            <h4 className="mt-2">Les ingrédients</h4>
             {/* Afficher les ingrédients un par un */}
             {recipe && recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
                <p key={index}>{ingredient}</p>
             ))}       
            <h4 className="mt-2">La préparation</h4>
            <p>{recipe.instructions}</p>
           
            <p className="mt-2">Le temps de préparation : {recipe.makingTime} (minutes)</p>
            <p className="mt-2">Le temps de cuisson : {recipe.cookingTime} (minutes)</p>

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