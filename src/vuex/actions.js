import {
  reqAddress,
  reqShops,
  reqCategorys,
  reqAutoLogin,
  reqGoods,
  reqRatings,
  reqInfo
} from '@/api'
import {
  RECEIVE_ADDRESS,
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
  RECEIVE_USER,
  RECEIVE_TOKEN,
  RESET_USER,
  RESET_TOKEN,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
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
      if(result.code===0){
        const user=result.data
        commit(RECEIVE_USER,{user})
      }
    }
  },
  // 退出登录
  logout({commit}){
    localStorage.removeItem('token_key')
    commit(RESET_TOKEN)
    commit(RESET_USER)
  },
  //异步获取goods
  async getGoods({commit},callback){
    const result=await reqGoods()
    if(result.code===0){
      const goods=result.data
      commit(RECEIVE_GOODS,goods)
    }
    typeof callback === 'function' && callback()
  },
  // 异步获取ratings
  async getRatings({commit},callback){
    const result=await reqRatings()
    if(result.code===0){
      const ratings=result.data
      commit(RECEIVE_RATINGS,ratings)
    }
    typeof callback === 'function' && callback()
  },
  // 异步获取info
  async getInfo({commit},callback){
    const result=await reqInfo()
    if(result.code===0){
      const info=result.data
      commit(RECEIVE_INFO,{info})
    }
    typeof callback === 'function' && callback()
  },
}

