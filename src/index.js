import React from 'react'
import ReactDom from 'react-dom'

import App from './app'

if (module.hot) {
  module.hot.accept()
}

ReactDom.render(
  <div>hello world ugu
    <App />
  </div>,
  document.getElementById('app')
)