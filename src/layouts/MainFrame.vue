<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <f-header></f-header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <f-menu></f-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import FHeader from './components/FHeader.vue'
import FMenu from './components/FMenu.vue'
</script>
