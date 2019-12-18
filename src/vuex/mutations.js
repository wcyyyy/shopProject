import {
  RECEIVE_ADDRESS,
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
  RECEIVE_USER,
  RECEIVE_TOKEN,
  RESET_TOKEN,
  RESET_USER
} from './mutation-types'
export default {
  [RECEIVE_ADDRESS](state,address){
    state.address=address
  },
  [RECEIVE_SHOPS](state,shops){
    state.shops=shops
  },
  [RECEIVE_CATEGORYS] (state, categorys) {
    state.categorys = categorys
  },
  [RECEIVE_USER](state,{user}){
    state.user=user
  },
  [RECEIVE_TOKEN](state,{token}){
    state.token=token
  },
  [RESET_TOKEN](state){
    state.token=''
  },
  [RESET_USER](state){
    state.user=''
  }
}