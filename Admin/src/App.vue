<!--
 * @Author: WTH 1916283894@qq.com
 * @Date: 2023-09-05 17:45:08
 * @LastEditors: WTH 1916283894@qq.com
 * @LastEditTime: 2023-09-12 19:20:26
 * @FilePath: \Admin\Admin\Admin\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import SvgIcon from '@/components/SvgIcon/index.vue'
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <SvgIcon name="shoping" width="100px" height="100px" color="pink"></SvgIcon>
  <!-- svg:图标外层容器节点
       xlink:href执行用哪一个图标,属性值务必#icon+图标名字 
  -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
