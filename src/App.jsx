import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./components/Nav/Nav"
import HomePage from "./components/HomePage/HomePage"
import BookDetail from "./components/BookDetail/BookDetail"
import ClaimedBooks from "./Components/HomePage/ClaimedBooks/ClaimedBooks"
import AvailableBooks from "./components/HomePage/AllBooks/AvailableBooks/AvailableBooks"
import "./App.css"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="book/:id" element={<BookDetail />} />
          <Route path="/books/claimed" element={<ClaimedBooks />} />
          <Route path="/books/available" element={<AvailableBooks />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
