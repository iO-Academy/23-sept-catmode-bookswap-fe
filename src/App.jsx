import React, { useRef } from 'react'; 
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./Components/Nav/Nav"
import BookDetail from "./Components/BookDetail/BookDetail"
import ClaimedBooks from "./Components/HomePage/ClaimedBooks/ClaimedBooks"
import AvailableBooks from "./Components/HomePage/AllBooks/AvailableBooks/AvailableBooks"
import AddNewBook from "./Components/HomePage/AddNewBook/AddNewBook"
import "./App.css"

function App() {
  const appContainerRef = useRef(null);

  return (
    <div ref={appContainerRef} className="app-container">
      <BrowserRouter>
        <Nav appContainer={appContainerRef} />
        <Routes>
          <Route path="/" element={<AvailableBooks />} />
          <Route path="book/:id" element={<BookDetail />} />
          <Route path="/books/claimed" element={<ClaimedBooks />} />
          <Route path="/books/add" element={<AddNewBook />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

