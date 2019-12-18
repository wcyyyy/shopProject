import {
  reqAddress,
  reqShops,
  reqCategorys,
  reqAutoLogin
} from '@/api'
import {
  RECEIVE_ADDRESS,
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
  RECEIVE_USER,
  RECEIVE_TOKEN,
  RESET_USER,
  RESET_TOKEN
} from './mutation-types'
export default {
  // 获取当前地址信息的异步action
  async getAddress ({commit, state}) {
    const {longitude, latitude} = state
    // 发送异步请求
    const result=await reqAddress(longitude,latitude)
    // 发送成功后，提交给mutation
    if(result.code===0){
      const address=result.data
      commit(RECEIVE_ADDRESS,address)
    }
  },
  // 获取商铺列表
  async getShops ({commit, state}) {
    const {longitude, latitude} = state
    // 发送异步请求
    const result=await reqShops({longitude, latitude})
    // 发送成功后，提交给mutation
    if(result.code===0){
      const shops=result.data
      commit(RECEIVE_SHOPS,shops)
    }
  },
  // 获取食品分类列表
  async getCategorys ({commit},callback) {
    // 发送异步请求
    const result=await reqCategorys()
    // 发送成功后，提交给mutation
    if(result.code===0){
      const categorys=result.data
      commit(RECEIVE_CATEGORYS,categorys)
      typeof callback === 'function' && callback()
    }
  },
  // 保存用户信息
  saveUser({commit},user){
    const token=user.token
    // 保存token到local
    localStorage.setItem('token_key', token)
    delete user.token //删除user内部的token
    commit(RECEIVE_USER,{user})
    commit(RECEIVE_TOKEN,{token})
  },

  // 异步自动登录
  async autoLogin({commit,state}){
    if(state.token&&!state.user._id){  //只有token没有用户信息的时候可以
      const result=await reqAutoLogin()
      console.log(result)
      if(result.code===0){
        const user=result.data
        console.log(user)
        commit(RECEIVE_USER,{user})
      }
    }
  },
  // 退出登录
  logout({commit}){
    localStorage.removeItem('token_key')
    commit(RESET_TOKEN)
    commit(RESET_USER)
  }
}

