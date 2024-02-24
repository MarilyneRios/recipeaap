import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateRecipe() {
  // Déclaration des états

  const [recipe, setRecipe] = useState({
    name: "",
    category: "",
    ingredients: [],
    instructions: "",
    makingTime: "",
    cookingTime: "",
    comments: "",
    pseudo: "",
    imageUrl: "",
    userId: window.localStorage.getItem("id"),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleIngredientChange = async (e, index) => {
    const { value } = e.target;
    const newIngredients = [...recipe.ingredients]; // Copie du tableau d'ingrédients
    newIngredients[index] = value; // Mettre à jour l'ingrédient spécifique
    setRecipe({ ...recipe, ingredients: newIngredients }); // Mettre à jour l'état avec les nouveaux ingrédients
    console.log(recipe)
  };

  //btn Add
  const addIngredient = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
  };

  //Navigation
  const navigate = useNavigate();

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/recipe/create-recipe", recipe)
      .then((result) => {
        navigate("/");
        console.log(result.data);
        alert("recipe create");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center">
      <form
        className="border border-success rounded py-2 px-5 shadow-lg form-shadow w-75 my-3"
        style={{ backgroundColor: "#fafaf9" }}
        onSubmit={handleSubmit}
      >
        {/* card title */}
        <h1
          className="fs-1 my-2 text-center text-success mb-1"
          style={{
            fontFamily:
              'ui-monospace, "Cascadia Mono", "Segoe UI Mono", monospace',
          }}
        >
          {" "}
          Créer une recette
        </h1>
        {/* inputs */}
        <div className="mb-2">
          <label htmlFor="name" className="mb-1">
            Nom de la recette
          </label>
          <input
            className="form-control input-lg"
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Entrer le nom de la recette"
          />
        </div>

        <div className="mb-2 ">
          <label htmlFor="category">Catégorie : &nbsp;</label>
          <select
            className="form-control input-lg"
            aria-label="Default select example"
            id="category"
            name="category"
            value={recipe.category}
            onChange={handleChange}
          >
            <option value="">Selectionner une catégorie</option>
            <option value="Apéritif">Apéritif</option>
            <option value="Entrée">Entrée</option>
            <option value="Plat">Plat</option>
            <option value="Dessert">Dessert</option>
            <option value="Boisson">Boisson</option>
          </select>
        </div>
        {/* inputs - btn ingredients*/}
        <div className="mb-2 ">
          <label htmlFor="ingredients" className="mb-1">
            Les ingrédients :
          </label>
          <div className="d-flex flex-column align-items-center justify-content-center">
            {recipe && recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
              <input
                key={index}
                className="form-control input-lg"
                type="text"
                name="ingredients"
                value={ingredient}
                onChange={(e) => handleIngredientChange(e, index)}
                placeholder="Entrer un ingrédient"
              />
            ))}
            <button
              className="btn btn-outline-success w-100 mx-2"
              onClick={addIngredient}
              type="button"
            >
              Ajouter un ingrédient
            </button>
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="instructions" className="mb-1">
            La préparation
          </label>
          <textarea
            className="form-control input-lg"
            type="text"
            rows={5}
            name="instructions"
            style={{ height: "auto", resize: "none" }}
            onChange={handleChange}
            placeholder="Entrer la préparation"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="makingTime" className="mb-1">
            Le temps de préparation (min):
          </label>
          <input
            className="form-control input-lg"
            type="number"
            name="makingTime"
            onChange={handleChange}
            placeholder="0"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="cookingTime" className="mb-1">
            Le temps de cuisson (min):
          </label>
          <input
            className="form-control input-lg"
            type="number"
            name="cookingTime"
            onChange={handleChange}
            placeholder="0"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="comments" className="mb-1">
            Les bienfaits de la recette
          </label>
          <textarea
            className="form-control input-lg"
            type="text"
            name="comments"
            onChange={handleChange}
            placeholder="Entrer les vertues de la recette"
            style={{ height: "auto", resize: "none" }}
          />
        </div>

        <div className="mb-2">
          <label htmlFor="pseudo" className="mb-1">
            Le pseudo de l&apos;auteur
          </label>
          <input
            className="form-control input-lg"
            type="text"
            name="pseudo"
            onChange={handleChange}
            placeholder="pseudo"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="imageUrl" className="mb-1">
            L&apos;image URL
          </label>

          <input
            type="text"
            placeholder="Importer le lien url de votre image"
            name="imageUrl"
            className="form-control input-lg"
            onChange={handleChange}
          />
        </div>
        <div className="mb-1  d-flex justify-content-center">
          <button className="btn btn-outline-success w-100 mt-3" type="submit">
            Créer une recette
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateRecipe;

/*
<input
   type="text"
   placeholder="Entrer URL"
  name="imageUrl"
  className="form-control input-lg"
  onChange={handleChange}
/>  */
