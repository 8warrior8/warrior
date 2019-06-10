<template>
  <div>
    <input v-model="msg">
    <p>child2-attrs:{{$attrs}}</p><br>
  </div>
</template>
<script>
import Bus from "./bus.js";
export default {
  name: "child1",
  data() {
    return {
      msg: "child2组件"
    };
  },
  props: ["qianmi"],
  mounted: function() {
    var self = this;
    // 用$on事件来接收参数
    Bus.$on("childtoChild", function(data) {
      self.msg = data;
    });
  }
};
</script>