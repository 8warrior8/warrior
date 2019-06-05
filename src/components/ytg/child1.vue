<template>
  <div>
    {{header}}
    <input v-model="question">
    <button v-on:click="childButton1">传递父组件</button>
    <button v-on:click="childButton2">传递给child2</button>
    {{title}}
    <p>child1-attrs:{{$attrs}}</p><br>
  </div>
</template>
<script>
import Bus from "./bus.js";
export default {
  name: "child1",
  data() {
    return {
      header: "child1组件"
    };
  },
  inheritAttrs: false,
  props: ["question", "title"],
  methods: {
    childButton1: function() {
      this.$emit("childButton1", this.question);
    },
    childButton2: function() {
      Bus.$emit("childtoChild", this.question);
    }
  }
};
</script>