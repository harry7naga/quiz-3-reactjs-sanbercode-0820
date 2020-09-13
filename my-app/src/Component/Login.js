import React, { useContext } from 'react'
import { SourceContext } from './Logic/SourceContext'

const Login = () => {
    const [isLogin, setIsLogin, loginInput, setLoginInput, user] = useContext(SourceContext)

    // handle
    const handleSignin = (e) => {
        e.preventDefault()
        if (loginInput.username === user.username) {
            if (loginInput.password === user.password) {
                setIsLogin(true)
                localStorage.setItem('isLogin', true)
                setLoginInput({
                    username: '',
                    password: ''
                })
            } else {
                console.log('wrong password')
            }
        } else {
            console.log('wrong username')
        }
    }

    const handleChange = (e) => {
        let temp = loginInput
        let value = e.target.value
        switch (e.target.name) {
            case 'username':
                setLoginInput({
                    username: value,
                    password: temp.password
                })
                break;
            case 'password':
                setLoginInput({
                    username: temp.username,
                    password: value
                })
                break;
            default:
                break;
        }
    }

    return (
        <div className="container">
            <div className="card">
                <form onSubmit={handleSignin} className='form-control'>
                    <div className='form-input input'>
                        <label className="label-type" htmlFor='username'>Username</label>
                        <input onChange={handleChange} className="input-type" type='text' name='username' value={loginInput.username} />
                    </div>
                    <div className="form-input input">
                        <label className="label-type" htmlFor='password'>Password</label>
                        <input onChange={handleChange} className="input-type" type='password' name='password' value={loginInput.password} />
                    </div>
                    <div className="form-input button">
                        <input type="submit" className="btn" value="Login" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login

// hary
