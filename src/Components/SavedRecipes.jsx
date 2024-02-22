import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function SavedRecipes() {
  const [savedRecipes, setSavedRecipes] = useState([]);
  // Récupérer l'identifiant de l'utilisateur depuis le stockage local
  const userId = window.localStorage.getItem("id");

  useEffect(() => {
    axios
      .get("http://localhost:3001/recipe/user-recipes/" + userId)
      .then((recipes) => {
        setSavedRecipes(recipes.data);
      })
      .catch((error) => console.log(error));
  }, [userId]);

  return (
    <div className="container d-flex flex-column justify-content-center my-4" 
      >
      <div className=" mt-3 d-flex align-items-center justify-content-between px-4 py-2 rounded" style={{ backgroundColor: "#f8f9fa" }}>
        <h2>Mes recettes préférées</h2>
        {/* Search Bar */}
        <form className="d-flex">
          <input
            className="form-control  me-4 mx-3"
            type="search"
            placeholder="Nom ou catégorie"
            aria-label="Search"
            id="searchBar"
          />
          <button className="btn btn-outline-success" type="submit">
            Rechercher
          </button>
        </form>
      </div>

      <div className="d-flex flex-wrap  justify-content-start gap-4" >
        {savedRecipes.map((recipe) => (
          <div key={recipe._id} className="mt-4 p-3 border rounded shadow w-25 "  style={{ backgroundColor: "#f8f9fa" }}>
            <Link
              to={`/read-recipe/${recipe._id}`}
              className="text-decoration-none"
            >
              <h3>{recipe.name}</h3>
              <img
                src={recipe.imageUrl}
                alt={recipe.name}
                className="img-fluid w-100 rounded"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SavedRecipes