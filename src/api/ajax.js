/* 
对axio进行2次封装一个能发ajax请求的函数
1. 统一处理请求异常
2. 异步请求成功的数据不是response, 而是response.data
3. 对请求体参数进行urlencode处理, 而不使用默认的json方式(后台接口不支持)
4. 配置请求超时的时间
5. 通过请求头携带token数据
*/
import axios from 'axios'
import qs from 'qs'
import { Indicator, Toast, MessageBox } from 'mint-ui'
import store from '@/vuex/store'
import router from '@/router'


const instance = axios.create({
  // baseURL: 'http://localhost:4000', // 出跨域请求问题
  baseURL: '/api', // 让代理服务器转发请求4000
  timeout: 20000 // 4. 配置请求超时的时间
})

// 添加请求拦截器
instance.interceptors.request.use((config) => {
  // console.log('req interceptor')
  // 3. 对请求体参数进行urlencode处理, 而不使用默认的json方式(后台接口不支持)
  const data = config.data
  if (data instanceof Object) {
    config.data = qs.stringify(data)
  }

  // 5. 通过请求头携带token数据
  const token = store.state.token
  if (token) {
    config.headers['Authorization'] = token
  }else{
     // 如果当前接口需要token校验, 但没有token, 不发请求, 进入错误流程
     // 如果没有token, 但又需要token校验, 不能发请求
     const needCheck=config.headers.needCheck
     if(needCheck){
       throw new Error('没有登录，不能请求')
     }


  }

  return config
})

// 添加响应拦截器
instance.interceptors.response.use(
  response => {
    console.log('res interceptor')
    
    // return response
    // 2. 异步请求成功的数据不是response, 而是response.data
    return response.data
  },
  error => {
    const response = error.response //没有发请求也就没有错误的响应
    if(!response){//如果不在登录页面跳转到登录页面
      const path=router.currentRoute.path
      if(path!=='/login'){
        router.replace('/login')
        Toast(error.message)
      }
    }else{//发了请求
      // 状态码如果是401，且不再登录页面，退出登录
      if(error.response.status===401){
        const path=router.currentRouter.path
        if(path!=='/login')
        store.dispatch('logout')
        router.replace('/login')
        Toast(error.response.data.message||'登录失效，请重新登录')
      }else if(error.response.status===404){
        MessageBox('请求资源不存在')
      }else{

        // return Promise.reject(error)
        // 1. 统一处理请求异常
        MessageBox('请求出错: ' + error.message)
      }
    }
   
    return new Promise(() => {}) // 返回一个pending状态的promise => 中断promie链
  }
)


export default instance

