<template>
  <div class="base4-main-div">
    <div class="base4-row-div">
      <h4>4.过滤器</h4>
      <p>过滤器可以用在两个地方：双花括号插值和 v-bind 表达式，可同时使用多个</p>
      <p>文本：绿色的衣服，绿色的帽子 </p>
      1.插值表达式
      <p>使用的过滤器：{{msg1}}</p>
      <p>结果：{{ msg | msgFormat('白色+1','123') | test}}</p>
      2.v-bind
      <p v-bind:title="msg | msgFormat('白色+1','123') ">将鼠标放到文字上</p>
    </div>
  </div>
</template>

<script>

/* 
//全局过滤器
Vue.filter("msgFormat", function(msg, arg, arg2) {
  return msg.replace("绿色", arg + arg2);
});
Vue.filter("test", function() {
  return msg + "======";
}); 
*/


export default {
  data() {
    return {
       msg: "绿色的衣服，绿色的帽子",
        msg1: "{{ msg | msgFormat('白色+1','123') | test}}",
    };
  },
  //私有过滤器,若私有过滤器与全局过滤器名称一样，则就近原则使用私有过滤器
  filters: {
    msgFormat: function(msg, arg, arg2) {
      return msg.replace(/绿色/g, arg + arg2);
    },
    test: function(msg, arg, arg2) {
      return msg.replace(/衣服/g, ' "衣服"');
    },
  },
  components: {},
  methods: {},
  watch: {},
  computed: {}
};
</script>


<style>
.base4-main-div {
  width: 100%;
}
.base4-row-div {
  width: 100%;
  text-align: left;
}
</style>

