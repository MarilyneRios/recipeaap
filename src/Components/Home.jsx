import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/recipe/recipes")
      .then((recipes) => {
        setRecipes(recipes.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center mx-3">
      <div className="m-3 d-flex align-items-center justify-content-between">
        <h2>Liste des recettes</h2>
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

      <div className="d-flex flex-wrap  justify-content-start gap-3">
        {recipes.map((recipe) => (
          <div key={recipe._id} className="mt-4 p-3 border rounded shadow w-25">
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

export default Home;
