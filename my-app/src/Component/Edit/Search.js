import React, { useContext, useState } from 'react'
import { SourceContext } from '../Logic/SourceContext'

const Search = () => {
    const [, , , , , movies, setMovies] = useContext(SourceContext)
    const [keywords, setKeywords] = useState('')

    // handle
    const handleSearch = (e) => {
        e.preventDefault()
        let result = movies.filter((item) => {
            let title = item.title.toLowerCase()
            return title.search(keywords) > -1
        })
        if (keywords === '') {
            setMovies(null)
        } else {
            setMovies(result)
        }

    }

    const handleChange = (e) => {
        let value = e.target.value
        setKeywords(value)
    }

    return (
        <div className="card">
            <form onSubmit={handleSearch} style={{ textAlign: 'center' }}>
                <input onChange={handleChange} className="input-type" name="search" type="name" />
                <button style={{ marginLeft: '1rem' }} className="btn">Search</button>
            </form>
        </div>
    )
}

export default Search