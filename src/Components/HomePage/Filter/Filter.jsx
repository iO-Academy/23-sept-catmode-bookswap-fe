import "./Filter.css"

function Filter() {

    return (
        <form>
            <div className="filter">
                <div>
                    <label for="genre">Genre</label>
                    <select name="genre">
                        <option value="">All Genres</option>
                        <option value="1">Thriller</option>
                        <option value="2">Romance</option>
                        <option value="3">Historical</option>
                        <option value="4">Non-fiction</option>
                    </select>
                </div>        
            
                <div>
                    <label for="search">Search</label>
                    <input
                    name="search"
                    type="text"
                    />
                </div>  

                <div>
                    <button type="submit">
                    Filter
                    </button>
                </div>                     
            </div>
        </form>    
    )

}

export default Filter