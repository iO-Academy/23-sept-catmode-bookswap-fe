import { useEffect, useState } from "react"
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
        <BookListing
          key={availableBook.id}
          title={availableBook.title}
          author={availableBook.author}
          image={availableBook.image}
          genre={availableBook.genre.name}
        />
      ))}
    </div>
  )
}

export default AvailableBooks
