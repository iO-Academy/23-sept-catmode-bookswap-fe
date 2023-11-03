import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import BookListing from "../BookListing/BookListing"
import "./AvailableBooks.css"

function AvailableBooks() {
  const [availableBooks, setAvailableBooks] = useState([])

  useEffect(function () {
    fetch("https://book-swap-api.dev.io-academy.uk/api/books?claimed=0")
      .then(function (response) {
        return response.json()
      })
      .then(function (bookData) {
        setAvailableBooks(bookData.data)
      })
  }, [])

  return (
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
  )
}

export default AvailableBooks
