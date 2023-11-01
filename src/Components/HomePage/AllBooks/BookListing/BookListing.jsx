import "./BookListing.css"

function BookListing({id, image, title, author, genre,}) {
    
    return (
        <div className="book">
            <img src={image} />
            <h3>Title: {title}</h3>
            <p>Author: {author}</p>
            <p>Genre: {genre}</p>     
        </div>
    )
}

export default BookListing