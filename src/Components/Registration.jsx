
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios';

function Registration() {
    const [username, setUsername] = useState ('');
    const [password, setPassword] = useState ('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/auth/register', {username, password})
        .then (result => (
            console.log(result)
        ) ) .catch (err => console.log(err))
    }

  return (
<div className='d-flex justify-content-center align-items-center vh-100 '>
    <div className='p-3 border border-1 rounded w-25'>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='username'>Pseudo</label>
                <input type='text' placeholder='Entrer votre pseudo' className='form-control my-2'
                    onChange={(e)=> setUsername (e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='password'>Mot de passe</label>
                <input type='password' placeholder='Entrer votre mot de passe' className='form-control my-2'
                    onChange={(e)=> setPassword (e.target.value)}
                />
            </div>
            <button className='btn btn-success my-2 w-100'>Enregistrer</button>
        </form>
    </div>
</div>

  )
}

export default Registration