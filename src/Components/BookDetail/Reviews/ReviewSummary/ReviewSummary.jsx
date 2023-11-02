function ReviewSummary ({reviews}) {

    let reviewCount = {reviews}.reviews.length;
    let reviewArray = {reviews}.reviews;
    let reviewTally = 0;
    let reviewAverage = 0;

    reviewArray.forEach(review => {
        reviewTally += review.rating;
    })

    // Handle 0 review scenario, to fix NaN dividing by 0
    if(reviewCount <= 0)
        {
        reviewAverage = 0    
        }
    else
        {
        reviewAverage = Math.round((reviewTally / reviewCount) * 10) / 10            
        }

    return (
        <a>{reviewCount} reviews - {reviewAverage}/5 stars</a>
    )
}

export default ReviewSummary