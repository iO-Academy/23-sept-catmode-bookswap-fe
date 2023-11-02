import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
function Nav() {
  return (
    <nav className="navigation">
      <div>
        <h1>Book Swap</h1>
      </div>
      <div className="links">
        {/* <NavLink activeClass="active" to="availableBooks">
          Available books
        </NavLink>
        <NavLink activeClass="active" to="claimedBooks">
          Claimed books
        </NavLink>
        <NavLink activeClass="active" to="addBook">
          Add book
        </NavLink> */}
      </div>
    </nav>
  );
}
export default Nav;
