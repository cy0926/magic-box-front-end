<template>
  <el-row class="login-container">
    <el-col :lg="16" :md="12" class="left">
      <div>
        <div>欢迎来到 maigc box</div>
        <div>这里是云测试的自由发挥平台</div>
      </div>
    </el-col>
    <el-col :lg="8" :md="12" class="right">
      <h2 class="title">欢迎回来</h2>
      <div>
        <span class="line"></span>
        <span>账号密码登录</span>
        <span class="line"></span>
      </div>
      <el-form ref="formRef" :rules="rules" :model="form" class="w-[250px]">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名">
            <template #prefix>
              <el-icon>
                <User />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" type="password" placeholder="请输入密码" show-password>
            <template #prefix>
              <el-icon>
                <Lock />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button round color="#626aef" class="w-[250px]" type="primary" @click="onsubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref, reactive } from 'vue'
// import { login } from '@/api/login'
import { ElNotification } from 'element-plus'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = reactive({
  username: '',
  password: ''
})

const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 5, message: '用户名长度必须是3 到5个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 3, max: 5, message: '密码需要 3 到5个单词', trigger: 'blur' }
  ]
}
const formRef = ref(null)

const onsubmit = () => {
  formRef.value.validate((valid) => {
    console.log(valid)
    if (!valid) {
      return false
    }
    // else {
    //   login(form.username, form.password) // 登录功能实现，验证通过之后，可以对接真实接口
    //     .then((res) => {
    //       // console.log(res)
    //       router.push('/')
    //       ElNotification({
    //         message: res.response.data.data,
    //         type: 'success'
    //       })
    //     })
    //     .catch((err) => {
    //       ElNotification({
    //         message: err.response.data.msg || '请求失败',
    //         type: 'error'
    //       })
    //     })
    // }

    // 写的伪登录，不掉接口，等有真实接口之后，再替换为下面的login()
    if (form.username == 'admin' && form.password == 'admin') {
      ElNotification({
        message: '登录成功',
        type: 'success',
        duration: 1000
      })
      router.push('/')
    } else {
      // 登录失败
      ElNotification({
        message: '用户名或密码错误' || '请求失败',
        type: 'error',
        duration: 1000
      })
    }
  })
}
</script>

<style scoped>
.login-container {
  @apply min-h-screen bg-indigo-500;
}
.login-container .left,
.login-container .right {
  @apply flex items-center justify-center flex-col;
}
.login-container .right {
  @apply bg-light-50 flex-col;
}
.left > div > div:first-child {
  @apply font-bold text-2xl text-light-50 mb-3;
}
.left > div > div:last-child {
  @apply text-gray-200 text-sm;
}
.right .title {
  @apply font-bold text-3xl text-gray-800;
}
.right > div {
  @apply flex items-center justify-center my-5 text-gray-300 space-x-2;
}
.right .line {
  @apply h-[1px] w-16 bg-gray-200;
}
</style>
