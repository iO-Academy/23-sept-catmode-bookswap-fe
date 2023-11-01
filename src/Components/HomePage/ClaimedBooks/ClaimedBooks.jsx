import { useEffect, useState } from "react";
import BookListing from "../AllBooks/BookListing/BookListing";
import "./ClaimedBooks.css";

function ClaimedBooks() {
  const [ClaimedBooks, setClaimedBooks] = useState([]);

  useEffect(function () {
    fetch("https://book-swap-api.dev.io-academy.uk/api/books?claimed=1")
      .then(function (response) {
        return response.json();
      })
      .then(function (bookData) {
        setClaimedBooks(bookData.data);
      });
  }, []);

  return (
    <div className="claimed-books">
      {ClaimedBooks.map((claimedBook) => (
        <BookListing
          key={claimedBook.id}
          title={claimedBook.title}
          author={claimedBook.author}
          image={claimedBook.image}
          genre={claimedBook.genre.name}
        />
      ))}
    </div>
  );
}

export default ClaimedBooks;
