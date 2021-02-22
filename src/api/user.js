import request from '@/untils/requset'

// 用户登录
export function userLogin (data) {
  return request({
    url: '/users/login',
    method: 'post',
    data
  })
}
// 用户注册检查
export function userCheck (data) {
  return request({
    url: '/users/check',
    method: 'post',
    data
  })
}
// 用户注册
export function userRegist (data) {
  return request({
    url: '/users/register',
    method: 'post',
    data
  })
}
