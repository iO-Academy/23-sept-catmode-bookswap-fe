
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./assets/components/Nav/Nav";
import HomePage from './Components/HomePage/HomePage'
import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />

          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
