import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./components/Nav/Nav"
import BookDetail from "./components/BookDetail/BookDetail"
import ClaimedBooks from "./Components/HomePage/ClaimedBooks/ClaimedBooks"
import AvailableBooks from "./Components/HomePage/AllBooks/AvailableBooks/AvailableBooks"
import AddNewBook from "./Components/HomePage/AddNewBook/AddNewBook"
import "./App.css"

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Nav />
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

export default App
