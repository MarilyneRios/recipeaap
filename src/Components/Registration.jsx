
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


function Registration() {
    const [username, setUsername] = useState ('');
    const [password, setPassword] = useState ('');
    const navigate =useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/auth/register', {username, password})
        .then (result => {
            navigate('/auth/login');
            console.log(result);
        } ) .catch (err => console.log(err))
    }

  return (
<div className='d-flex justify-content-center align-items-center vh-100 '  style={{ backgroundImage: 'url("/bg3.jpg")', backgroundSize: 'cover', backgroundRepeat: 'repeat' }}>
    <div className='p-3 border border-1 rounded w-35'  style={{  backgroundColor: "#f8f9fa" }}>
    <h3>S&apos;enregistrer</h3>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='usernameRegistration'>Pseudo</label>
                <input type='text' placeholder='Votre pseudo' className='form-control my-2'
                    id="usernameRegistration"
                    onChange={(e)=> setUsername (e.target.value)}
                />
            </div>

            <div>
                <label htmlFor='passwordRegistration'>Mot de passe</label>
                <input type='password' placeholder="***********" 
                className='form-control my-2' id="passwordRegistration"
            
                    onChange={(e)=> setPassword (e.target.value)}
                />
            </div>
            <button className='btn btn-success my-2 w-100'>S&apos;enregistrer</button>

            <p className="my-2 form-text text-center">
          Vous avez déjà un compte ? {""}
          <Link to="/auth/login" 
          className="  link-underline-light link-success link-offset-2 link-underline-opacity-100-hover">
            Connectez-vous.
          </Link>
        </p>
        </form>
    </div>
</div>

  )
}

export default Registration