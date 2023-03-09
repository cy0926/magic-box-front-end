import { createStore } from 'vuex'
import { removeToken } from '@/composables/auth'
// 创建一个新的 store 实例
const store = createStore({
  state() {
    return {
      //用户信息
      user: {},

      // 侧边宽度
      asideWidth: '250px'
    }
  },
  mutations: {
    //记录用户信息
    SET_USERINFO(state, user) {
      state.user = user
    },
    // 展开/收起侧边栏
    handleAsideWidth(state) {
      state.asideWidth = state.asideWidth == '250px' ? '64px' : '250px'
    }
  },
  actions: {
    //获取当前用户登录信息--掉真实接口
    // getinfo({commit}){
    //   return new Promise((resolve,reject)=>{
    //     getinfo().then(res=>{   //getinfo()这个是真实接口，后续调用还需要引用进来才可用
    //       commit('SET_USERINFO', res)
    //       resolve(res)
    //     }).catch(err=>reject(err))
    //   })
    // }

    // 获取当前用户登录信息，这里是死的固定假信息
    getinfo({ commit }) {
      return commit('SET_USERINFO', { username: 'admin' })
    },
    //退出登录
    logout({ commit }) {
      // 删除cookies里的token
      removeToken()

      // 清楚当前用户状态 vuex
      commit('SET_USERINFO', {})
    }
  }
})

export default store
