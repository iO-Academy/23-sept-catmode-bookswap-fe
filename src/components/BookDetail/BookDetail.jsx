import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Reviews from "./Reviews/Reviews"

import "./BookDetail.css"
import ReviewSummary from "./Reviews/ReviewSummary/ReviewSummary"
import ClaimBook from "./ClaimBook/ClaimBook"
import ReturnBook from "./ReturnBook/ReturnBook"
import ReviewAdd from "./Reviews/ReviewAdd/ReviewAdd"

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
    const [reviewCount, setReviewCount] = useState('')
    const [claimedByName, setClaimedByName] = useState('')
    const [error, setError] = useState(false)

    //Fetch the individual book data
    useEffect(function() {
        fetch(`https://23-sept-cat-mode-bookswap-api.dev.io-academy.uk/api/books/${id}`, {
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
                    console.log(`Review count: ${bookData.data.reviews.length}`)
                    setReviewCount(bookData.data.reviews.length)
                    setClaimedByName(bookData.data.claimed_by_name)
                } else {
                    // Display an error message
                    setError(true)
                }
            })
    }, [id, reviewCount])

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
                        {reviews != [] && <ReviewSummary reviews={reviews} />}
                        <ClaimBook bookID={id} claimedByName={claimedByName} setClaimedByName={setClaimedByName} />
                        <ReturnBook bookID={id} claimedByName={claimedByName} setClaimedByName={setClaimedByName} /> 
                        <p>{bookBlurb}</p>
                        <Reviews reviews={reviews} />
                        <ReviewAdd bookID={id} reviewCount={reviewCount} setReviewCount={setReviewCount} /> 
                    </div>
                </div>                
            } 
        </div>
    )
}

export default BookDetail