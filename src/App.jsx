import './App.css';
import Registration from './Components/Registration';
import Home from './Components/Home';
import Login from './Components/Login';
import NavBar from "./Components/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
 
  return (
    <BrowserRouter>
     <NavBar/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
        <Route path='/auth/register' element={<Registration/>}></Route>
        <Route path='/auth/login' element={<Login/>}></Route>
      </Routes>
       </BrowserRouter>
  )
}

export default App
