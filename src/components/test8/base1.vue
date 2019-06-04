<template>
  <div class="stylus-main-div">
    <div class="stylus-row-div">
      <h4>1.生命周期钩子</h4>
      <p>
        什么是生命周期：从Vue实例创建、运行、到销毁期间，总是伴随着各种各样的事件，这些事件，统称为生命周期！
        <br>+ 生命周期钩子 = 生命周期函数 = 生命周期事件
        <br>+ 主要的生命周期函数分类：
        <br>- 创建期间的生命周期函数：
        <br>+ beforeCreate：实例刚在内存中被创建出来，此时，还没有初始化好 data 和 methods 属性
        <br>+ created：实例已经在内存中创建OK，此时 data 和 methods 已经创建OK，此时还没有开始 编译模板
        <br>+ beforeMount：此时已经完成了模板的编译，但是还没有挂载到页面中
        <br>+ mounted：此时，已经将编译好的模板，挂载到了页面指定的容器中显示
        <br>- 运行期间的生命周期函数：
        <br>+ beforeUpdate：状态更新之前执行此函数， 此时 data 中的状态值是最新的，但是界面上显示的 数据还是旧的，因为此时还没有开始重新渲染DOM节点
        <br>+ updated：实例更新完毕之后调用此函数，此时 data 中的状态值 和 界面上显示的数据，都已经完成了更新，界面已经被重新渲染好了！
        <br>- 销毁期间的生命周期函数：
        <br>+ beforeDestroy：实例销毁之前调用。在这一步，实例仍然完全可用。
        <br>+ destroyed：Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。
      </p>

      <h3>例子：点击按钮在beforeDestroy()中销毁</h3>
      <button @click="destoryVm">destoty vm</button>
      <p class="stylus-row-div1-p" v-bind:class="{ 'stylus-row-div1-p2': isShow }">显示隐藏的文本(每秒)</p>
      <br>
      <h3>生命周期图示</h3>
      <img src="..\img\lifecycle.png">
    </div>
       
    
  </div>
</template>

<script>
export default {
    
  data() {
    return {
      isShow: true,
    };
  },
  components: {},
  methods: {
      //销毁vm
    destoryVm() {
      // 完全销毁一个实例。清理它与其它实例的连接，解绑它的全部指令及事件监听器。
      // 触发 beforeDestroy 和 destroyed 的钩子。
      //dom元素还存在,数据不变化了
      this.$destroy();
    },
  },
  watch: {},
  computed: {},
  //生命周期方法：
  //1.初始阶段
  beforeCreate: function() {
    //el 和 data 并未初始化
    console.log("创建vue实例前:beforeCreate()");
  },
  created: function() {
    //完成了data数据的初始化 el 没有
    console.log("创建vue实例后:created()");
  },
  beforeMount: function() {
    //完成了el 和 data的初始化
    console.log("挂载到dom前:beforeMount()");
  },
  mounted() {
    //初始化显示之后立即调用(调用1次)，发送ajax请求，启动定时器等异步操作等...
    //ES6箭头函数()=> 相当于var self = this
    this.instervalid = setInterval(() => {
      this.isShow = !this.isShow;
    }, 1000);
    console.log("挂载到dom后:mounted()");
  },
  //2.更新阶段(可能会执行N次)
  beforeUpdate: function() {
    console.log("数据变化更新前:beforeUpdate()");
  },
  updated: function() {
    console.log("数据变化更新后:updated()");
  },
  //3.死亡阶段
  beforeDestroy() {
    //生命周期死亡前(调用1次),做收尾的工作，清除定时器等...
    //清除定时器
    console.log("vue实例销毁前:beforeDestroy()");
    clearInterval(this.instervalid);
  },
  destroyed: function() {
    console.log("vue实例销毁后:destroyed()");
  }
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
.stylus-row-div img {
  width: 100%;
  text-align: left;
}
.stylus-row-div1-p {
  height: 50px;
}
.stylus-row-div1-p2 {
  color: red;
}
</style>

