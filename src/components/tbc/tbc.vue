<template>
  <div id="tbc">
    <br>
    <h3>红灯三秒亮一次，绿灯一秒亮一次，黄灯2秒亮一次；如何让三个灯不断交替重复亮灯？（用Promse实现）</h3>
    <h3>用了一下vuex自增id,递归,到1万停止</h3>
    <div class="contentlayout">
      <div
        v-for="item in textareaData"
        :value="item.id"
        :key="item.text"
        :style="{'background-color':item.color,'border-radius':'50%','width':'30px','height':'30px','font-size': '14px'}"
      >{{item.text}}</div>
    </div>
    <!-- <el-input ref="textTarContent" type="textarea" :rows="2" placeholder="请输入内容" v-model="textareaData"></el-input> -->
  </div>
</template>
<style lang="scss" rel="stylesheet/sass">
.contentlayout {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
}
</style>
<script>
export default {
  name: "tbc",
  data() {
    return {
      textareaData: [
        {
          id: 1,
          color: "white",
          text: "开始"
        }
      ]
    };
  },
  created: function() {
    this.clearZ();
  },

  methods: {
    testes6: function() {
      this.forTest();
    },
    forTest: function() {
      var a = [];
      for (let i = 0; i < 10; i++) {
        console.log(i);
      }
    },
    //let 和var 区别
    forLET: function() {
      let n = 5;
      if (true) {
        let n = 10;
      }
      console.log(n);
    },

    forVar: function() {
      var n = 5;
      if (true) {
        var n = 10;
      }
      console.log(n);
    },
    forConst: function() {
      //常量foo存储的是一个地址，指向一个对象。
      //不可变的只是这个地址，即不能把foo指向另一个地址，
      //但对象本身是可变的，所以依然可以为其添加新属性。但如果将另一个地址赋值给foo，就会报错：
      const foo = {};
      foo.prop = 123;
      console.log(foo.prop);
      //foo = {};
      //console.log(foo.prop);

      //const foo = boject.freeze({});
    },
    //块级作用域
    forKJZUYON: function() {
      {
        var a = 5;
        let b = 6;
      }
      console.log(a); //5
      this.$refs.input1.value = a;
      //console.log(b); //b is undefined
    },
    //2.暂时性死区
    //var声明的变量可以在声明之前使用，相当于默认为其声明其值为undefined了；
    //但是，let声明的变量一旦用let声明，那么在声明之前，此变量都是不可用的，术语称为“暂时性死区”。
    fortest4: function() {
      console.log(a); //undefined
      var a = 8;
      console.log("----------");
      console.log(b); //控制台报错
      let b = 9;
    },
    //对象解构
    forKtest5: function() {
      let node = {
        type: "Identifier",
        name: "foo"
      };
      let { type, name } = node;
      console.log(type); // "Identifier"
      console.log(name); // "foo
    },
    //文本模板
    forTextWay: function() {
      const first = "Adrian";
      const last = "Mejia";
      console.log(`Your name is ${first} ${last}.`);
    },
    //多行字符串
    formorestring: function() {
      const template = `<li *ngFor="let todo of todos" [ngClass]="{completed: todo.isDone}" >
  <div class="view">
    <input class="toggle" type="checkbox" [checked]="todo.isDone">
    <label></label>
    <button class="destroy"></button>
  </div>
  <input class="edit" value="">
</li>`;
      console.log(template);
    },
    //获取数组元素
    forGetARRAY: function() {
      const array = [1, 2, 3, 4];
      const [first, , third] = array;
      console.log(first, third); // 1 3
    },
    //参数传递匹配析构
    forWAYXIGOU: function() {
      const user = { firstName: "Adrian", lastName: "Mejia" };
      function getFullName({ firstName, lastName }) {
        return `${firstName} ${lastName}`;
      }
      console.log(getFullName(user)); // Adrian Mejia
    },
    //Promise 例子
    forPromiseAjax: function() {
      var promise1 = new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve("foo");
        }, 300);
      });

      promise1.then(function(value) {
        console.log(value);
        // expected output: "foo"
      });

      console.log(promise1);
      // expected output: [object Promise]
    },
    // 红灯三秒亮一次，绿灯一秒亮一次，黄灯2秒亮一次；如何让三个灯不断交替重复亮灯？（用Promse实现）
    forPromiseGen: function() {
      var self = this;
      var tic = function(timmer, str) {
        return new Promise(function(resolve, reject) {
          let textTemp = "红灯";
          if (str.toString() === "red") {
            textTemp = "红灯";
          } else if (str.toString() === "green") {
            textTemp = "绿灯";
          } else if (str.toString() === "yellow") {
            textTemp = "黄灯";
          }
          setTimeout(() => {
            if (self.$store.state.count > 10000) {
              self.clearZ();
            } else {
              self.add10();
              let temp = {
                id: self.$store.state.count,
                color: str,
                text: textTemp
              };
              self.textareaData.push(temp);
            }

            resolve(1);
          }, timmer);
        });
      };

      function* gen() {
        yield tic(3000, "red");
        yield tic(1000, "green");
        yield tic(2000, "yellow");
      }

      var iterator = gen();
      //递归
      var step = function(gen, iterator) {
        var s = iterator.next();
        if (s.done) {
          self.add10();
          let temp = {
            id: self.$store.state.count,
            color: "black",
            text: "结束"
          };
          self.textareaData.push(temp);
          console.log("原始周期");
          step(gen, gen());
        } else {
          s.value.then(function() {
            //超过1000次停止
            if (self.$store.state.count >= 10000) {
            } else {
              step(gen, iterator);
            }
          });
        }
      };

      step(gen, iterator);
    },
    add10: function() {
      //this.$store.commit('add');       这俩个都生效，一个走actions，一个走mutations
      //this.$store.commit('add', 10);
      this.$store.dispatch("addFunc", 1);
    },
    //清0计划
    clearZ: function() {
      //this.$store.commit('add');       这俩个都生效，一个走actions，一个走mutations
      //this.$store.commit('add', 10);
      this.$store.dispatch("clearFunc");
    }
  },

  watch: {},
  computed: {},
  mounted: function() {
    //console.group("");
    //for 应用
    //this.forTest();
    //this.forLET();
    //this.forVar();
    //this.forConst();
    //块级作用域
    //this.forKJZUYON();
    //对象解构
    //this.forKtest5();
    //文本模板
    //this.forTextWay();
    //多行字符创
    //this.formorestring();
    //获取数据元素
    //this.forGetARRAY();
    //参数传递析构
    //this.forWAYXIGOU();
    //Promise 改写Ajax
    //this.forPromiseAjax();
    //Promise应用
    this.forPromiseGen();
  }
};
</script>

<style>
</style>
