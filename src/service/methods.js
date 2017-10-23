/**
 * Created by hzjiazhenshan on 2017/10/20.
 */

/**
 * 公共方法封装
 * */

const ls = window.localStorage
export default {
  getItem (key) {
    try {
      return JSON.parse(ls.getItem(key))
    } catch (err) {
      return null
    }
  },
  setItem (key, val) {
    ls.setItem(key, JSON.stringify(val))
  },
  removeItem (key) {
    ls.removeItem(key)
  },
  clear () {
    ls.clear()
  },
  keys () {
    return ls.key()
  }
}
