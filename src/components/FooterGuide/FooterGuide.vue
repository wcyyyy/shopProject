<template>
  <footer class="footer_guide" v-show="$route.meta.requiresAuth">
    <router-link to="/msite" class="guide_item">
      <span>
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>外卖</span>
    </router-link>
    <router-link to="/search" class="guide_item">
      <span>
        <i class="iconfont icon-search"></i>
      </span>
      <span>搜索</span>
    </router-link>
    <router-link to="order" class="guide_item">
      <span>
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </router-link>
    <router-link to="/profile" class="guide_item">
      <span>
        <i class="iconfont icon-geren"></i>
      </span>
      <span>我的</span>
    </router-link>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .footer_guide
    top-border-1px(#cccccc)
    z-index 100
    display flex
    position fixed
    left 0
    bottom 0
    width 100%
    height 50px
    background-color #fff
    .guide_item
      display flex
      flex-direction column
      text-align center
      width 25%
      &.router-link-exact-active
        color $green
      span
        margin-top 4px
        font-size 12px
        .iconfont
          font-size 22px
</style>