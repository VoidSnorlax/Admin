<!--
 * @Author: WTH 1916283894@qq.com
 * @Date: 2023-09-12 19:03:51
 * @LastEditors: WTH 1916283894@qq.com
 * @LastEditTime: 2023-09-16 13:37:10
 * @FilePath: \Admin\Admin\Admin\src\components\SvgIcon\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
      <svg :style="{ width: width, height: height }">
        <use :xlink:href="prefix + name" :fill="color"></use>
      </svg>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps({
    //xlink:href属性值的前缀
    prefix: {
      type: String,
      default: '#icon-'
    },
    //svg矢量图的名字
    name: String,
    //svg图标的颜色
    color: {
      type: String,
      default: ""
    },
    //svg宽度
    width: {
      type: String,
      default: '16px'
    },
    //svg高度
    height: {
      type: String,
      default: '16px'
    }
  
  })
  </script>
  <style scoped></style>