import _http from './index.js'

// listPage ：首页列表
const listPage = (params={}) => {
  return _http.fetch('listPage',params)
}

// jobtitle: 职位title
const jobTitle = (params={}) => {
  return _http.fetch('jobtitle',params)
}

// jobDescribe: 职位详细描述
const jobDescribe = (params={}) => {
  return _http.fetch('jobDescribe',params)
}

export {
  listPage,
  jobTitle,
  jobDescribe
}