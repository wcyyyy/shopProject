import {
  reqAddress,
  reqShops,
  reqCategorys
} from '@/api'
import {
  RECEIVE_ADDRESS,
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS
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
  }
}

