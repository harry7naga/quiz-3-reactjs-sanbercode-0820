import Axios from 'axios'
import React, { useContext } from 'react'
import { SourceContext } from '../Logic/SourceContext'

const MovieTable = () => {
    const [, , , , , movies, setMovies, api, input, setInput] = useContext(SourceContext)

    // handle
    const handleEdit = (e) => {
        let choosen = parseInt(e.target.value)
        let choice = movies.filter(item => {
            return choosen === item.id
        })
        choice.map((item) => {
            if (item.title === null) {
                item.title = ''
            }
            if (item.description === null) {
                item.description = ''
            }
            if (item.year === null) {
                item.year = 0
            }
            if (item.duration === null) {
                item.duration = 0
            }
            if (item.genre === null) {
                item.genre = ''
            }
            if (item.rating === null) {
                item.rating = 0
            }
            if (item.image_url === null) {
                item.image_url = ''
            }
            setInput({
                title: item.title,
                description: item.description,
                year: item.year,
                duration: item.duration,
                genre: item.genre,
                rating: item.rating,
                image_url: item.image_url,
                id: choosen,
                condition: 'edit'
            })
        })
    }

    const handleDelete = (e) => {
        let choosen = e.target.value
        Axios.delete(`${api}/${choosen}`)
            .then((res) => {
                setMovies(null)
            })
    }

    return (
        <div className="content">
            <h2 className="page-title">Daftar Film</h2>
            <table className="tbl">
                <thead className="tbl-head">
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Year</th>
                        <th>Duration</th>
                        <th>Genre</th>
                        <th>Rating</th>
                        <th colSpan="2">Action</th>
                    </tr>
                </thead>
                <tbody className="tbl-body">
                    {
                        movies === null ? (
                            <tr>
                                <td colSpan={8}><center>Data Not Found</center></td>
                            </tr>
                        ) :
                            movies.map((item, index) => {
                                return (
                                    item.description === null ? (
                                        <tr></tr>
                                    ) : (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item.title}</td>
                                                <td>{
                                                    item.description.length > 30 ? `${item.description.substr(0, 30)} . . .` : item.description
                                                }</td>
                                                <td>{item.year}</td>
                                                <td>{item.duration} minutes</td>
                                                <td>{item.genre}</td>
                                                <td>{item.rating}</td>
                                                <td>
                                                    <button onClick={handleEdit} className="btn edit" value={item.id}>Edit</button>
                                                </td>
                                                <td>
                                                    <button onClick={handleDelete} style={{ marginLeft: '0.5rem' }} className="btn delete" value={item.id}>Delete</button>
                                                </td>
                                            </tr>
                                        )
                                )
                            })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default MovieTable