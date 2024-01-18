import "./Filter.css"
import { useSearchParams } from "react-router-dom";

function Filter() {

    const [searchParams, setSearchParams] = useSearchParams();

    let searchValue = "";
    if(typeof searchParams.get("search") !== 'undefined'  && searchParams.get("search") != null && searchParams.get("search") != "" ) {
        searchValue = searchParams.get("search");
      }
    console.log("Search Value: " + searchValue);

    return (
        <form>
            <div className="filter">
                <div>
                    <label htmlFor="genre">Genre</label>
                    <select name="genre">
                        <option value="">All Genres</option>
                        <option value="1">Thriller</option>
                        <option value="2">Romance</option>
                        <option value="3">Historical</option>
                        <option value="4">Non-fiction</option>
                    </select>
                </div>        
            
                <div>
                    <label htmlFor="search">Search</label>
                    <input
                    name="search"
                    type="text"
                    defaultValue={searchValue}
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