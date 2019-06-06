<template>
  <div class="base6-main-div">
    <div class="base6-row-div">
      <h4>6.组件</h4>
      <a href="https://cn.vuejs.org/v2/api/#props" target="_blank">学习资料：props对象高级配置，如类型检测、自定义验证和设置默认值</a>

      <p>1.父子组件传递数据与方法</p>
      <p>父组件的msg：{{msg}}</p>
      <com1 :parentmsg="msg" @func1="show"></com1>

      <p>2.通过ref获取DOM元素</p>
      <h4 ref="myh3">文本内容：通过ref获取DOM元素</h4>
      <button @click="getElement">获取DOM元素事件</button>

      <p>3.通过ref获取组件元素，可用来调用组件方法</p>
      <button @click="getMycom1Fun">调用组件方法</button>
      <com2 ref="mycom2"></com2>

      <p>3.组件使用v-model双向绑定</p>
      <h4>父组件的doubleMsg：{{doubleMsg}}</h4>
      <!-- 当v-model用在组件上时，实际渲染是下面这样
        <com3 v-bind:value="doubleMsg" v-on:input="doubleMsg = $event"></com3> 
        为了能双向绑定，这个组件内的 <input> 必须：
        1.将其 value 特性绑定到一个名叫 value 的 prop 上
      2.在其 input 事件被触发时，将新的值通过自定义的 input 事件抛出-->
      <com3 v-model="doubleMsg"></com3>
    </div>
  </div>
</template>

<script>
/* 
//在main.js中全局定义组件
Vue.component('mainComponent', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button>You clicked me {{ count }} times.</button>'
}) 
*/

export default {
  data() {
    return {
      msg: "这是父组件传递过来的数据msg",
      doubleMsg: "双向绑定的数据"
    };
  },
  methods: {
    //子组件调用的方法
    show(value) {
      this.msg += "," + value;
      console.log("调用了父组件的方法" + value);
    },
    //通过ref获取DOM元素
    getElement() {
      console.log(this.$refs);
      alert(this.$refs.myh3.innerHTML);
    },
    //父组件调用子组件方法
    getMycom1Fun() {
      this.$refs.mycom2.showMycom1("父组件调用了子组件");
    }
  },
  components: {
    //一个组件的 data 选项必须是一个函数，因此每个实例可以维护一份被返回对象的独立的拷贝,因此组件间的数据不互相影响
    //注意：每个组件必须只有一个根元素
    com1: {
      template:
        '<div><h1 @click="change">这是子组件---{{ parentmsg }}</h1><button @click="myclick">点击触发父组件的方法</button></div>',
      //父组件传递的parentmsg属性，先在props数组中定义一下，才能使用
      //props中的数据都是只读的，无法重新赋值
      props: ["parentmsg"],
      methods: {
        //点击子组件文本触发该方法，可改变传递过来的属性，但是会报警告
        change() {
          this.parentmsg = "我被改变了";
        },
        myclick() {
          //$emit触发父组件方法
          this.$emit("func1", "父组件中的数据被子组件改变了");
        }
      }
    },
    com2: {
      template: "<h1>{{ com2msg }}</h1>",
      data() {
        return {
          com2msg: "我是子组件:"
        };
      },
      methods: {
        //被父组件调用的方法
        showMycom1(value) {
          console.log(this.$refs.mycom1);
          this.com2msg += value;
        }
      }
    },
    com3: {
      template: '<h1 @click="changeValue">{{ com2msg + myValue }}</h1>',
      props: ["value"],
      data() {
        return {
          com2msg: "我是子组件:",
          //需将传递过来的value重新指定一个空间，不直接改变value，而是改变myValue，就不会发出警告
          myValue: this.value
        };
      },
      methods: {
        changeValue() {
          var value = "双向绑定的数据被改变了";
          //直接修改this.value会报警告
          //this.value+=value
          this.myValue += value;
          this.$emit("input", this.myValue); //触发 input 事件，并传入改变的值
        }
      }
    }
  }
};
</script>


<style>
.base6-main-div {
  width: 100%;
}
.base6-row-div {
  width: 100%;
  text-align: left;
}
</style>

