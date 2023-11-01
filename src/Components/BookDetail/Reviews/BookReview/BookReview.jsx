function BookReview({id, name, rating, review}) {
    return(
        <div>
            <p>{name}</p>
            <p>{rating}</p>
            <p>{review}</p>
        </div>    
    )
}

export default BookReview