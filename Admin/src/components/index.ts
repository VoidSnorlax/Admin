import SvgIcon from '@/components/SvgIcon/index.vue'
//将引入的组件添加到数组中
const allComponents: any = { SvgIcon }
export default {
  install(app: { component: (arg0: any, arg1: any) => void }) {
    console.log('11')
    //通过Object.keys()方法取出对象的值循环注册组件
    Object.keys(allComponents).forEach((item: any) => {
      app.component(item, allComponents[item])
    })
  },
}
