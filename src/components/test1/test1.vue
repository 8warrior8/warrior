<template>
  <div>
    <h1>子路由Demo</h1>
    <div>
      <ul class="nav nav-tabs">
        <router-link to="/test1/sub1" exact-active-class="link-active" tag="li">sub1</router-link>
        <router-link to="/test1/sub2" exact-active-class="link-active" tag="li">sub2</router-link>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
</style>


