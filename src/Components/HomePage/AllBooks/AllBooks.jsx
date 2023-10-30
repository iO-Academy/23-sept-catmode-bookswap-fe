import { useEffect, useState } from "react"
import BookListing from "./BookListing/BookListing"
import AllBooks from "./AllBooks.css"

function Allbooks() {
    
const [allBooks, setAllBooks] = useState([])

    useEffect( function () {
        fetch('https://book-swap-api.dev.io-academy.uk/api/books')
        .then(function(res) {
            return res.json()
        })
        .then(function (bookData) {
            setAllBooks(bookData.data)
            console.log(bookData.data)
        })
    }, [])
    
    return (
        <>
            {<div className= "all-books">
                {allBooks.map(
                    bookData => <BookListing
                    key={bookData.id}
                    title={bookData.title}
                    author={bookData.author}
                    image={bookData.image}
                    genre={bookData.genre.name}
                    />)}
            </div>}
            </>
     )
}

export default Allbooks