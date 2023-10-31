import "./BookListing.css"


function BookListing({id, image, title, author, genre,}) {

function bookClick() {
    console.log(`You clicked on book ${id}`)
    // Take the id of this specific book, and set it into the
    // clickedBook state
    // setClickedBook(id);

    
}

    
    return (
        <div className="book" onClick={bookClick}>
             <img src={image} />
            <h3>Title: {title}</h3>
            <p>Author: {author}</p>
            <p>Genre: {genre}</p>
           
        </div>
    )

}

export default BookListing