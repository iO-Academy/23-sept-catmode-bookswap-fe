
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import HomePage from './components/HomePage/HomePage'
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
