import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore 忽略
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//引入自定义插件对象注册全局组件
import globalCompoents from '@/components'
import '@/style/index.scss'
let app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn,
})
import 'virtual:svg-icons-register'
console.log(globalCompoents)
//注册全局组件
app.use(globalCompoents)
app.mount('#app')
