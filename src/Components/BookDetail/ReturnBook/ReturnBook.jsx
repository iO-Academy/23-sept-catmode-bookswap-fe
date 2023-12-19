import { useState } from "react"
import "./ReturnBook.css"

function ReturnBook({ claimedByName, bookID, setClaimedByName }) {

    const [email, setEmail] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    function emailChange(event) {
        setEmail(event.target.value)
    }

    function submitBookReturn(event) {
        event.preventDefault()

        fetch(`https://23-sept-cat-mode-bookswap-api.dev.io-academy.uk/api/books/return/${bookID}`, {
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            method: "PUT",
            body: JSON.stringify({
                'email': email
            })
        }).then((res) => {
            if (res.ok) {
                return res.json()
                    .then(data => {
                        setClaimedByName(null)
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

    function ReturnForm() {
        return (
            <div className="form-container">
                <form onSubmit={submitBookReturn}>

                    <p>Want to return this book?</p>
                    <label htmlFor="email">{claimedByName}'s Email </label>
                    <input onChange={emailChange} type="email" id="email" /> <br />

                    <input type="submit" value="Return" id="submit" />
                </form>
            </div>
        )
    }

    return (
        <>
            <div>{claimedByName !== null ? ReturnForm() : ''}</div>

            <p className="claim-book-error">{errorMessage}</p>
        </>
    )
}

export default ReturnBook