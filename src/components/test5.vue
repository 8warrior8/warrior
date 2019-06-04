<template>
  <div class="stylus-main-div">
    <div class="stylus-row-div">VUEX</div>
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

  </div>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex"; //map简化写法
export default {
  data() {
    return {
      inputValue: "me",
      myCount: 10

    };
  },
  name: "stylus",
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
      'remove' //将 `this.remove()` 映射为 `this.$store.commit('remove')`
    ]),
    ...mapActions([
      'addFunc', //将 `this.addFunc()` 映射为 `this.$store.dispatch('addFunc')`
      'removeFunc' //将 `this.removeFunc()` 映射为 `this.$store.dispatch('removeFunc')`
    ])
  },
  watch: {},
  computed: {
    // 使用对象展开运算符将此对象混入到外部对象中
    ...mapState({ //辅助函数
      count: state => state.count, //map简化写法 将 `this.count` 映射为 `this.$store.state.count`
      countFunc(state){ //可以扩展到当前组件方法
        return state.count + this.myCount;
      }
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
.stylus-main-div {
  width: 100%;
}
.stylus-row-div {
  display: flex;
  line-height: 40px;
}
.stylus-left {
  width: 15%;
  font-weight: 600;
}
.stylus-left-div {
  width: 35%;
}

.stylus-right-div {
  width: 35%;
}

.stylus-right {
  width: 35%;
}
</style>

