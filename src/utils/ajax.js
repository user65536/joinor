/**
 * @author xjm
 * @description 使用于小程序的自封装ajax函数
 * @params {url, method, data} 地址 方法 对象形式参数
 * @returns Promise
 */

import cookie from './cookie'

const contentType = 'application/json'

export default function ({url, method="GET", data}) {
  return new Promise((resolve, reject) => {
    mpvue.request({
      url,
      method,
      header: {
        "Content-Type": contentType,
        "Cookie": cookie.get()
      },
      data: JSON.stringify(data),
      success:  ({data, header}) => {
        header["Set-Cookie"] && cookie.set(header["Set-Cookie"])
        resolve(data)
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}