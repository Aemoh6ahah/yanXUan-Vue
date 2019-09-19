<template>
  <div >
    <router-view></router-view>
    <NavBar v-show="$route.meta.isShowFoot"/>
  </div>
</template>

<script>
  import NavBar from './components/FooterNav'
  export default {
    name: "App",
    components:{
      NavBar
    },
    mounted() {
      console.log(this)
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">

</style>