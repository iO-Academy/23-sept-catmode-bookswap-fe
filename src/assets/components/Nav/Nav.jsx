import { Link } from "react-router-dom";
import "./Nav.css";
function Nav() {
  return (
    <nav className="navigation">
      <div>
        <h1>Book Swap</h1>
      </div>
      <div className="links">
        <Link to="availableBooks">Available books</Link>
        <Link to="claimedBooks">Claimed books</Link>
        <Link to="addBook">Add book</Link>
      </div>
    </nav>
  );
}
export default Nav;
