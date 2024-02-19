import { useState } from "react";
import axios from "axios";

function CreateRecipe() {
    // Déclaration des états
    const [recipe, setRecipe]=useState({
      name:"",
      ingredients:"",
      instructions:"",
      comments:"",
      pseudo:"",
      imageUrl:"",
      userId: window.localStorage.getItem("id")
    });
    
   
    // const [isButtonDisabled, setIsButtonDisabled] = useState(false); //désactiver le btn un fois validé

    const handleChange = (e) => {
      const {name, value} = e.target
      setRecipe ({...recipe, [name]: value})
    }
  
    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:3001/recipe/create-recipe', recipe)
      .then(result => {
        console.log(result.data)
        alert("recipe create")
      }) .catch (err => console.log(err))
   
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

      <div className="mb-2">
      <label htmlFor="ing">Les ingrédients</label>
      <input
          className="form-control input-lg"
          type="text"  
          name="ing"
          onChange={handleChange}
          placeholder="Entrer les ingédients"
        />
      </div>
      <div className="mb-2">
      <label htmlFor="desc">La préparation</label>
      <input
          className="form-control input-lg"
          type="text"  
          name="desc"
          onChange={handleChange}
          placeholder="Entrer la préparation"
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
          type="text"
          placeholder="Entrer URL"
          name="imageUrl"
          className="form-control input-lg"
          onChange={handleChange}
        />
      </div>
      <div className="mb-1  d-flex justify-content-center">
        <button className="btn btn-outline-success w-100">Envoyer</button>
      </div>
    </form>
  </div>
  )
}

export default CreateRecipe