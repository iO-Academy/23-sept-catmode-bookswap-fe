import "./BookListing.css"

function BookListing({ id, image, title, author, genre }) {
  return (
    <div className="book">
      <img src={image} />
      <div className="book-summary-info">
        <h3 className="book-summary-text">Title: {title}</h3>
        <p className="book-summary-text">Author: {author}</p>
        <p className="book-summary-text">Genre: {genre}</p>
      </div>
    </div>
  )
}

export default BookListing
