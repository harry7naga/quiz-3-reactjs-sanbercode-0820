import React, { useContext } from 'react'
import { SourceContext } from './Logic/SourceContext'

const Home = () => {
    const [, , , , , movies] = useContext(SourceContext)

    return (
        <div className="container">
            <h2 className="page-title">Daftar Film Terbaik</h2>
            {
                movies === null ? (
                    <div className="content">
                        <h4 className="content-title">No Data Found</h4>
                    </div>
                ) : movies.map((item, index) => {
                    return (
                        <div className="content" key={index}>
                            <h4 className="content-title">{item.title}</h4>
                            <div className="content-info">
                                <div className="content-image">
                                    <img src={item.image_url} alt='film' />
                                </div>
                                <div className="content-detail">
                                    <p>Rating {item.rating}</p>
                                    <p>Durasi : {item.duration} Menit</p>
                                    <p>Genre : {item.genre}</p>
                                </div>
                            </div>
                            <div className="content-desc">
                                <p>Deskripsi : </p>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home

// Hary
