<template>
  <div>
    {{header}}
    <input v-model="question">
    <button v-on:click="childButton1">传递父组件</button>
    <button v-on:click="childButton2">传递给child2</button>
    <el-button  type="primary"  @click="dialogVisible = true">模态</el-button>
    {{title}}
    <p>child1-attrs:{{$attrs}}</p>
    <br>
    <el-dialog
      top="10px"
      width="500px"
      :visible.sync="dialogVisible"
      v-on:closed="dialogclosed"
      :before-close="handleClose"
    >
      <div slot="title" v-bind:style="{ textAlign: textAlign}">echarts组件</div>
      <div class="modalclass">
        <linechart></linechart>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import Bus from "./bus.js";
import linechart from "./line";
export default {
  name: "child1",
  data() {
    return {
      textAlign: "left",
      dialogVisible: false,
      header: "child1组件"
    };
  },
  inheritAttrs: false,
  props: ["question", "title"],
  components: {
    linechart: linechart
  },
  methods: {
    childButton1: function() {
      this.$emit("childButton1", this.question);
    },
    childButton2: function() {
      Bus.$emit("childtoChild", this.question);
    },
    handleClose: function(done) {
      this.$confirm("确认关闭？")
        .then(() => {
          done();
        })
        .catch(() => {});
    },
    dialogclosed: function() {}
  }
};
</script>
<style>
.modalclass {
  width: 500px;
  height: 400px;
}

.main .el-dialog__body {
  padding: 0;
}
</style>
