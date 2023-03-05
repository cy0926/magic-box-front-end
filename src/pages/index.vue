<template>
  <div>首页</div>
  <el-button @click="handleLogout">退出登录</el-button>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { showModel, toast } from '@/composables/util'
// import { logout } from '@/api/login'

const router = useRouter()
function handleLogout() {
  showModel('是否要退出登录？').then((res) => {
    // 真实的登录接口
    // logout().finally(() => {
    // 移除cookies里的token
    //清楚当前用户状态vuex

    //跳转回首页
    // router.push('/login')
    //提示退出登录成功
    // toast('退出登录成功')
    // })

    //只做跳转会首页，不掉退出登录接口
    //跳转回首页
    router.push('/login')
    //提示退出登录成功
    toast('退出登录成功')
  })
}
</script>
