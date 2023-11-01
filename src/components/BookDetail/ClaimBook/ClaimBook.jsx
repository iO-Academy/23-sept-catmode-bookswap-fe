import { useEffect, useState } from "react"
import "./ClaimBook.css"

function ClaimBook({bookID}) { 
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    function submitBookClaim(event) {
        event.preventDefault()
        setName(name)
        setEmail(email)

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
        }).then(res => res.json())
        .then(data => {
            console.log(data)
        }) 
    }


    return (
        <form onSubmit={submitBookClaim}>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" />

            <label htmlFor="email">Email: </label>
            <input type="email" id="email" /> <br/>

            <input type="submit" value="Claim" id="submit"/>
        
        </form>
    )
}

const [claimStatus, setClaimStatus] = useState('')
comnst [claimFormClass, setClaimFormClass] = useState('')

function displayClaimForm() {
    if (claimStatus =< 1) {
        set claimFormClass('open')
    } else {
        setClaimFormClass('')
    }
}

if (setName.value.length < 5) {
    formValid = false
    name
}

export default ClaimBook




