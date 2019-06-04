<template>
  <div class="stylus-main-div">
    <a href="https://cn.vuejs.org/v2/guide/" target="_blank">学习资料</a>
    <br>
    <br>
    <br>

    <button @click="change('base1')">生命周期钩子</button>
    <button @click="change('base2')">监视和计算属性</button>
    <button @click="change('base3')">Class 与 Style 绑定</button>
    <button @click="change('base4')">过滤器</button>
    <button @click="change('base5')">修饰符</button>
    <button @click="change('base6')">组件</button>

    <!-- 生命周期钩子 -->
    <div class="stylus-row-div" v-show="base1">
      <base-1></base-1>
    </div>

    <!-- 监视和计算属性 -->
    <div class="stylus-row-div" v-show="base2">
      <base-2></base-2>
    </div>

    <!-- Class 与 Style 绑定 -->
    <div class="stylus-row-div" v-show="base3">
      <base-3></base-3>
    </div>

    <!-- 过滤器 -->
    <div class="stylus-row-div" v-show="base4">
      <base-4></base-4>
    </div>

    <!-- 修饰符 -->
    <div class="stylus-row-div" v-show="base5">
      <base-5></base-5>
    </div>

    <!-- 组件 -->
    <div class="stylus-row-div" v-show="base6">
      <base-6></base-6>
    </div>
  </div>
</template>

<script>

import base1 from "./base1";
import base2 from "./base2";
import base3 from "./base3";
import base4 from "./base4";
import base5 from "./base5";
import base6 from "./base6";

export default {
  data() {
    return {
      base1: true,
      base2: false,
      base3: false,
      base4: false,
      base5: false,
      base6: false
    };
  },
  components: {
    base1,
    base2,
    base3,
    base4,
    base5,
    base6
  },
  methods: {
    change(data) {
      this.base1 = false;
      this.base2 = false;
      this.base3 = false;
      this.base4 = false;
      this.base5 = false;
      this.base6 = false;
      if (data === "base1") {
        this.base1 = true;
      } else if (data === "base2") {
        this.base2 = true;
      } else if (data === "base3") {
        this.base3 = true;
      } else if (data === "base4") {
        this.base4 = true;
      } else if (data === "base5") {
        this.base5 = true;
      } else if (data === "base6") {
        this.base6 = true;
      }
    }
  },
  filters: {},
  watch: {},
  computed: {}
};
</script>

<style>
.stylus-main-div {
  width: 100%;
}

.stylus-row-div {
  width: 100%;
  text-align: left;
}
</style>


