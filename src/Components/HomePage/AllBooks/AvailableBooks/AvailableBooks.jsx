import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import BookListing from "../BookListing/BookListing"
import Filter from "../../Filter/Filter"
import "./AvailableBooks.css"

function AvailableBooks() {
  const [availableBooks, setAvailableBooks] = useState([])

  useEffect(function () {
    fetch("https://23-sept-cat-mode-bookswap-api.dev.io-academy.uk/api/books?claimed=0", {
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        method: "GET",
      }).then(function (response) {
        return response.json()
      })
      .then(function (bookData) {
        setAvailableBooks(bookData.data)
      })
  }, [])

  return (
    <>
    <Filter />
    
    <div className="available-books">
      {availableBooks.map((availableBook) => (
        <NavLink to={"/book/" + availableBook.id} key={availableBook.id}>
          <BookListing
            id={availableBook.id}
            title={availableBook.title}
            author={availableBook.author}
            image={availableBook.image}
            genre={availableBook.genre.name}
          />
        </NavLink>
      ))}
    </div>    
    </>


  )
}

export default AvailableBooks
