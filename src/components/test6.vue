<template>
  <div class="stylus-main-div">
    <a href="https://element.eleme.cn/2.0/#/zh-CN" target="_blank">学习资料</a>
    <div class="stylus-row-div">elementUI组件库</div>

    <el-radio v-model="radio" label="1">备选项</el-radio>
    <el-radio v-model="radio" label="2">备选项</el-radio>

    <el-row :gutter="20">
      <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>

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

.stylus-title {
}

.el-row {
  margin-bottom: 20px;
&:last-child {
   margin-bottom: 0;
 }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>

<script>
export default {
  data () {
    return {
      radio: '1'
    };
  },
  name: "stylus",
  components: {},
  methods: {},
  watch: {},
  computed: {},
  mounted() {}
};
</script>
