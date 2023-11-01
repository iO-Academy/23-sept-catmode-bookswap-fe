
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./components/Nav/Nav"
import HomePage from './components/HomePage/HomePage'
import './App.css'
import BookDetail from "./components/BookDetail/BookDetail"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="book/:id" element={<BookDetail />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
