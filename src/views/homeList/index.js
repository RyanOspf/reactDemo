import React from 'react'
import { listPage } from '../../service/service'
import Head from '../../component/header'
import Search from '../../component/search'
import Footer from '../../component/foot'

import './style.css'

class HomeList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {data: []}
    }

    componentDidMount() {
        listPage().then((res) => {
            let data = res.data
            this.setState({
                data
            })
        })
    }

    goToDetail = (id, ev) => {
        let { history } = this.props
        // history.push('/noFound') //简写
        history.push({
            pathname:'/jobTitle',
            state: {
                id
            }
        })
    }

    render() {
        let { data } = this.state;
        return (
            <React.Fragment>
                <Head {...this.props} />
                <Search />
                <div className="listPage">
                    <div className="contain">
                        <ul>
                            {
                                data.length > 0 && data.map((item) => {
                                    return (
                                        <li onClick={(e) => {this.goToDetail(item.listId, e)}} key={item.listId} style={{ backgroundImage: `url(${item.desImg})` }}>
                                            <div>
                                                <h4>{item.describeName}</h4>
                                                <p>{item.describeText}</p>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <Footer />
                </div>
            </React.Fragment>
        )
    }
}

export default HomeList;