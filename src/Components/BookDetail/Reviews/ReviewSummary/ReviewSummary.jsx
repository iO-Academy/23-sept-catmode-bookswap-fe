function ReviewSummary ({reviews}) {

    let reviewCount = reviews.length
    let reviewTally = 0
    let reviewAverage = 0

    reviews.forEach(review => {
        reviewTally += review.rating
    })

    // Handle 0 review scenario, to fix NaN dividing by 0
    if(reviewCount <= 0){
        reviewAverage = 0    
    } else {
        reviewAverage = Math.round((reviewTally / reviewCount) * 10) / 10            
    }

    return (
        <p><a className="link" href="#reviews">{reviewCount} reviews</a> - {reviewAverage}/5 stars</p>
    )
}

export default ReviewSummary