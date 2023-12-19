import { useState } from "react"
import "./AddNewBook.css"

function AddNewBook() {
  const [errorInput, setErrorInput] = useState({})
  const [succesMessage, setSuccesMessage] = useState({})

  const [form, setForm] = useState({
    title: "",
    author: "",
    genre_id: "",
    year: "2023",
    page_count: "",
    image_url: "",
    blurb: "",
  })

  function AddBook(event) {
    event.preventDefault()

    fetch("https://23-sept-cat-mode-bookswap-api.dev.io-academy.uk/api/books", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((resp) => {
        return resp.json()
      })
      .then((response) => {
        if (response.errors) {
          setErrorInput(response.errors)
        } else {
          setSuccesMessage(response)
          setErrorInput({})
          setForm({
            title: "",
            author: "",
            genre_id: "",
            year: "2023",
            page_count: "",
            image_url: "",
            blurb: "",
          })
        }
      })
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.name === "genre_id" ? Number(e.target.value) : e.target.value,
    })
  }

  return (
    <form className="add-book-form">
      <div>
        <label>Title (required)</label>
        <input
          type="text"
          value={form.title}
          name="title"
          placeholder="Title"
          onChange={handleChange}
        />

        {errorInput.title && (
          <span className="error-message">{errorInput.title}</span>
        )}
      </div>

      <div>
        <label>Author (required)</label>
        <input
          type="text"
          value={form.author}
          name="author"
          placeholder="Author"
          onChange={handleChange}
        />

        {errorInput.author && (
          <span className="error-message">{errorInput.author}</span>
        )}
      </div>

      <div>
        <label>Genre (required)</label>
        <select value={form.genre_id} name="genre_id" onChange={handleChange}>
          <option value="">Select a genre</option>
          <option value="1">Thriller</option>
          <option value="2">Romance</option>
          <option value="3">Historical</option>
          <option value="4">Non-fiction</option>
        </select>
        {errorInput.genre_id && (
          <span className="error-message">{errorInput.genre_id}</span>
        )}
      </div>

      <div>
        <label>Year</label>
        <input
          type="number"
          value={form.year}
          name="year"
          min="1800"
          placeholder="2023"
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Page count</label>
        <input
          type="number"
          min="0"
          value={form.page_count}
          name="page_count"
          placeholder="0"
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Image URL</label>
        <input
          type="text"
          value={form.image_url}
          name="image_url"
          placeholder="Image here"
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Blurb</label>
        <textarea name="blurb" onChange={handleChange}></textarea>
      </div>

      <div>
        <button onClick={AddBook} type="submit">
          Add a Book
        </button>
      </div>
      <div className="succes-message">
        {succesMessage.message && <span>{succesMessage.message}</span>}{" "}
      </div>
    </form>
  )
}

export default AddNewBook
