import Axios from 'axios'
import React, { useContext } from 'react'
import { SourceContext } from '../Logic/SourceContext'

const MovieForm = () => {
    const [, , , , , , setMovies, api, input, setInput] = useContext(SourceContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (input.condition === 'create') {
            Axios.post(api, { ...input })
                .then(res => {
                    setMovies(null)
                    setInput({
                        title: '',
                        description: '',
                        year: 2020,
                        duration: 120,
                        genre: '',
                        rating: 0,
                        image_url: '',
                        condition: 'create'
                    })
                })
        } else if (input.condition === 'edit') {
            Axios.put(`${api}/${input.id}`, { ...input })
                .then(res => {
                    setMovies(null)
                    setInput({
                        title: '',
                        description: '',
                        year: 2020,
                        duration: 120,
                        genre: '',
                        rating: 0,
                        image_url: '',
                        condition: 'create'
                    })
                })
        }

    }

    const handleChange = (e) => {
        let temp = input
        let value = e.target.value
        switch (e.target.name) {
            case 'film-title':
                temp.title = value
                setInput({ ...temp })
                break;
            case 'film-desc':
                temp.description = value
                setInput({ ...temp })
                break;
            case 'film-year':
                temp.year = value
                setInput({ ...temp })
                break;
            case 'film-duration':
                if (value < 1980) {
                    value = 1980
                }
                temp.duration = value
                setInput({ ...temp })
                break;
            case 'film-genre':
                temp.genre = value
                setInput({ ...temp })
                break;
            case 'film-rating':
                if (value > 10) {
                    value = 10
                } else if (value < 0) {
                    value = 0
                }
                temp.rating = value
                setInput({ ...temp })
                break;
            case 'film-img':
                temp.image_url = value
                setInput({ ...temp })
                break;
            default:
                break;
        }
    }

    return (
        <div className="card">
            <h2 className="page-title">Form Film</h2>
            <form onSubmit={handleSubmit} className="form-control">
                <div className='form-input input'>
                    <label className="label-type" htmlFor='film-title'>Title</label>
                    <input onChange={handleChange} className="input-type" type='text' name='film-title' value={input.title} />
                </div>
                <div className='form-input input'>
                    <label className="label-type" htmlFor='film-desc'>Description</label>
                    <textarea onChange={handleChange} className="input-textarea" name="film-desc" value={input.description}></textarea>
                </div>
                <div className='form-input input'>
                    <label className="label-type" htmlFor='film-year'>Year</label>
                    <input onChange={handleChange} className="input-type" type='number' name='film-year' value={input.year} />
                </div>
                <div className='form-input input'>
                    <label className="label-type" htmlFor='film-duration'>Duration</label>
                    <input onChange={handleChange} className="input-type" type='number' name='film-duration' value={input.duration} />
                </div>
                <div className='form-input input'>
                    <label className="label-type" htmlFor='film-genre'>Genre</label>
                    <input onChange={handleChange} className="input-type" type='text' name='film-genre' value={input.genre} />
                </div>
                <div className='form-input input'>
                    <label className="label-type" htmlFor='film-rating'>Rating</label>
                    <input onChange={handleChange} className="input-type" type='number' name='film-rating' value={input.rating} />
                </div>
                <div className='form-input input'>
                    <label className="label-type" htmlFor='film-img'>Film Poster URL</label>
                    <input onChange={handleChange} className="input-type" type='text' name='film-img' value={input.image_url} />
                </div>
                <div className="form-input button">
                    <button className="btn">Login</button>
                </div>
            </form>
        </div>
    )
}

export default MovieForm