import {
  RECEIVE_ADDRESS,
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
  RECEIVE_USER,
  RECEIVE_TOKEN,
  RESET_TOKEN,
  RESET_USER,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  ADD_FOOD_COUNT,
  REDUCE_FOOD_COUNT
} from './mutation-types'
import Vue from 'vue'
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
  },
  [RECEIVE_GOODS](state,goods){
    state.goods=goods
  },
  [RECEIVE_RATINGS](state,ratings){
    state.ratings=ratings
  },
  [RECEIVE_INFO](state,{info}){
    state.info=info
  },
  [ADD_FOOD_COUNT](state,{food}){
    if(food.count){
      food.count++
    }else{
      Vue.set(food,'count',1)
    }
  },
  [REDUCE_FOOD_COUNT](state,{food}){
    if(food.count>0){
      food.count--
    }
  },
}