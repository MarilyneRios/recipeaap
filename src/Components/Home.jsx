import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');
  const userId = window.localStorage.getItem("id");
  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/recipe/recipes")
      .then((recipes) => {
        setRecipes(recipes.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSearchResults = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3001/recipe/search?query=${query}`);
    const data = await response.json();
    console.log('Résultats de la recherche :', data);
    setRecipes(data); 
  };

  //ajouter au préféré
  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:3001/recipe/saved-recipes/' + userId);
        setSavedRecipes(response.data.savedRecipes || []);
      } catch (error) {
        console.log("fetchSavedRecipes error" + error);
      }
    };
    fetchSavedRecipes();
  }, [userId]);      
  
   //Ajouter une recette aux préférées
   const savedRecipe = async (recipeId) => {
    try {
      await axios.put("http://localhost:3001/recipe", { userId, recipeId });
      setSavedRecipes([...savedRecipes, recipeId]);
    } catch (error) {
      console.log("savedRecipe error :" + error);
    }
  };

  const isRecipeSaved = (id) => savedRecipes.includes(id);

  return (
    <div className="container-fluid d-flex flex-column justify-content-center mx-auto my-3">
    {/*  searchbar */}
      <div className=" mt-3 d-flex align-items-center justify-content-between px-4 py-2 rounded" style={{ backgroundColor: "#f8f9fa" }}>
        <h2>Liste des recettes</h2>
        {/* Search Bar */}
        <form className="d-flex" onSubmit={handleSearchResults}>
          <input
            className="form-control  me-4 mx-3"
            type="search"
            placeholder="Nom ou catégorie"
            aria-label="Search"
            id="searchBar" 
            value={query}
          onChange={(e) => setQuery(e.target.value)}
          />
          <button className="btn btn-outline-success " 
          type="submit"
          >
            Rechercher
          </button>
        </form>
      </div>
    {/* liste les recettes */}
      <div className="d-flex flex-wrap  justify-content-start gap-4" >
        {recipes.map((recipe) => (
          <div key={recipe._id} className="mt-4 p-3 border rounded shadow w-25 "  
          style={{ backgroundColor: "#f8f9fa" }}>
            <Link
              to={`/read-recipe/${recipe._id}`}
              className="text-decoration-none"
            >
          
          <div className="d-flex justify-content-between pt-3">
          <h2 className="link-success fst-italic fw-bold">{recipe.name}</h2>
          <div>
          <button className="btn btn-outline-danger  w-10 " 
            onClick={() => savedRecipe(recipe._id)}
             disabled ={isRecipeSaved(recipe._id)}
             type="button"
            >
            {isRecipeSaved(recipe._id) ? "Préférée" : "aime"}
            </button>
          </div>
           
          </div>

              <img
                src={recipe.imageUrl}
                alt={recipe.name}
                style={{ maxHeight: '150px' }}
                className="img-fluid w-100 rounded "
              />
              <p> temps de préparation : {recipe.makingTime} (minutes)</p>
              <p> temps de cuissons : {recipe.cookingTime} (minutes)</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
