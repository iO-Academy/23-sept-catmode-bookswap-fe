import { useEffect, useState } from "react"
import BookListing from "../AllBooks/BookListing/BookListing"
import Filter from "../Filter/Filter"
import "./ClaimedBooks.css"
import { NavLink } from "react-router-dom"
import { useSearchParams } from "react-router-dom";

function ClaimedBooks() {
  const [ClaimedBooks, setClaimedBooks] = useState([])
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(function () {
    let queryAppend = "";

    if(typeof searchParams.get("genre") !== 'undefined' && searchParams.get("genre") != null && searchParams.get("genre") != "" ) {
      queryAppend += `&genre=${searchParams.get("genre")}`;
    }

    if(typeof searchParams.get("search") !== 'undefined'  && searchParams.get("search") != null && searchParams.get("search") != "" ) {
      queryAppend += `&search=${searchParams.get("search")}`;
    }

    fetch(`https://23-sept-cat-mode-bookswap-api.dev.io-academy.uk/api/books?claimed=1${queryAppend}`,{
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        method: "GET",
      })
      .then(function (response) {
        return response.json()
      })
      .then(function (bookData) {
        setClaimedBooks(bookData.data)
      })
  }, [])

  return (
    <>
      <Filter />
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
    </>
  )
}

export default ClaimedBooks
