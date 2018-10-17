import React from 'react'
import './style.css'
import { jobTitle } from '../../service/service'
import Head from '../../component/header'
import Search from '../../component/search'

class JobTitle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: false, 
      jobInfo: [] 
    }
  }

  componentDidMount() {
    let { location } = this.props

    jobTitle().then(res => {
      let data = res.data[location.state.id - 1]
      this.setState({
        jobInfo: data,
        status: true
      })
    }).catch((err) => {
      console.log(err)
    })
  }

  goToJobDes(id, e) {
    let {history} = this.props;
    history.push({
      pathname: '/JobDes',
      search:'?id='+id
    })
  }

  render() {
    let { status, jobInfo } = this.state
    if(!status) {
      return null
    }
    return (
        <React.Fragment>
          <Head {...this.props} />
          <Search />
          <div className="jobtitle">
            <div className="jobox">
              {
                jobInfo.length > 0 &&
                <ul>
                  {
                    jobInfo.map(item => {
                      return (
                        <li onClick={(e) => {this.goToJobDes(item.jobid, e)}} className="joblist" key={item.jobid}>
                          <p className="joblist-name">
                            <span className="joblist-title">{item.jobtitle}</span>
                            {
                              item.jobhot && <span className="joblist-hot">HOT</span>
                            }
                          </p>
                          <p className="joblist-city">{item.jobcity}</p>
                          <p className="joblist-addition">
                            <span className="joblist-time">发布时间: {item.jobtime}</span>
                          </p>
                        </li>
                      )
                    })
                  }
                </ul>
              }
      
              {
                jobInfo.length === 0 && <p className="void-note void-note-active">没有找到相应的岗位哦！</p>
              }
            </div >
          </div >
        </React.Fragment>
      )
  }
}

export default JobTitle;