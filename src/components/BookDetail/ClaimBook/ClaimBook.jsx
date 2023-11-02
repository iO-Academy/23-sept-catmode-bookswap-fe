import { useEffect, useState } from "react"
import "./ClaimBook.css"

function ClaimBook({bookID, claimedByName, setClaimedByName}) { 
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

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
        }).then(res => res.json())
        .then(data => {
            console.log(data)
            setClaimedByName(name)
        }
        ) 
    }

    function unClaimedForm() {
        return (
            <form onSubmit={submitBookClaim}>
                <label htmlFor="name">Name: </label>
                <input onChange={nameChange} type="text" id="name" />

                <label htmlFor="email">Email: </label>
                <input onChange={emailChange} type="email" id="email" /> <br/>

                <input type="submit" value="Claim" id="submit"/>
        
         </form>
        )
    }

    return (
    
    <div>{ claimedByName == null ? unClaimedForm() : `Claimed by ${claimedByName}` }</div>
    )
}


export default ClaimBook


//const [claimStatus, setClaimStatus] = useState('')
//comnst [claimFormClass, setClaimFormClass] = useState('')

//function displayClaimForm() {
    //  if (claimStatus ==< 1) {
     //   set claimFormClass('open')
    //} else {
     //   setClaimFormClass('')
   //}
//}

//if (setName.value.length < 5) {
 //   formValid = false
   // name
//}



