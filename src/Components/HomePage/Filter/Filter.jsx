import { useEffect, useState } from "react"
import "./Filter.css"
import { useSearchParams } from "react-router-dom";

function Filter() {

    const [searchParams, setSearchParams] = useSearchParams()
    const [availableGenres, setAvailableGenres] = useState([])
    const [error, setError] = useState(false)

    let genreValue = 0
    if(typeof searchParams.get("genre") !== 'undefined' && searchParams.get("genre") != null && searchParams.get("genre") != "" ) {
        genreValue = searchParams.get("genre")
      }   

    let searchValue = ""
    if(typeof searchParams.get("search") !== 'undefined'  && searchParams.get("search") != null && searchParams.get("search") != "" ) {
        searchValue = searchParams.get("search")
      }

    //Fetch the genre data
    useEffect(function() {
        fetch(`https://23-sept-cat-mode-bookswap-api.dev.io-academy.uk/api/genres`, {
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            method: "GET",
        }).then(res => res.json())
            .then(genreData => {
                // If genreData has a key of data, we know the request worked
                if('data' in genreData)  {
                    setAvailableGenres(genreData.data)

                    console.log('Genre data:' + JSON.stringify(genreData))

                } else {
                    // Display an error message
                    setError(true)
                }
            })
    }, [])

    return (
        <form>
            <div className="filter">
                <div>
                    <label htmlFor="genre">Genre</label>
                    <select name="genre">
                        <option value="">All Genres</option>
                        {availableGenres.map(genre => (
                            <option 
                            value={genre.id} 
                            key ={genre.id}

                            selected={genre.id == genreValue ? "Selected":""}
                            
                            >{genre.name}</option>
                        ))}           
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