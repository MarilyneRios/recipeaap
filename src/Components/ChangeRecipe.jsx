import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function ChangeRecipe() {
    
    const [recipe, setRecipe]=useState({
      name:"",
      category:"",
      ingredients:[],
      instructions:"",
      comments:"",
      pseudo:"",
      imageUrl:"",
      userId: window.localStorage.getItem("id")
    });
    
    const handleChange = (e) => {
      const {name, value} = e.target
      setRecipe ({...recipe, [name]: value})
    }
  
    //Navigation
    const navigate = useNavigate()

    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      axios.post('http://localhost:3001/recipe/create-recipe', recipe)
        .then(result => {
          navigate('/')
          console.log(result.data)
          alert("recipe create")
        })
        .catch (err => console.log(err))
    };
    

  return (
    <div
    className="container d-flex flex-column align-items-center justify-content-center"
  >
    <form
      className="border border-success rounded py-2 px-5 shadow-lg form-shadow w-75 my-3"
      style={{ backgroundColor: "#fafaf9"}}
      onSubmit={handleSubmit}
    >
      {/* card title */}
      <h1 className="fs-1 my-2 text-center text-success" 
        style={{ fontFamily: 'ui-monospace, "Cascadia Mono", "Segoe UI Mono", monospace' }}>
        {" "}
        Créer une recette
      </h1>
      {/* inputs */}
      <div className="mb-2">
      <label htmlFor="name">Nom de la recette</label>
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
            <option value="">Selectionner une Categorie</option>
            <option value="Apéritif">Apéritif</option>
            <option value="Entrée">Entrée</option>
            <option value="Plat">Plat</option>
            <option value="Dessert">Dessert</option>
            <option value="Boisson">Boisson</option>
          </select>
        </div>

      <div className="mb-2">
      <label htmlFor="ingredients">Les ingrédients</label>
      <input
          className="form-control input-lg"
          type="text"  
          name="ingredients"
          onChange={handleChange}
          placeholder="Entrer les ingédients"
        />
      </div>
      <div className="mb-2">
      <label htmlFor="instructions">La préparation</label>
      <input
          className="form-control input-lg"
          type="text"  
          name="instructions"
          onChange={handleChange}
          placeholder="Entrer la préparation"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="makingTime">Le temps de préparation (min) :</label>
        <input
          className="form-control input-lg"
          type="number"    
          name="makingTime"
          onChange={handleChange}
          placeholder="0"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="cookingTime">Le temps de cuisson (min) :</label>
        <input
          className="form-control input-lg"
          type="number"    
          name="cookingTime"
          onChange={handleChange}
          placeholder="0"
        />
      </div>
      <div className="mb-2">
              <label htmlFor="comments">Les bienfaits de la recette</label>
        <input
            className="form-control input-lg"
            type="text"  
            name="comments"
            onChange={handleChange}
            placeholder="Entrer le commentaire"
          />
      </div>
      <div className="mb-2">
        <label htmlFor="pseudo">Le pseudo de l&apos;auteur</label>
        <input
          className="form-control input-lg"
          type="text"    
          name="pseudo"
          onChange={handleChange}
          placeholder="pseudo"
       
        />
      </div>
      <div className="mb-2">
      <label htmlFor="imageUrl">L&apos;image URL</label>
      
        <input
          type="file"
          placeholder="importer votre image"
          name="imageUrl"
          className="form-control input-lg"
          onChange={handleChange}
        />

      
      </div>
      <div className="mb-1  d-flex justify-content-center">
        <button className="btn btn-outline-success w-100 mt-3">Envoyer</button>
      </div>
    </form>
  </div>
  )
}

export default ChangeRecipe