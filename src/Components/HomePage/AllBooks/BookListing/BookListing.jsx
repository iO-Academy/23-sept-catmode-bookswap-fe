import "./BookListing.css"


function BookListing({image, title, author, genre,}) {

    
    return (
        <div className="book">
             <img src={image} />
            <h1>Title: {title}</h1>
            <p>Author: {author}</p>
            <p>Genre: {genre}</p>
           
        </div>
    )

}

export default BookListing