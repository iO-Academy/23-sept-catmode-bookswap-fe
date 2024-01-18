import { NavLink } from "react-router-dom"
import "./Nav.css"

function Nav() {
  return (
    <nav id="top" className="navigation">
      <div className="logo">
        <NavLink activeClass="logo" to="/">
          <h1>Book Swap</h1>
        </NavLink>
      </div>
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
      <a href={"#top"}><img className="arrow" src={"src/assets/up-arrow.png"} alt="top of the page" /></a>
    </nav>
  )
}
export default Nav
