import ajax from './ajax'

const host = 'localhost';
const port = 8000

const api = {
  login: '/login',
  release: '/release',
  getActionList: '/getActionList',
  getActionDetail: '/getActionDetail',
  signUp: '/signUp',
  getEnrolledAction: '/getEnrolledAction'
}

for(let [k, v] of Object.entries(api)) {
  api[k] = `http://${host}:${port}${v}`
}

export default {
  login(code) {
    return ajax({
      url: api.login,
      method: 'POST',
      data: {
        code
      }
    })
  },
  release (filePath, data) {
    return new Promise((resolve, reject) => {
      wx.uploadFile({
        url: api.release, //仅为示例，非真实的接口地址
        filePath,
        name: 'file',
        formData: data,
        success (res){
          resolve(JSON.parse(res.data))
        },
        fail(err) {
          reject(err)
        }
      })
    })
  },
  getActionList (offset, count) {
    return ajax({
      url: api.getActionList,
      method: 'GET',
      data: {
        count,
        offset
      }
    }).then((res) => {
      if(res.code === 200) {
        return Promise.resolve(res.list)
      } else {
        return Promise.reject()
      }
    })
  },
  getActionDetail (id) {
    return ajax({
      url: api.getActionDetail,
      method: 'GET',
      data: {
        id
      }
    }).then(({detail, state}) => {
      return Promise.resolve( {detail, state} )
    })
  },
  signUp (id) {
    return ajax({
      url: api.signUp,
      method: 'POST',
      data: {
        id
      }
    })
  },
  getEnrolledAction() {
    return ajax({
      url: api.getEnrolledAction,
      method: 'GET'
    }).then(result => {
      console.log(result)
      if(result.code == 200) {
        return Promise.resolve(result.list)
      } else {
        return Promise.reject()
      }
    })
  }
}






