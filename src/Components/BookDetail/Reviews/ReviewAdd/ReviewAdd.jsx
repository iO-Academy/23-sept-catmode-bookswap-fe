import "./ReviewAdd.css"

import { useState } from "react"

function ReviewAdd({bookID, reviewCount, setReviewCount}) { 
    
    const [name, setName] = useState('')
    const [rating, setRating] = useState('')
    const [reviewText, setReviewText] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    function nameChange(event) {
        setName(event.target.value)
    }

    function ratingChange(event) {
        setRating(event.target.value)
    }

    function reviewTextChange(event) {
        setReviewText(event.target.value)
    }

    function submitBookReview(event) {
            event.preventDefault()
   
        fetch(`https://23-sept-cat-mode-bookswap-api.dev.io-academy.uk/api/reviews`, {
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                'review': reviewText,
                'rating' : rating,
                'name': name,
                'book_id' : bookID
            })
        }).then((res) =>
            {
                if (res.ok) { 
                    return res.json()
                    .then(data => {

                        setErrorMessage("")
                        setSuccessMessage("Review Added!")

                        setReviewCount(reviewCount + 1)
                    }
                    )
                   }
                else {
                    res.json()
                    .then(data => {
                        setErrorMessage(data.message)    
                        setSuccessMessage("")     
                    })
                }
            }
        )   
    }

    function addReviewForm() {
        return (
            <div className="form-container">
                 <form onSubmit={submitBookReview}>
                    <label htmlFor="name">Name: </label>
                    <input onChange={nameChange} type="text" id="name" />

                    <label htmlFor="rating">Rating: </label>
                    <input onChange={ratingChange} type="number" min="1" max="5" id="rating" />

                    <label htmlFor="review-add-textbox">Review: </label>
                    <textarea onChange={reviewTextChange} id="review-add-textbox"></textarea> 
                    
                    <br/>

                    <input type="submit" value="Add Review" id="submit"/>
                </form>
            </div>
        )
    }

    return (
    <>
     {/* <div className="message">{ claimedByName == null ? unClaimedForm() : `Claimed by ${claimedByName}` }</div>   */}
     <div className="message">{addReviewForm()} </div>

     <p className="review-add-error">{errorMessage}</p>
     <p className="review-add-success">{successMessage}</p>
    </>
    )
}

export default ReviewAdd
