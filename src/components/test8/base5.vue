<template>
  <div class="base5-main-div">
    <div class="base5-row-div">
      <h4>5.修饰符</h4>
      1.事件修饰符
      <a href="https://cn.vuejs.org/v2/guide/events.html" target="_blank">学习资料</a>
      <h4>
        .stop :阻止冒泡
        <br>.prevent：阻止默认事件
        <br>.capture：添加事件侦听器时使用事件捕获模式
        <br>.self：只当事件在该元素本身（比如不是子元素）触发时触发回调
        <br>.once：事件只触发一次
        <br>.passive：不阻止默认事件
      </h4>例子：
      <a href="https://www.baidu.com/" @click.prevent="add">阻止了百度打开</a>
      <br>
      <br>2.按钮修饰符，自定义（包括：按键、系统、鼠标）
      <h3>.enter/ .tab / .delete (捕获“删除”和“退格”键) / .esc / .space / .up / .down / .left / .right</h3>
      <!-- 回车修饰符 .enter-->
      <p>点击按钮或回车都可传递数据：</p>
      <input type="text" v-model="text1" @keyup.enter="add">
      <button @click="add()">传递</button>
      <input type="text" v-model="text2">
      <br>
      <br>3.自定义指令
      <a
        href="https://cn.vuejs.org/v2/guide/custom-directive.html"
        target="_blank"
      >学习资料(各种参数)</a>
      <p>增加样式：使文字变红色</p>
      <p>自定义命令：v-color="'red'"</p>
      <span>改变后效果：</span>
      <span v-color="'red'">{{ text1 }}</span>
    </div>
  </div>
</template>

<script>

/* 
//全局自定义键盘码（自定义按键修饰符）
Vue.config.keyCodes.f2 = 113;
 */

/* 
//全局自定义指令：调用时必须在指令前加 “v-” 前缀
// 注册一个全局自定义指令 `v-focus`
//bind：与样式相关，inserted：与js行为相关


Vue.directive("focus", {
  //el:被绑定了指令的那个元素
  bind:function(el){
    //每当指令绑定到元素上的时候，会立即执行这个bind函数，只执行一次   
    //在元素刚绑定指令的时候，还没有插入到DOM中，这时候调用focus没有作用
    el.focus()     
    },
  inserted: function(el) {
    //当被绑定的元素插入到 DOM 中时执行，触发一次
    el.focus();
  },
  updated:function(){
    //当vnode更新时，会执行updated，可能会多次触发
  }
}); 


Vue.directive("color", {
  bind:function(el,binding){
    //可以在bind中绑定元素,元素则有了一个内联样式
    //el.style.color = 'red' 直接写
    console.log(binding.name) 
    console.log(binding.value) 
    //通过参数传入
    el.style.color = binding.value
    },
}); 
*/


export default {
  data() {
    return {
       text1: "111",
      text2: ""
    };
  },
  methods: {
    add() {
      console.log(this.text2);
      this.text2 = this.text1 + this.text2;
    }
  },
  //自定义私有指令
  directives: {
    color: {
      bind: function(el, binding) {
        //这里使用了binding.value参数，其他的查阅相关学习资料
        el.style.color = binding.value;
      }
    }
  },
  watch: {},
  computed: {}
};
</script>


<style>
.base5-main-div {
  width: 100%;
}
.base5-row-div {
  width: 100%;
  text-align: left;
}

</style>

