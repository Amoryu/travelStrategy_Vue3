let baseURL = 'http://192.168.1.100:8098' + "/api"

const request = (url, method, data = {}) => {
  return new Promise((resolve,reject) => {
    wx.request({
      url: baseURL + url,
      method,
      data,
      header:{
        "content-type": 'application/json'
      },
      success: res => { resolve(res.data) },
      fail: err => { reject(err) }
    }) 
  })
}


export default {
  get(url, data) {
    return request(url, "GET", data) 
  },
  post(url, data) {
    return request(url, "POST", data)
  },
  delete(url, data) {
    return request(url, "DELETE", data)
  },
  put(url, data) {
    return request(url, "PUT", data)
  }
}


