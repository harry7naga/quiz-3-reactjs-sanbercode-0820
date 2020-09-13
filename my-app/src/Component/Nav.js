import Axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.png'

// import context
import { SourceContext } from './Logic/SourceContext'

const Nav = () => {
    const [isLogin, setisLogin, , , , movies, setMovies, api] = useContext(SourceContext)

    useEffect(() => {
        if (movies === null) {
            Axios.get(api)
                .then(res => {
                    setMovies(res.data)
                })
        }
        if (JSON.parse(localStorage.getItem('isLogin') === null)) {
            localStorage.setItem('isLogin', isLogin)
        }
        setisLogin(JSON.parse(localStorage.getItem('isLogin')))
    })

    // handle
    const handleLogout = (e) => {
        setisLogin(false)
        localStorage.setItem('isLogin', false)
    }

    return (
        <nav>
            <div className="logo-nav">
                <img width="75%" src={logo} alt='logo' />
            </div>
            <ul className="navigation">
                <li className="nav-link"><Link to='/'>Home</Link></li>
                <li className="nav-link"><Link to='/about'>About</Link></li>
                {
                    isLogin === false ? (
                        <li className="nav-link"><Link to='/login'>Login</Link></li>
                    ) : (
                            <>
                                <li className="nav-link"><Link to='/editor'>Edit Film</Link></li>
                                <li className="nav-link"><button onClick={handleLogout} style={{ fontSize: '18px' }} className='btn'>Logout</button></li>
                            </>
                        )
                }
            </ul>
        </nav>
    )
}
export default Nav