function getQueryUrl(url) {
  // url = '?id=100&name=leo' url的格式
  var link = url.substring(1)
  var arr = link.split('&')
  var json = {}
  arr.forEach(item => {
    var leftKey = item.split('=')[0]
    var rightValue = item.split('=')[1]
    json[leftKey] = rightValue
  })
  return json
}

function setLocal(key, value) {
  localStorage.setItem(key, value)
}

function getLocal(key) {
  return localStorage.getItem(key)
}

export { getQueryUrl, setLocal, getLocal };