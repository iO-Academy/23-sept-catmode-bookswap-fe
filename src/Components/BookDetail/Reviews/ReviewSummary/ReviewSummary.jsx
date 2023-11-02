function ReviewSummary ({reviews}) {

    let reviewCount = {reviews}.reviews.length;
    let reviewArray = {reviews}.reviews;
    let reviewTally = 0;
    let reviewAverage = 0;

    reviewArray.forEach(review => {
        reviewTally += review.rating;
    })

    reviewAverage = Math.round((reviewTally / reviewCount) * 10) / 10

    return (
        <p><a className="link" href="#reviews">{reviewCount} reviews</a> - {reviewAverage}/5 stars</p>
    )
}

export default ReviewSummary