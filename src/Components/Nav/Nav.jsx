import { NavLink } from "react-router-dom"
import "./Nav.css"

function Nav() {
  return (
    <nav className="navigation">
      <NavLink to="/">
        <h1>Book Swap</h1>
      </NavLink>
      <div className="links">
        <NavLink activeClass="active" to="/">
          Available books
        </NavLink>
        <NavLink activeClass="active" to="/books/claimed">
          Claimed books
        </NavLink>
        <NavLink activeClass="active" to="/books/add">
          Add book
        </NavLink>
      </div>
    </nav>
  )
}
export default Nav
