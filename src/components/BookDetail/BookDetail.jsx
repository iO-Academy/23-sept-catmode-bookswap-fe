import { useEffect, useState } from "react"

function BookDetail({bookID = 6}) {

    const [bookImage, setBookImage] = useState('');
    const [bookTitle, setBookTitle] = useState('');
    const [bookAuthor, setBookAuthor] = useState('');
    const [bookYear, setBookYear] = useState('');
    const [bookPageCount, setBookPageCount] = useState('');
    const [bookGenre, setBookGenre] = useState('');
    const [bookBlurb, setBookBlurb] = useState('');

    //Fetch the individual book data
    useEffect(function() {

    fetch(`https://book-swap-api.dev.io-academy.uk/api/books/${bookID}`, {
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        method: "GET",
    }).then(res => res.json())
        .then(bookData => {
            console.log(bookData.data)

            setBookImage(bookData.data.image);
            setBookTitle(bookData.data.title);
            setBookAuthor(bookData.data.author);
            setBookYear(bookData.data.year);
            setBookPageCount(bookData.data.page_count);
            setBookGenre(bookData.data.genre.name);
            setBookBlurb(bookData.data.blurb);
            // console.log(bookAuthor)
        })

    }, [])

    return (
        <>
        <h1>Book Swap</h1>

            <img src={bookImage} alt={bookTitle} />
            <h1>Book Title : {bookTitle}</h1>
            <p>Book Author: {bookAuthor}</p>
            <p>Year: {bookYear}</p>
            <p>Page count: {bookPageCount}</p>
            <p>Genre: {bookGenre}</p>
            <p>Blurb: {bookBlurb}</p>
        </>
  
    )
}

export default BookDetail