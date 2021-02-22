import { Loading } from 'element-ui'

let loadingCount = 0
let loading

function startLoading () {
  loading = Loading.service({
    lock: true,
    text: 'Loading',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  })
}

function endLoading () {
  loading.close()
}
export function showLoading () {
  if (loadingCount === 0) {
    startLoading()
  }
  loadingCount++
}

export function hideLoading () {
  if (loadingCount <= 0) {
    return
  }
  loadingCount--
  if (loadingCount === 0) {
    endLoading()
  }
}
