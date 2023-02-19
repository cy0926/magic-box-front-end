<template>
  <div>首页</div>
  <button @click="addCount()">{{ count }}</button>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(1)

function addCount(params) {
  console.log('addCount')
  count.value++
  console.log(count.value)
}
</script>
