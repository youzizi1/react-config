import React from 'react'
import ReactDom from 'react-dom'

import App from './app'

ReactDom.render(
  <div>hello world
    <App />
  </div>,
  document.getElementById('app')
)