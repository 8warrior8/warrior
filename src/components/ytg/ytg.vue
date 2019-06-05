<template>
  <div id="ytg">
    <container>
      <template v-slot:header>
        <div class="my-link">
          <func></func>
        </div>
      </template>
      <template v-slot:default>
        <router-view/>
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
