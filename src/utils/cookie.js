

export default {
  parse(cookie) {
    let cookieObj = {}
    cookie.split(";").forEach((cookieItem, index) => {
      let cookieArr = cookieItem.split("=");
      cookieArr[0].trim() && (cookieObj[cookieArr[0].trim()] = cookieArr[1]);
    })
    return cookieObj
  },
  stringify(cookieObj) {
    let str = ''
    for([k, v] of Object.entries(cookieObj)) {
      str += `${k}=${v}; `
    }
    return str
  },
  get() {
    let cookie = mpvue.getStorageSync('cookie');
    if(cookie) {
      return cookie
    } else {
      return ''
    }
  },
  set(cookie) {
    let previousCookie = this.parse(this.get())
    let newCookie = this.parse(cookie)
    for(let [k, v] of Object.entries(newCookie)) {
      previousCookie[k] = v
    }
    mpvue.setStorageSync('cookie', this.stringify(previousCookie))
  }
}