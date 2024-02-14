import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container d-flex justify-content-between align-items-center flex-column flex-lg-row">
          <div className="d-flex align-items-center">
            <Link className="navbar-brand fw-bold fs-2 link-success mb-2 " to="/">
              Les recettes
            </Link>

            <Link className="navbar-brand link-success  p-2 mx-2" aria-current="page" to="create-recipe">
              Créer
            </Link>

            <Link className="navbar-brand link-success p-2 mx-2" to="favorite-recipe">
              Mes préférées
            </Link>
          </div>
            {/* Search Bar */}
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Nom ou catégorie"
              aria-label="Search"
              id="searchBar"
            />
            <button className="btn btn-outline-success" type="submit">
              Rechercher
            </button>
          </form>
    
            {/* btn registration/login or logout */}
          <div>
            
                <Link to ="/auth/register" className="btn btn-outline-success mx-1 my-3">
                  S&apos;enregistrer
                </Link>
          
                <Link to ="/auth/login" className="btn btn-outline-success mx-1 my-3">
                     S&apos;inscrire
                </Link>
        
            {/*            
            <button className="btn btn-outline-success mx-1 my-2" type="submit">
              Déconnexion
            </button> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
