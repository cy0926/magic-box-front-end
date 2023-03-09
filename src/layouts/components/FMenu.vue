<template>
  <div class="f-menu" :style="{ width: $store.state.asideWidth }">
    <el-menu :default-active="defaultActive" unique-opened :collapse="isCollapse" class="border-0" :collapse-transition="false" @select="handleSelect">
      <template v-for="(item, index) in asideMenus" :key="index">
        <el-sub-menu v-if="item.child && item.child.length > 0" :index="item.name">
          <template #title>
            <el-icon>
              <component :is="item.icon"></component>
            </el-icon>
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item v-for="(item2, index2) in item.child" :key="index2" :index="item2.frontpath">
            <el-icon>
              <component :is="item2.icon"></component>
            </el-icon>
            <span>{{ item2.name }}</span>
          </el-menu-item>
        </el-sub-menu>

        <el-menu-item v-else :index="item.frontpath">
          <el-icon>
            <component :is="item.icon"></component>
          </el-icon>
          <span>{{ item.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>
<script setup>
import { useRouter, useRoute } from 'vue-router'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
const router = useRouter()
const store = useStore()
const route = useRoute()

//默认选中
const defaultActive = ref(route.path)

// 是否折叠
const isCollapse = computed(() => !(store.state.asideWidth == '250px'))
const asideMenus = [
  {
    name: '首页',
    icon: 'Grid',
    child: [
      {
        name: '欢迎页',
        icon: 'Reading',
        frontpath: '/'
      }
    ]
  },
  {
    name: '测试工具',
    icon: 'help',
    child: [
      {
        name: '漏测分析',
        icon: 'DataAnalysis',
        frontpath: '/bug/list'
      }
    ]
  },
  {
    name: '测试支持',
    icon: 'Tools',
    child: [
      {
        name: '物模型',
        icon: 'Connection',
        frontpath: '/thing-model/list'
      }
    ]
  }
]

const handleSelect = (e) => {
  router.push(e)
}
</script>

<style>
.f-menu {
  transition: all 0.2s;
  top: 64px;
  bottom: 0;
  left: 0;
  overflow-y: auto;
  overflow-x: hidden;
  @apply shadow-md fixed bg-light-50;
}
</style>
