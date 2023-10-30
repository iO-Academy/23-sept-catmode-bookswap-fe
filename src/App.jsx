import { BrowserRouter } from "react-router-dom";
import Nav from "./assets/components/Nav/Nav";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    </div>
  );
}

export default App;
