import React, { useState, useEffect } from 'react'
import axios from "axios"
import { MdSearch } from "react-icons/md"

const Search = () => {

    const apiUrl = "https://pixabay.com/api"
    const apiKey = "12601868-7c3ed878ef377ad8095378a57"
    const [images, setImages] = useState([])
    const [search, setSearch] = useState("")

    const submitHandler = e => {
        e.preventDefault()
    }

    return (
        <form className="search" onSubmit={submitHandler}>
            <div>
                <input type="text" value={search} name="search"  required onChange={e => setSearch(e.target.value) } />
                <label htmlFor="search">Search for images</label>
            </div>
            <button type="submit"><MdSearch  size={40} className="submit"/> </button>
        </form>
    )
}

export default Search
