<template>
  <div class="stylus-main-div">
    <div class="stylus-row-div">
      <h4>3.Class 与 Style 绑定</h4>1. 数组
      <h4 :class="['red', 'thin']">这是一个数组的H1</h4>2. 数组中使用三元表达式
      <h4 :class="['red',  isthin?'thin':'']">数组中使用三元表达式</h4>3. 数组中嵌套对象
      <h4 :class="['red',  {'thin': isthin}]">数组中嵌套对象</h4>4. 直接使用对象
      <h4 :class="{red:true, thin:true}">这是一个对象的H1</h4>
      <h4 :class="classobj">这是一个对象的H1</h4>5.style
      <h4 :style="{color: stylecolor, 'font-size': '10px'}">绑定对象或直接写style</h4>
      <h4 :style="[styleObj, styleObj2]">属性绑定的形式</h4>

      <br>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isthin: false,
      classobj: {
        red: true,
        thin: true
      },
      stylecolor: "red",
      styleObj: { color: "red", "font-size": "10px", "font-weight": "200" },
      styleObj2: { fontStyle: "italic" }
    };
  },
  components: {},
  methods: {},
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
.red {
  color: red;
}
.thin {
  letter-spacing: 0.5em;
}
</style>

