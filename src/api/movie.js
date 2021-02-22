import request from '@/untils/requset'

// 电影请求列表
export function movieList (data) {
  return request({
    url: '/movie/list',
    method: 'post',
    data
  })
}
// 电影详情
export function movieDet (params) {
  return request({
    url: '/movie/movieDet',
    method: 'get',
    params
  })
}
// 是否收藏电影
export function movieCollect (data) {
  return request({
    url: '/movie/isCollection',
    method: 'post',
    data
  })
}
// 是否收藏电影
export function collect (data) {
  return request({
    url: '/movie/collect',
    method: 'post',
    data
  })
}
