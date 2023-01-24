import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './Routes'

// ReactDOM.render(<App />, document.getElementById('root'))
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Routes /> 
    </React.StrictMode>
);
