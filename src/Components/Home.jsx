import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/recipe/recipes")
      .then((recipes) => {
        setRecipes(recipes.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="d-flex justify-content-center mx-3">
      <div >
        <h2>Liste des recettes</h2>
        {recipes.map((recipe) => (
          <div key={recipe._id} className="mt-4 p-3 border rounded shadow w-25">
            <Link to={`/read-recipe/${recipe._id}`} className="text-decoration-none">
              <h3>{recipe.name}</h3>
              <img src={recipe.imageUrl} alt={recipe.name} className="img-fluid w-100 rounded" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
