<template>
  <div id="ytg">
    <container>
      <template v-slot:header>
        <span>头部内容</span>
      </template>
      <template v-slot:default>
        <func v-on:childButton1="childClick1"></func>
      </template>
      <template v-slot:footer>
        <span>低部内容</span>
      </template>
    </container>
  </div>
</template>

<script>
import container from "./container";
import func from "./func";
export default {
  name: "ytg",
  components: {
    container: container,
    func: func
  },
  errorCaptured: function(error, vm, info) {
    //当捕获一个来自子孙组件的错误时被调用。
    //此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。
    //此钩子可以返回 false 以阻止该错误继续向上传播
    console.log("ytg.errorCaptured.error=" + error);
    console.log(vm, "vm");
    console.log("errorCaptured.info=" + info);
  },
  methods: {
    childClick1: function(value) {
      alert("child1传递事件");
    }
  }
};
</script>

<style>
</style>
