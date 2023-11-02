import BookReview from "./BookReview/BookReview"

function Reviews({reviews}) {
    return(
        <div>
            <h2>Reviews</h2>
            <div>
                {reviews.map(
                    reviewData => 
                        <BookReview
                            key={reviewData.id}
                            id={reviewData.id}
                            name={reviewData.name}
                            rating={reviewData.rating}
                            review={reviewData.review}
                        />
                )}
            </div>
        </div>
    )
}
export default Reviews