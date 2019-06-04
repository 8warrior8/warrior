<template>
  <div class="vuex-main-div">
    <h2>什么是vuex？</h2>
    官方的解释是：Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
    <h3>什么是状态管理模式？</h3>
    把组件的共享状态抽取出来，以一个全局单例模式管理。在这种模式下，我们的组件树构成了一个巨大的“视图”，不管在树的哪个位置，任何组件都能获取状态或者触发行为！这就是状态管理模式。
    <h2>为什么用vuex？</h2>
    1、多层嵌套的组件、兄弟组件间的状态会更好管理维护。<br>
    2、缓存一些当前要使用请求远程或本地的数据集（刷新后会自己销毁）。<br>
    3、有了第二条，就可以减少向服务器的请求，节省资源。如果你的用户足够多，那么每多出一个请求，对公司来说，都是一大笔钱。<br>
    4、对开发者来说，如果你的项目足够复杂，团队的规模也不仅是一个人，数据集中处理更利于程序的稳定和维护。<br>
    <h2>Vuex有哪几种属性？</h2>
    有五种，分别是 State、 Getter、Mutation 、Action、 Module<br>
    State: state就是Vuex中的公共的状态, 将state看作是所有组件的data, 用于保存所有组件的公共数据。<br>
    Getter: 通俗的理解可以认为是getter里的函数就是vuex里的计算属性<br>
    Mutation: 将mutaions理解为store中的methods<br>
    Action: 提交的是 mutation，而不是直接变更状态!!!Action 可以包含任意异步操作！！！mutations中绝对不允许出现异步<br>
    Module: 将store分割成模块（module）<br>
    <h2>怎么用vuex？</h2>
看下面实例
    <br/>
    <br/>
    <h3>全局的state：{{this.$store.state.count}}</h3>
    <h3>全局的mapState count：{{count}}</h3>
    <h3>全局的mapState countFunc：{{countFunc}}</h3>
    <br/>

    <h3>全局的getter：{{this.$store.getters.getStoreStateCount}}</h3>
    <h3>全局的mapGetters getStoreStateCount：{{getStoreStateCount}}</h3>
    <h3>全局的mapGetters getTrueObjList：{{getTrueObjList}}</h3>
    <br/>

    <button @click="add_def">加一</button>
    <button @click="add10">加十</button>
    <button @click="remove_def">减一</button>
    <button @click="remove10">减十</button>
    <br/>
    <button @click="add(1)">加一</button>
    <button @click="addFunc(10)">加十</button>
    <button @click="remove(1)">减一</button>
    <button @click="removeFunc(10)">减十</button>
    <br/>
    <h3>全局的m1 state：{{this.$store.state.m1.num}}</h3>
    <h3>全局的m2 state：{{this.$store.state.m2.num}}</h3>
    <h3>全局的m1 state version：{{this.$store.state.m1.version}}</h3>
    <h3>全局的m2 state version：{{this.$store.state.m2.version}}</h3>
    <h3>全局的m1 ...mapState num ：{{num1}}</h3>
    
    <br/>
    <button @click="changedM1(1)">m1 num 改变</button>
    <button @click="changedM2(10)">m2 version 改变</button>
    <button @click="setNum1(999)">m1 num 改变</button>
    <button @click="setNumFunc2(200)">m2 version 改变</button>

  </div>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex"; //map简化写法
export default {
  data() {
    return {
      inputValue: "me",
      myCount: 10,
      index:1
    };
  },
  name: "vuex",
  components: {},
  methods: {
    add_def: function() {
      //this.$store.commit('add');       这俩个都生效，一个走actions，一个走mutations
      this.$store.dispatch("addFunc");
    },
    add10: function() {
      //this.$store.commit('add');       这俩个都生效，一个走actions，一个走mutations
      //this.$store.commit('add', 10);
      this.$store.dispatch("addFunc", 10);
    },
    remove_def: function() {
      //this.$store.commit('remove');
      this.$store.dispatch("removeFunc");
    },
    remove10: function() {
      //this.$store.commit('remove');
      this.$store.dispatch("removeFunc", 10);
    },
    ...mapMutations([
      'add', //将 `this.add()` 映射为 `this.$store.commit('add')`
      'remove', //将 `this.remove()` 映射为 `this.$store.commit('remove')`
      'setNum1'
    ]),
    ...mapActions([
      'addFunc', //将 `this.addFunc()` 映射为 `this.$store.dispatch('addFunc')`
      'removeFunc', //将 `this.removeFunc()` 映射为 `this.$store.dispatch('removeFunc')`
      'setNumFunc2'
    ]),
    changedM1: function(n) {
      this.$store.commit('setNum1', n);      // 这俩个都生效，一个走actions，一个走mutations
      //this.$store.m1.dispatch("setNum");
    },
    changedM2: function(n) {
      //this.$store.commit('add');       这俩个都生效，一个走actions，一个走mutations
      this.$store.dispatch("setNumFunc2", n);
    }
  },
  watch: {},
  computed: {
    // 使用对象展开运算符将此对象混入到外部对象中
    ...mapState({ //辅助函数
      count: state => state.count, //map简化写法 将 `this.count` 映射为 `this.$store.state.count`
      countFunc(state){ //可以扩展到当前组件方法
        return state.count + this.myCount;
      },
      num1: state => state.m1.num
    }),
    ...mapGetters([
      'getStoreStateCount', //将 `this.getStoreStateCount()` 映射为 `this.$store.getters.getStoreStateCount`
      'getTrueObjList' //将 `this.getStoreStateCount()` 映射为 `this.$store.getters.getTrueObjList`
    ])
  },
  mounted() {}
};
</script>


<style>
.vuex-main-div {
  width: 100%;
  margin-bottom: 50px;
}
.vuex-row-div {
  display: flex;
  line-height: 40px;
}
.vuex-left {
  width: 15%;
  font-weight: 600;
}
.vuex-left-div {
  width: 35%;
}

.vuex-right-div {
  width: 35%;
}

.vuex-right {
  width: 35%;
}
</style>

