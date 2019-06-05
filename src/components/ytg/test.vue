<template>
  <div>
    <input v-model="parentMsg">
    {{parentMsg}}+{{age}}
    <br>子组件
    <child v-bind:message="parentMsg"></child>
    <button v-on:click="childButton">传递</button>
  </div>
</template>
 
<script>
import Vue from "vue";
// 注册
Vue.component("child", {
  // 声明 props
  props: ["message"],
  // 同样也可以在 vm 实例中像 "this.message" 这样使用
  template: '<input v-model="message">'
});
// 创建根实例
var _dataModel = { age: "111" };
export default {
  name: "test",
  data() {
    return {
      age: _dataModel.age,
      parentMsg: "111"
    };
  },
  activated: function() {
    //keep-alive 组件激活时调用
    console.log("test-activated");
  },
  deactivated: function() {
    //keep-alive 组件停用时调用
    console.log("test-deactivated");
  },
    beforeDestroy: function() {
    console.log("test-beforeDestroy");
  },
  destroyed: function() {
    console.log("test-destroyed");
  },
  methods: {
    childButton: function() {
      this.$emit("childButton", this.parentMsg);
    },
    childClick: function(value) {
      alert(value);
    },
  }
};
</script>