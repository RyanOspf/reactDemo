import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'


class Head extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ifHasMask: false
    }
  }

  // 显示左侧栏
  showSider = () => {
    let { ifHasMask } = this.state
    this.setState({
      ifHasMask: !ifHasMask
    })
  }

  gotoIndex = () => {
    let {history} = this.props
    history.push('/')
  }

  render() {
    let { ifHasMask } = this.state
    return (
      <header className="header">
        <img onClick={this.gotoIndex} className="logoImg" src={require('../resource/imgs/logo.png')} alt="" />
        <div onClick={this.showSider} className="close">
          <span className={`close-icon ${ifHasMask ? 'open' : ''}`}></span>
        </div>
        <div className={`menu ${ifHasMask ? '.leftSide-enter-to' : 'leftSide-enter'}`}>
          <ul>
            <li><NavLink exact to="/">首页</NavLink></li>
            <li><NavLink exact to="/companyIntro">公司介绍</NavLink></li>
            <li><NavLink exact to="/personCenter">个人中心</NavLink></li>
            <li><NavLink exact to="/login">登录</NavLink></li>
          </ul>
        </div>
        <div className={`${ifHasMask ? 'menu-mask' : ''} mask-transition`}></div>
      </header>
    )
  }
}

export default Head