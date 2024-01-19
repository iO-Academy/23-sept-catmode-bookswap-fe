import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav({ appContainer }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = appContainer.current.scrollTop > 1000;
      setIsScrolled(scrolled);
    };

    if (appContainer.current) {
      appContainer.current.addEventListener('scroll', onScroll);
    }

    return () => {
      if (appContainer.current) {
        appContainer.current.removeEventListener('scroll', onScroll);
      }
    };
  }, [appContainer]);

  return (
    <nav id="top" className="navigation">
      <div className="logo">
        <NavLink to="/">
          <h1>Book Swap</h1>
        </NavLink>
      </div>
      <div className="links">
        <NavLink activeclass="active" to="/">
          Available books
        </NavLink>
        <NavLink activeclass="active" to="/books/claimed">
          Claimed books
        </NavLink>
        <NavLink activeclass="active" to="/books/add">
          Add book
        </NavLink>
      </div>
      {isScrolled && (
        <a href={"#top"}>
          <img className="arrow" src={"/src/assets/up-arrow.png"} alt="top of the page" />
        </a>
      )}
    </nav>
  );
}

export default Nav;


