<template>
  <div id="ytg">
    <container>
      <template v-slot:header>
          <span>头部内容</span>
      </template>
      <template v-slot:default>
          <func></func>
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
  }
};
</script>

<style>
</style>
