import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./BookDetail.css"

function BookDetail({bookID = 4}) {

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
            setBookImage(bookData.data.image);
            setBookTitle(bookData.data.title);
            setBookAuthor(bookData.data.author);
            setBookYear(bookData.data.year);
            setBookPageCount(bookData.data.page_count);
            setBookGenre(bookData.data.genre.name);
            setBookBlurb(bookData.data.blurb);
        })

    }, [])

    return (
        <>
        <h1>Book Swap</h1>
        <div className="detail-container">
            <div>
                <img className="detail-container-image" src={bookImage} alt={bookTitle} />
            </div>
            <div className="detail-container-text">
                <h1>{bookTitle}</h1>
                <p>{bookAuthor}</p>
                <p>{bookYear}</p>
                <p>{bookPageCount}</p>
                <p>{bookGenre}</p>
                <p>{bookBlurb}</p>
            </div>
        </div>
        </>
    )
}

export default BookDetail