import { ElNotification } from 'element-plus'
import { ElMessageBox } from 'element-plus'
import nProgress from 'nprogress'

// 消息提示
export function toast(message, type = 'success') {
  ElNotification({
    message: message,
    type,
    duration: 1000
  })
}

//弹出提示框
export function showModel(content = '提示内容', type = 'warning', title = '') {
  return ElMessageBox.confirm(content, title, {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type
  })
}

// 显示全屏loading
export function showFullLoading() {
  nProgress.start()
}

// 隐藏全屏loading
export function hideFullLoading() {
  nProgress.done()
}
