import './BookReview.css'

function BookReview({id, name, rating, review}) {
    return(
        <div className="review-container">
            <p className='review-container-name'>{name}</p>
            <p>{rating}/5 Stars</p>
            <p>{review}</p>
        </div>    
    )
}

export default BookReview