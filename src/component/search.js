import React from 'react'
import './header.css'

class Search extends React.Component {
  render() {
    return (
      <div className="search">
        <input type="text" placeholder="输入职位名称" />
        <img src={require('../resource/imgs/searchIcon.png')} alt="" />
      </div>
    )
  }
}


export default Search;