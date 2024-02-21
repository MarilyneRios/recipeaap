import { Link } from "react-router-dom";

function NavBar() {
  // Récupérer l'identifiant de l'utilisateur depuis le stockage local
  const username = localStorage.getItem("username");
  console.log("le username du localStorage : " + username);

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
              to="/recipe/favorite-recipe"
            >
              Mes préférées
            </Link>
          </div>

          {/* btn registration/login or logout */}
          <div className="w-100  ">
            {window.localStorage.length ? (
              <>
                <div className="d-flex align-items-center justify-content-evenly w-100">
                  <p className="fs-4   mx-3 mt-3">
                    Bienvenue {username}
                  </p>

                  <Link className="btn btn-outline-success mx-3">
                    Se déconnecter
                  </Link>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/auth/register"
                  className="btn btn-outline-success mx-1 "
                >
                  S&apos;enregistrer
                </Link>
                <Link
                  to="/auth/login"
                  className="btn btn-outline-success mx-1 "
                >
                  S&apos;inscrire
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
