import React from 'react'
import Head from '../../component/header'
import './style.css'
import {setLocal, getLocal} from '../../utils/util'
import { Button, Toast } from 'antd-mobile';



class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: getLocal('elemUser') || '',
      pswd: getLocal('elemPswd') || ''
    }
  }

  userHandle = (e) => {
    setLocal('elemUser', e.target.value.trim())
    this.setState({
      username: e.target.value.trim()
    })
  }

  pswdHandle = (e) => {
    setLocal('elemPswd', e.target.value)
    this.setState({
      pswd: e.target.value
    })
  }
  
  submitHandle = (e) => {
    let {username, pswd} = this.state
    let {history} = this.props
    if(username !== '' && pswd !== '') {
      history.push('/')
    }else {
      Toast.info('用户名和密码缺一不可', 2);
    }
  }

  render() {
    let {username, pswd} = this.state
    return (
      <React.Fragment>
        <Head {...this.props} />
        <div className="loginWrap">
          <h3 className="title">饿了么</h3>
          <label htmlFor="username">
            <input onChange={this.userHandle} id="username" defaultValue={username} type="text" placeholder="请输入用户名" />
          </label>
          <label htmlFor="password">
            <input onChange={this.pswdHandle} id="password" defaultValue={pswd} type="password" placeholder="请输入密码" />
          </label>
          <p className="note">温馨提示：<span style={{color: 'red'}}>密码和用户名随便填</span>，未注册饿了么账号的手机号，登录时将自动注册，且代表您已同意</p>
          <Button onClick={this.submitHandle} type="primary">登录</Button>
        </div>
      </React.Fragment>
    )
  }
}

export default Login