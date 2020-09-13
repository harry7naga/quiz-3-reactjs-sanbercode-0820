import React from 'react'

// Component
import Search from './Search'
import MovieTable from './MovieTable'
import MovieForm from './MovieForm'

const Editor = () => {
    return (
        <div className="container">
            <Search />
            <MovieTable />
            <MovieForm />
        </div>
    )
}

export default Editor