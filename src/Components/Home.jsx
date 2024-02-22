import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');

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
  

  return (
    <div className="container-fluid d-flex flex-column justify-content-center mx-auto my-3" 
   
   >
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

          <button className="btn btn-outline-success" 
          type="submit"
          >
            Rechercher
          </button>
        </form>
      </div>

      <div className="d-flex flex-wrap  justify-content-start gap-4" >
        {recipes.map((recipe) => (
          <div key={recipe._id} className="mt-4 p-3 border rounded shadow w-25 "  style={{ backgroundColor: "#f8f9fa" }}>
            <Link
              to={`/read-recipe/${recipe._id}`}
              className="text-decoration-none"
            >
              <h3>{recipe.name}</h3>
              <img
                src={recipe.imageUrl}
                alt={recipe.name}
                width={150}
                height={150}
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
