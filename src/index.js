import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import GlobalStyles from './globalStyles'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <GlobalStyles />
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
