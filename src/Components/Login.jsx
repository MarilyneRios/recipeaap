import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState ('');
    const [password, setPassword] = useState ('');
    const navigate =useNavigate();

    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/auth/login', {username, password})
        .then (result => {
            window.localStorage.setItem("id", result.data.id)
             // Stocker le username dans le localStorage
            localStorage.setItem("username", result.data.username);
            navigate('/')
            console.log(result)
        } ) .catch (err => console.log(err))
    }

  return (
<div className='d-flex justify-content-center align-items-center vh-100 '>
    <div className='p-3 border border-1 rounded w-35'>
    <h3>S&apos;inscrire</h3>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='username'>Pseudo</label>
                <input type='text'  placeholder='Votre pseudo' 
                className='form-control my-2'  id="usernameLogin"
                    onChange={(e)=> setUsername (e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='password'>Mot de passe</label>
                <input type='password'  placeholder='***********' 
                className='form-control my-2'  id="passwordLogin"
                    onChange={(e)=> setPassword (e.target.value)}
                />
            </div>
            <button className='btn btn-success my-2 w-100'>S&apos;inscrire</button>

            <p className="mt-2 form-text text-center">
          Nouvel utilisateur ? {""}
          <Link to="/auth/register" 
          className=" link-underline-light link-success link-offset-2 link-underline-opacity-100-hover">
            Enregistrez-vous.
          </Link>
        </p>
        </form>
    </div>
</div>

  )
}

export default Login