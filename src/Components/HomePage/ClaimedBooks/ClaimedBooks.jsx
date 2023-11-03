import { useEffect, useState } from "react"
import BookListing from "../AllBooks/BookListing/BookListing"
import "./ClaimedBooks.css"
import { NavLink } from "react-router-dom"

function ClaimedBooks() {
  const [ClaimedBooks, setClaimedBooks] = useState([])

  useEffect(function () {
    fetch("https://book-swap-api.dev.io-academy.uk/api/books?claimed=1")
      .then(function (response) {
        return response.json()
      })
      .then(function (bookData) {
        setClaimedBooks(bookData.data)
      })
  }, [])

  return (
    <div className="claimed-books">
      {ClaimedBooks.map((claimedBook) => (
        <NavLink to={"/book/" + claimedBook.id} key={claimedBook.id}>
          <BookListing
            key={claimedBook.id}
            title={claimedBook.title}
            author={claimedBook.author}
            image={claimedBook.image}
            genre={claimedBook.genre.name}
          />
        </NavLink>
      ))}
    </div>
  )
}

export default ClaimedBooks
