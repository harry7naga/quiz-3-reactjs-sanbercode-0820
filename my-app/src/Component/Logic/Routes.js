import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// template
import Nav from '../Nav'
import Footer from '../Footer'

// Content
import Home from '../Home'
import About from '../About'
import Login from '../Login'
import Editor from '../Edit/Editor'
import { SourceContext } from './SourceContext'

const Routes = () => {
    const [isLogin] = useContext(SourceContext)
    return (
        <>
            <Nav />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/about'>
                    <About />
                </Route>
                <Route exact path='/login'>
                    {
                        isLogin === false ? (<Login />) : (<Redirect to='/' />)
                    }
                </Route>
                <Route exact path='/editor'>
                    {
                        isLogin === true ? (<Editor />) : (<Redirect to='/' />)
                    }
                </Route>
            </Switch>
            <Footer />
        </>
    )
}
export default Routes