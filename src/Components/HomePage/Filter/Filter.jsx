import "./Filter.css"

function Filter() {

    return (
        <div className="filter">
        <label for="genre_id">Genre</label>
        <select name="genre_id">
          <option value="">All Genres</option>
          <option value="1">Thriller</option>
          <option value="2">Romance</option>
          <option value="3">Historical</option>
          <option value="4">Non-fiction</option>
        </select>

        </div>
    )

}

export default Filter