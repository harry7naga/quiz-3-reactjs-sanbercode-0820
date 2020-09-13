import React, { useState, createContext } from 'react'

export const SourceContext = createContext()

export const SourceProvider = (props) => {
    const [api] = useState('http://backendexample.sanbercloud.com/api/movies')
    const [user] = useState({
        username: 'admin',
        password: 'admin',
    })
    const [loginInput, setLoginInput] = useState({
        username: '',
        password: ''
    })
    const [isLogin, setisLogin] = useState(false)
    const [movies, setMovies] = useState(null)
    const [input, setInput] = useState({
        title: '',
        description: '',
        year: 2020,
        duration: 120,
        genre: '',
        rating: 0,
        image_url: ''
    })

    return (
        <SourceContext.Provider
            value={[
                isLogin, setisLogin, loginInput, setLoginInput, user, movies, setMovies, api, input, setInput
            ]}
        >
            {props.children}
        </SourceContext.Provider>
    )
}