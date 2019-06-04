<template>
  <div class="order-main-div">
    <!-- <a href="https://www.jianshu.com/p/c4a87e1b4ef7" target="_blank">学习资料</a> -->
    <div class="order-row-div">
      <div class="order-left">指令</div>
      <div class="order-left-div">操作</div>
      <div class="order-right-div">呈现</div>
      <div class="order-right">数据源</div>
    </div>

    <div class="order-row-div">
      <!-- v-text主要用来更新textContent，可以等同于JS的text属性。 -->
      <div class="order-left">v-text</div>
      <div class="order-left-div">
        <input type="text" v-model="vText" placeholder="默认值">
      </div>
      <div class="order-right-div">
        <span>{{vText}}</span>
      </div>
      <div class="order-right">[ {{vText}} ]</div>
    </div>

    <div class="order-row-div">
      <!-- 双大括号的方式会将数据解释为纯文本，而非HTML。为了输出真正的HTML，可以用v-html指令。它等同于JS的innerHtml属性。 -->
      <div class="order-left">v-html</div>
      <div class="order-left-div">
        <input type="text" v-model="vHtml" placeholder="默认值">
      </div>
      <div class="order-right-div">
        <div v-html="vHtml"></div>
      </div>
      <div class="order-right">[ {{vHtml}} ]</div>
    </div>

    <div class="order-row-div">
      <!-- v-pre主要用来跳过这个元素和它的子元素编译过程。可以用来显示原始的Mustache标签。跳过大量没有指令的节点加快编译。 -->
      <div class="order-left">v-pre</div>
      <div class="order-left-div">
        <input type="text" v-model="vPre" placeholder="默认值">
      </div>
      <div class="order-right-div">
        <span v-pre>{{vPre}}</span> //这条语句不进行编译
        <span>{{vPre}}</span>
      </div>
      <div class="order-right">[ {{vPre}} ]</div>
    </div>

    <div class="order-row-div" v-cloak>
      <!-- 这个指令是用来保持在元素上直到关联实例结束时进行编译。 -->
      <div class="order-left">v-cloak</div>
      <div class="order-left-div">
        <input type="text" v-model="vCloak" placeholder="默认值">
      </div>
      <div class="order-right-div">
        <span>{{vCloak}}</span>
      </div>
      <div class="order-right">[ {{vCloak}} ]</div>
    </div>

    <div class="order-row-div">
      <!-- v-once关联的实例，只会渲染一次。之后的重新渲染，实例极其所有的子节点将被视为静态内容跳过，这可以用于优化更新性能。 -->
      <div class="order-left">v-once</div>
      <div class="order-left-div">
        <input type="text" v-model="vOnce" placeholder="默认值">
      </div>
      <div class="order-right-div">
        <span v-once>{{vOnce}}</span>
      </div>
      <div class="order-right">[ {{vOnce}} ]</div>
    </div>

    <div class="order-row-div">
      <!-- v-if可以实现条件渲染，Vue会根据表达式的值的真假条件来渲染元素。
      v-else是搭配v-if使用的，它必须紧跟在v-if或者v-else-if后面，否则不起作用。
      v-else-if充当v-if的else-if块，可以链式的使用多次。可以更加方便的实现switch语句。-->
      <div class="order-left">v-if | v-else | v-else-if</div>
      <div class="order-left-div">
        <input type="radio" v-model="vif" value="1"> 1
        <input type="radio" v-model="vif" value="2"> 2
        <input type="radio" v-model="vif" value="3"> 3
        <input type="radio" v-model="vif" value="100"> 100
      </div>
      <div class="order-right-div">
        <div v-if="vif === '1'">A</div>
        <div v-else-if="vif === '2'">B</div>
        <div v-else-if="vif === '3'">C</div>
        <div v-else>other</div>
      </div>
      <div class="order-right">[ {{vif}} ]</div>
    </div>

    <div class="order-row-div">
      <!-- 也是用于根据条件展示元素。和v-if不同的是，如果v-if的值是false，则这个元素被销毁，不在dom中。
      但是v-show的元素会始终被渲染并保存在dom中，它只是简单的切换css的dispaly属性。-->
      <div class="order-left">v-show</div>
      <div class="order-left-div">
        <input type="radio" v-model="vShow" value="true"> true
        <input type="radio" v-model="vShow" value="false"> false
      </div>
      <div class="order-right-div">
        <div v-show="vShow === 'true'">vShow为true显示</div>
      </div>
      <div class="order-right">[ {{vShow}} ]</div>
    </div>

    <div class="order-row-div">
      <div class="order-left">v-for 略</div>
    </div>
    <div class="order-row-div">
      <!-- v-bind 在绑定的时候，可拼接绑定内容：:title="vBind + '123'" 
      可以用方括号括起来的 JavaScript 表达式作为一个指令的参数 v-bind:[attributeName]-->
      <div class="order-left">v-bind 略</div>
      <div class="order-left-div">
        <span>{{vBind}}</span>
      </div>
      <div class="order-right-div">
        <input type="button" :[attributeName]="vBind + '123456'">
      </div>
      <div class="order-right">[ {{vBind + '+' + ' "123456" '}} ]</div>
    </div>
    <div class="order-row-div">
      <div class="order-left">v-model 略</div>
      <div class="order-right-div">
        <span>（v-model中包含.lazy/.number/.trim修饰符）</span>
      </div>
    </div>
    <div class="order-row-div">
      <div class="order-left">v-on 略</div>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vText: "<h3>以文本进行渲染</h3>",
      vHtml: "<h3>以HTML进行渲染</h3>",
      vPre: "加v-pre不编译",
      vCloak: "我会闪烁",
      vOnce: "只会渲染一次",
      vBind: "我可以进行拼接",
      attributeName: "value",
      vif: 1,
      vShow: "true"
    };
  },
  name: "order",
  components: {},
  methods: {},
  watch: {},
  computed: {},
  mounted() {}
};
</script>

<style>
.order-main-div {
  width: 100%;
}
.order-row-div {
  display: flex;
  line-height: 40px;
}
.order-left {
  width: 15%;
  font-weight: 600;
}
.order-left-div {
  width: 35%;
}

.order-right-div {
  width: 35%;
}

.order-right {
  width: 35%;
}
</style>

