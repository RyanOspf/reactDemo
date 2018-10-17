import React from 'react'
import {
  BrowserRouter as Router,
  HashRouter as Hrouter,
  Route,
  Redirect,
  Switch
  // Link
} from 'react-router-dom'

import {getLocal} from '../utils/util'

// 404组件
import NoFound from './noFound'

import HomeList from './homeList'
import JobTitle from './jobTitle'
import JobDes from './jobDes'
import CompanyIntro from './companyIntro'
import Login from './login'


class App extends React.Component {

  // 逻辑结构：所有的页面如果未登录都跳转到login页面去，除去login本身和404页面

  render() {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route exact path="/" render={
              (props) => {
                if(getLocal('elemUser')) {
                  return <HomeList {...props} />
                }else {
                  return <Redirect to="/login" />
                }
              }
            } />
            <Route exact path="/jobTitle" render={
              (props) => {
                if(getLocal('elemUser')) {
                  return <JobTitle {...props} />
                }else {
                  return <Redirect to="/login" />
                }
              }
            } />
            <Route exact path="/JobDes" render={
              (props) => {
                if(getLocal('elemUser')) {
                  return <JobDes {...props} />
                }else {
                  return <Redirect to="/login" />
                }
              }
            } />
            <Route exact path="/companyIntro" render={
              (props) => {
                if(getLocal('elemUser')) {
                  return <CompanyIntro {...props} />
                }else {
                  return <Redirect to="/login" />
                }
              }
            } />
            <Route exact path="/login" component={Login} />
            <Route component={NoFound} />
          </Switch>
        </React.Fragment>
      </Router>
    )
  }

  // render() {
  //   return (
      // <Router>
      //   <React.Fragment>
      //     <Switch>
      //       <Route exact path="/" component={HomeList} />
      //       <Route exact path="/jobTitle" component={JobTitle} />
      //       <Route exact path="/JobDes" component={JobDes} />
      //       <Route exact path="/companyIntro" component={CompanyIntro} />
      //       <Route exact path="/login" component={Login} />
      //       <Route component={NoFound} />
      //     </Switch>
      //   </React.Fragment>
      // </Router>
    // )
  // }
}

// Switch组件返回第一个匹配成功的Route路由。但是还有一个Route组件没有path，它能够被任何路由匹配到！
/*
整体实现思路：
使用Switch组件，匹配第一个符合条件的Route，然后把一个无path的Route组件，写在Switch的最后一项，这样就能在匹配不到合适的组件的时候，总能匹配到最后一个Route对应的组件。
*/

export default App;