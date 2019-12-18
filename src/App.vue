<template>
  <div>
    <router-view></router-view>
    <FooterGuide></FooterGuide> 
  </div>
</template>

<script>
  import FooterGuide from '@/components/FooterGuide/FooterGuide'
  export default {
    async mounted () {
      // 通知action异步获取address并保存到state
      this.$store.dispatch('getAddress')
      this.$store.dispatch('autoLogin')
    },
    components:{
      FooterGuide
    },
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  
</style>