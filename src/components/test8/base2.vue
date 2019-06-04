<template>
  <div class="base2-main-div">
    <div class="base2-row-div">
      <h4>2.监视和计算属性</h4>
      <p>
        1. `computed`属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。主要当作属性来使用；
        <br>2. `methods`方法表示一个具体的操作，主要书写业务逻辑；
        <br>3. `watch`一个对象，键是需要观察的表达式，值是对应回调函数。主要用来监听某些特定数据的变化，从而进行某些具体的业务逻辑操作；可以看作是`computed`和`methods`的结合体；
      </p>
      <br>1.使用键盘事件
      <input type="text" v-model="firstname" @keyup="getFullname"> +
      <input type="text" v-model="lastname" @keyup="getFullname"> =
      <input type="text" v-model="fullname" @keyup="getFullname">
      <br>
      <br>
      <br>2.监视
      <input type="text" v-model="firstname2"> +
      <input type="text" v-model="lastname2"> =
      <input type="text" v-model="fullname2">
      <br>
      <br>
      <br>3.计算属性
      <input type="text" v-model="firstname3"> +
      <input type="text" v-model="lastname3"> =
      <input type="text" v-model="fullname3">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      fullname: "",
      firstname2: "",
      lastname2: "",
      fullname2: "",
      firstname3: "",
      lastname3: ""
    };
  },
  components: {},
  methods: {
    //使用方法完成计算属性相同功能
    getFullname() {
      this.fullname = this.firstname + "-" + this.lastname;
    }
  },
  //监视
  watch: {
    //新值：newVal 旧值：oldVal
    firstname2: function(newVal, oldVal) {
      this.fullname2 = this.firstname2 + "-" + this.lastname2;
    },
    lastname2: function(newVal, oldVal) {
      this.fullname2 = this.firstname2 + "-" + newVal;
    }
  },
  //计算属性
  computed: {
    //只要这个function内部，改变任意一个data中的数据，就会重新计算这个计算属性
    fullname3: function() {
      return this.firstname3 + "-" + this.lastname3;
    }
  }
};
</script>


<style>
.base2-main-div {
  width: 100%;
}
.base2-row-div {
  width: 100%;
  text-align: left;
}
</style>

