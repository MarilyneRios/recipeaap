import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  // Récupérer l'identifiant de l'utilisateur depuis le localStorage
  const [username, setUsername] = useState(localStorage.getItem("username")); 
  const navigate = useNavigate();

  //au chargement de la page username = null
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  console.log("le username du localStorage : " + username);

  const handleLogout = () =>{
    window.localStorage.clear();
    axios.get('http://localhost:3001/auth/logout')
   
    .then(()  => {
      navigate('/');
      setUsername(null);
      //window.location.reload(result);
    })
    .catch((error) => console.log("logout :" + error));
  }

  const isLoggedIn = !!username;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container d-flex justify-content-between align-items-center flex-column flex-lg-row my-1">
          <div className="d-flex align-items-center w-35 ">
            <Link
              className="navbar-brand fw-bold fs-3 link-success "
              to="/"
            >
              Mes recettes
            </Link>

            <Link
              className="navbar-brand link-success  p-2 mx-2 "
              aria-current="page"
              to="/recipe/create-recipe"
            >
              Créer
            </Link>

            <Link
              className="navbar-brand link-success p-2 mx-2"
              to="/recipe/saved-recipes"
            >
              Mes préférées
            </Link>
          </div>

          {/* btn registration/login or logout */}
          <div className="w-100  ">
          {isLoggedIn && window.localStorage.length ? ( // Utiliser la variable d'état isLoggedIn  au lieu de username window.localStorage.length
              <>
                <div className="d-flex align-items-center justify-content-evenly w-100">
                  <p className="fs-4   mx-3 mt-3">
                    Bienvenue {username}
                  </p>

                  <Link className="btn btn-outline-success mx-3" onClick={handleLogout}>
                    Se déconnecter
                  </Link>
                </div>
              </>
            ) : (
              <>
              <div className="d-flex justify-content-end">
                <Link
                    to="/auth/register"
                    className="btn btn-outline-success mx-3 "
                  >
                    S&apos;enregistrer
                  </Link>
                  <Link
                    to="/auth/login"
                    className="btn btn-outline-success mx-1 "
                  >
                    S&apos;inscrire
                  </Link>
              </div>
        
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
