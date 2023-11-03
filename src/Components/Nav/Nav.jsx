import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
function Nav() {
  return (
    <nav id="top" className="navigation">
      <div className="logo">
        <h1>Book Swap</h1>
      </div>
      <div className="links">
        <NavLink activeClass="active" to="availableBooks">
          Available books
        </NavLink>
        <NavLink activeClass="active" to="claimedBooks">
          Claimed books
        </NavLink>
        <NavLink activeClass="active" to="addBook">
          Add book
        </NavLink>
      </div>
      <a href={"#top"}><img className="arrow" src={"src/assets/up-arrow.png"} alt="top of the page" /></a>
    </nav>
  );
}
export default Nav;
