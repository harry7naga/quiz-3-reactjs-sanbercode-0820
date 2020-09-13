import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { SourceProvider } from './SourceContext'
import Routes from './Routes'

const Source = () => {
    return (
        <SourceProvider>
            <Router>
                <Routes />
            </Router>
        </SourceProvider>
    )
}

export default Source