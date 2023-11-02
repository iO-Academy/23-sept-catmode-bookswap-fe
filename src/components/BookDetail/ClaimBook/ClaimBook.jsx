import { useEffect, useState } from "react"
import "./ClaimBook.css"

function ClaimBook({bookID, claimedByName, setClaimedByName}) { 
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    function nameChange(event) {
        setName(event.target.value)
    }

    function emailChange(event) {
        setEmail(event.target.value)
    }

    function submitBookClaim(event) {
            event.preventDefault()
   
        fetch(`https://book-swap-api.dev.io-academy.uk/api/books/claim/${bookID}`, {
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            method: "PUT",
            body: JSON.stringify({
                'email': email,
                'name': name
            })
        }).then((res) =>
            {
                if (res.ok) { 
                    return res.json()
                    .then(data => {
                        setClaimedByName(name)
                        setErrorMessage("")
                    }
                    )
                   }
                else {
                    res.json()
                    .then(data => {
                        setErrorMessage(data.message)           
                    })
                }
            }
        )   
    }

    function unClaimedForm() {
        return (
            <div className="form-container">
                 <form onSubmit={submitBookClaim}>
                    <label htmlFor="name">Name: </label>
                    <input onChange={nameChange} type="text" id="name" />

                    <label htmlFor="email">Email: </label>
                    <input onChange={emailChange} type="email" id="email" /> <br/>

                    <input type="submit" value="Claim" id="submit"/>
                </form>
            </div>
        )
    }

    return (
    <>
     <div>{ claimedByName == null ? unClaimedForm() : `Claimed by ${claimedByName}` }</div>   

     <p className="claim-book-error">{errorMessage}</p>
    </>
    )
}

export default ClaimBook
