import React from 'react'
import ReactDom from 'react-dom'

import App from '@/components/app.js'

if (module.hot) {
  module.hot.accept()
}

ReactDom.render(
  <div>
    <p>hello world</p>
    <App />
  </div>,
  document.getElementById('app')
)