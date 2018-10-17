import React from 'react'
import './style.css'
import Head from '../../component/header'
import { jobDescribe } from '../../service/service'
import { getQueryUrl } from '../../utils/util'

class JobDes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            status: false
        }
    }

    componentDidMount() {
        let {location} = this.props
        jobDescribe().then(res => {
            let id = getQueryUrl(location.search).id
            let data = res.data.filter(item => (item.id).toString() === id)
            this.setState({
                data,
                status: true
            })
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        let {data, status} = this.state;
        if(!status) {
            return null
        }
        let jobdes = data[0].jobDes
        return (
            <React.Fragment>
                <Head {...this.props} />
                <div className="jobtitle">
                    <div className="jodes">
                        <div className="jobdetail-title">
                            <h1>{ jobdes.jobName }</h1>
                            <div className="jobdetail-misc smallscreen">
                                <span>部门: { jobdes.jobDep }</span>
                                <span>城市: { jobdes.jobCity }</span>
                                <span>公司: { jobdes.jobCom }</span>
                                <span>类别: { jobdes.jobType }</span>
                                <span>发布: { jobdes.jobTime }</span>
                            </div>
                        </div>
                        <div className="jobdetail-description" >
                            <p>岗位职能</p>
                            <ul>
                                {
                                    jobdes.jobFunction.length > 0 &&
                                    jobdes.jobFunction.map((item,index) => <li key={index}>{item}</li>)
                                }
                            </ul>
                        </div>
                        <div className="jobdetail-description">
                            <p>岗位要求</p>
                            <ul>
                                {
                                    jobdes.jobRequire.length > 0 && 
                                    jobdes.jobRequire.map((item,index) => <li key={index}>{item}</li>)
                                }
                            </ul>
                        </div>
                    </div>
                    <footer className="footer"> 
                        <div className="jobdetail-apply">
                            <p>申请职位</p>
                        </div>
                    </footer>
                </div>
            </React.Fragment>
        )
    }
}

export default JobDes