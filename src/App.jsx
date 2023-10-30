
import { useState } from 'react'
import { BrowserRouter } from "react-router-dom";
import Nav from "./assets/components/Nav/Nav";
import Allbooks from './Components/HomePage/AllBooks/AllBooks'
import HomePage from './Components/HomePage/HomePage'
import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
      <HomePage />
    </div>
  );
}

export default App;
