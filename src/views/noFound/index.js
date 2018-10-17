import React from 'react'
import Head from '../../component/header'

import './style.css'

class NoFound extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Head {...this.props}/>
        <div className="img404">
          <img src={require('../../resource/imgs/404.jpg')} alt="404" />
        </div>
      </React.Fragment>
    )
  }
}

export default NoFound