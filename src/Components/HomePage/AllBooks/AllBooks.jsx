import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";
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
                    bookData => 
                    <NavLink to={"/book/" + bookData.id}>
                    <BookListing
                    key={bookData.id}
                    id={bookData.id}
                    title={bookData.title}
                    author={bookData.author}
                    image={bookData.image}
                    genre={bookData.genre.name}
                    />
                    </NavLink>
                    )}
            </div>}
            </>
     )
}

export default Allbooks