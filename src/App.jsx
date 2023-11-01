import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./components/Nav/Nav"
import HomePage from "./components/HomePage/HomePage"
import "./App.css"
import ClaimedBooks from "./Components/HomePage/ClaimedBooks/ClaimedBooks"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books/claimed" element={<ClaimedBooks />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
