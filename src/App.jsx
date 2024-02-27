import './App.css';
import Registration from './Components/Registration';
import Home from './Components/Home';
import Login from './Components/Login';
import NavBar from "./Components/NavBar";
import CreateRecipe from './Components/CreateRecipe';
import ReadRecipe from './Components/ReadRecipe';
import SavedRecipes from './Components/SavedRecipes';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/*
//---redux import
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit"; 
//---redux persist import
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
*/
/*
const reducers = combineReducers({ userReducer});
*/
function App() {
 
  return (
    <BrowserRouter>
     <NavBar/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
        <Route path='/auth/register' element={<Registration/>}></Route>
        <Route path='/auth/login' element={<Login/>}></Route>
        <Route path='/recipe/create-recipe' element={<CreateRecipe/>}></Route>
        <Route path='/recipe/saved-recipes' element={<SavedRecipes/>}></Route>
        <Route path='/read-recipe/:id' element={<ReadRecipe/>}></Route>
      </Routes>
      <Footer/>
       </BrowserRouter>
  )
}

export default App
