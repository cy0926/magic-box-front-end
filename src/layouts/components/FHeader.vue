<template>
  <div class="f-header">
    <span class="logo">
      <el-icon class="mr-2"><eleme-filled /></el-icon>
      Magic box
    </span>
    <el-icon class="icon-btn"><Fold /></el-icon>
    <el-icon class="icon-btn"><Refresh /></el-icon>
    <div class="ml-auto items-center flex items-center">
      <el-icon class="icon-btn"><FullScreen /></el-icon>
      <el-dropdown class="f-dropdown" @command="handelCommand">
        <span class="flex items-center text-light-50">
          <el-avatar class="mr-2" :size="25" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
          {{ $store.state.user.username }}

          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { showModel, toast } from '@/composables/util'
import { useStore } from 'vuex'
// import { logout } from '@/api/login'
const router = useRouter()
const store = useStore()

const handelCommand = (c) => {
  switch (c) {
    case 'logout':
      handleLogout()
      break
  }
}

function handleLogout() {
  showModel('是否要退出登录？').then(() => {
    // 真实的登录接口
    // logout().finally(() => {
    // 移除cookies里的token
    // 清楚当前用户状态vuex
    // store.dispatch('logout')
    //跳转回首页
    // router.push('/login')
    //提示退出登录成功
    // toast('退出登录成功')
    // })

    //只做跳转会首页，不掉退出登录接口
    store.dispatch('logout')
    //跳转回首页
    router.push('/login')
    //提示退出登录成功
    toast('退出登录成功')
  })
}
</script>

<style>
.f-header {
  @apply flex items-center bg-blue-400 text-light-50 fixed top-0 left-0 right-0;
  height: 64px;
}
.logo {
  width: 250px;
  @apply flex justify-center items-center text-xl;
}
.icon-btn {
  @apply flex justify-center items-center;
  width: 42px;
  height: 64px;
  cursor: pointer; /* 鼠标hover有手型标志 */
}
.icon-btn:hover {
  @apply bg-blue-400;
}
.f-header .f-dropdown {
  height: 64px;
  cursor: pointer;
  outline: 0;
  @apply flex items-center justify-center mr-2;
}
</style>
