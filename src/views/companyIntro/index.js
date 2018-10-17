import React from 'react'
import Head from '../../component/header'
import Footer from '../../component/foot'
import './style.css'

import { Carousel, WingBlank } from 'antd-mobile';

let lunbo = [{
  "describeName": "技术类",
  "desImg": "https://jobs-mobile.ele.me/static/img/bg-1.ca292e2.jpg"
},
{
  "describeName": "产品类",
  "desImg": "https://jobs-mobile.ele.me/static/img/bg-2.b85becd.jpg"
},
{
  "describeName": "设计类",
  "desImg": "https://jobs-mobile.ele.me/static/img/bg-3.8b361bd.jpg"
},
{
  "describeName": "市场类",
  "desImg": "https://jobs-mobile.ele.me/static/img/bg-4.88cd77d.jpg"
},
{
  "describeName": "职能类",
  "desImg": "https://jobs-mobile.ele.me/static/img/bg-5.450e471.jpg"
},
{
  "describeName": "物流类",
  "desImg": "https://jobs-mobile.ele.me/static/img/bg-6.6145c7d.jpg"
},
{
  "describeName": "客服类",
  "desImg": "https://jobs-mobile.ele.me/static/img/bg-7.564817d.jpg"
}]

class CompanyIntro extends React.Component {
  constructor(props) {
    super(props)
    this.state = {lunbo}
  }
  render() {
    let {lunbo} = this.state
    return (
      <React.Fragment>
        <Head {...this.props} />
        <div className="introCom">
          <div className="swiperBox">
            <WingBlank>
              <Carousel
                autoplay={true}
                infinite
              >
              {
                lunbo.length > 0 &&
                lunbo.map((item,index) => (
                  <img
                    key={index}
                    src={item.desImg}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                  />
                ))
              }
              </Carousel>
            </WingBlank>
          </div>
          <div className="content">
            <div>
              <h3>认识饿了么</h3>
              <h5>改变世界没有想象的那么难</h5>
              <img className="content-bigimage" src="https://jobs-mobile.ele.me/static/img/about-1-1.e255d31.jpg" alt="" />
              <p>饿了么是中国专业的到家服务平台，2008 年创立于上海。饿了么成立至今，秉承客户中心、品质为王、自我驱动、团队协作、创新、诚信的价值观，致力推进中国餐饮业的数字化进程，让 7 亿城镇居民实现“美好生活，触手可得”。截止 2016 年 12 月，饿了么在线外卖交易平台已覆盖全国 1400 多个城市，用户量超过 1 亿，加盟餐厅 100 万家，日订单量突破 900 万单，平台上 99.5% 的交易额来自移动端。业绩持续高速增长的同时，公司员工也超过 15000 人。</p>
              <img className="content-bigimage" src="https://jobs-mobile.ele.me/static/img/about-1-2.e6a4d02.jpg" alt="" />
              <p>饿了么正改变着人们的饮食消费习惯乃至生活方式，定义到家消费的未来，努力向广大城镇居民兑现“make everything 30’”的承诺。其在外卖交易平台、即时配送物流平台及供应链平台上的持续发力，正逐渐勾勒出万亿级别的到家服务生态体系。</p>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}
      
export default CompanyIntro