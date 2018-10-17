import React from 'react'
import ReactDOM from 'react-dom'

import './resource/reset.css'
import 'antd-mobile/dist/antd-mobile.css'; 

// import {getLocal} from './utils/util'
import App from './views/App'


// if(window.location.pathname !== '/login' && getLocal('elemUser') === null) {
//   window.location.href="/login"
// }


// console.log(1)

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
