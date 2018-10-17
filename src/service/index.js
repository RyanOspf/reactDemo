import axios from 'axios'

// 开发环境和生产环境的配置
let baseURL = ''
if(process.env.NODE_ENV === 'development') {
  baseURL = 'https://www.easy-mock.com/mock/5a409adbe817121d56a3a660/example/'
}else if (process.env.NODE_ENV === 'production') {
  baseURL = 'https://www.easy-mock.com/mock/5a409adbe817121d56a3a660/example/'
}

axios.defaults.baseURL = baseURL
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

const _http = {
  fetch(path, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get(path, {
          params: params,
          withCredentials: true,
          responseType: 'json'
        }
      ).then((res) => {
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}

export default _http





