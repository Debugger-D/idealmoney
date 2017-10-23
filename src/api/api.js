/**
 * Created by hzjiazhenshan on 2017/10/18.
 */
import axios from 'axios'
import qs from 'qs'
import Router from '@/router/index'

/** 接口路径 */

const scoreapi = '/api/v1/credit/'
const accountapi = '/account/'

/**
 * 登陆
 */

export const login = data => axios.post(accountapi + 'user/login', qs.stringify(data), {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  }
})

/**
 * 登陆
 */

export const logout = data => axios.post(accountapi + 'user/logout')

/** HTTP拦截器 */
axios.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  if (error.response.status === 403) {
    logout();
    Router.push({path: '/login'})
    return Promise.reject(error.response.data.error);
  } else if (error.response.status === 401) {
    Router.push({path: '/login'})
    return Promise.reject(error.response.data.error);
  }
});
