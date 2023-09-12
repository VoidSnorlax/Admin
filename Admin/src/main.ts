import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore 忽略
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
let app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn,
})
import 'virtual:svg-icons-register'
app.mount('#app')
