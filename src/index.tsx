import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// 引入Store
import Store from './redux/store'

ReactDOM.render(
  <Store>
    <App />
  </Store>,
  document.getElementById('root')
)
