<template>
  <div id="app">
    <h2>全局统计：{{this.$store.state.count}}</h2>
    <div class="my-link" >
      <router-link to="/" exact-active-class="link-active" tag="h3">首页</router-link>
      <router-link to="/test1" exact-active-class="link-active" tag="h3">vue路由</router-link>
      <router-link to="/test2" exact-active-class="link-active" tag="h3">vue控件</router-link>
      <router-link to="/test3" exact-active-class="link-active" tag="h3">vue指令</router-link>
      <router-link to="/test4" exact-active-class="link-active" tag="h3">stylus|css</router-link>
      <router-link to="/test5" exact-active-class="link-active" tag="h3">vuex</router-link>
      <router-link to="/test6" exact-active-class="link-active" tag="h3">Element</router-link>
      <router-link to="/test7" exact-active-class="link-active" tag="h3">自定义组件(含7种通讯)</router-link>
      <router-link to="/test8" exact-active-class="link-active" tag="h3">vue基础</router-link>
      <router-link to="/ytg" exact-active-class="link-active" tag="h3">script及组件传值</router-link>
    </div>
    <transition name="slide-right">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="stylus" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.my-link{
  display: flex;
}
.my-link h3{
  cursor: pointer;
  border-radius: 5px;
  padding: 2px 20px;
}
.my-link h3:hover{
  color: red;
}
.link-active{
  color: yellow;
  background: #2c3e50;
}
</style>
