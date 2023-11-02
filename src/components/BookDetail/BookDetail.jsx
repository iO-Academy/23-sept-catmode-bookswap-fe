import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Reviews from "./Reviews/Reviews"

import "./BookDetail.css"
import ReviewSummary from "./Reviews/ReviewSummary/ReviewSummary"

function BookDetail() {

    const {id} = useParams();

    const [bookImage, setBookImage] = useState('')
    const [bookTitle, setBookTitle] = useState('')
    const [bookAuthor, setBookAuthor] = useState('')
    const [bookYear, setBookYear] = useState('')
    const [bookPageCount, setBookPageCount] = useState('')
    const [bookGenre, setBookGenre] = useState('')
    const [bookBlurb, setBookBlurb] = useState('')
    const [reviews, setReviews] = useState([])
    const[error, setError] = useState(false)

    //Fetch the individual book data
    useEffect(function() {
        fetch(`https://book-swap-api.dev.io-academy.uk/api/books/${id}`, {
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            method: "GET",
        }).then(res => res.json())
            .then(bookData => {
                // If bookData has a key of data, we know the request worked
                if('data' in bookData)  {
                    setBookImage(bookData.data.image)
                    setBookTitle(bookData.data.title)
                    setBookAuthor(bookData.data.author)
                    setBookYear(bookData.data.year)
                    setBookPageCount(bookData.data.page_count)
                    setBookGenre(bookData.data.genre.name)
                    setBookBlurb(bookData.data.blurb)
                    setReviews(bookData.data.reviews)
                } else {
                    // Display an error message
                    setError(true)
                }
            })
    }, [id])

    return (
        <div>
            {error ? 
                <div> 
                    <p>
                        "Error: Book not found!"    
                    </p>
                </div>
                :
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
                        {/* <ReviewSummary reviews={reviews} /> */}
                        {reviews != [] && <ReviewSummary reviews={reviews} />} 
                        <p>{bookBlurb}</p>
                        <Reviews reviews={reviews} />
                    </div>
                </div>                
            } 
        </div>
    )
}

export default BookDetail