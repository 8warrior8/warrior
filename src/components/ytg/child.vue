<template>
  <div>
    <p>child-attrs:{{$attrs}}</p><br>
    {{title}}
    <input v-model="title">
    <input v-model="message">
    <button v-on:click="childButton">传递</button>
    <br>child1组件
    <br>
    <child1 v-bind:title="title" v-bind="$attrs" v-on="$listeners"></child1>
    <br>child2组件
    <br>
    <child2></child2>
  </div>
</template>
<script>
import child1 from "./child1";
import child2 from "./child2";
export default {
  name: "child",
  render: function(createElement) {
    return createElement(
      "div",
      [
        createElement("div", {
          // DOM 属性
          domProps: {
            innerHTML: this.title
          }
        }),
        createElement("input", {
          style: {
            color: "red",
            fontSize: "14px"
          },
          // 正常的 HTML 特性
          attrs: {
            id: "foo"
          },
          // DOM 属性
          domProps: {
            value: this.message
          }
        })
      ],
      {
        props: ["message"],
        data() {
          return {
            title: "父组件传递的message="
          };
        },
        methods: {},
        mounted: {}
      }
    );
  },
  data() {
    return {
      title: "父组件child传递的message="
    };
  },
  //props 可以是数组或对象，用于接收来自父组件的数据
  //props: ["message"],
  /* props: {
    message: String //这里指定了字符串类型，如果类型不一致会警告的哦
  }, */
  props: {
    message: {
      type: String,
      default: "defaultValue"
    }
  },
  components: {
    child1: child1,
    child2: child2
  },
  mounted: function() {
    //this.initData();
  },
  activated: function() {
    //keep-alive 组件激活时调用
    console.log("child-activated");
  },
  deactivated: function() {
    //keep-alive 组件停用时调用
    console.log("child-deactivated");
  },
  beforeDestroy: function() {
    console.log("child-beforeDestroy");
  },
  destroyed: function() {
    console.log("child-destroyed");
  },
  methods: {
    initData: function() {
      this.$parent.msg = "子组件赋值";
    },
    childButton: function() {
      this.$emit("childButton", this.message);
    }
  }
};
</script>