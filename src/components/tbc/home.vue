
<style lang="scss" rel="stylesheet/sass">
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

<template>
  <div id="home">
    <el-popover
      ref="popover1"
      placement="top-start"
      title="标题"
      width="200"
      trigger="hover"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    ></el-popover>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple">
          <el-button>默认按钮</el-button>
          <el-button type="primary" v-on:click="addUserInfo">mothod添加</el-button>
          <el-button type="success" @click="dialogTableVisible = true">el-添加</el-button>
          <el-dialog title="收货地址" :visible.sync="dialogTableVisible" @close="closeDialog">
            <el-table :data="gridData">
              <el-table-column property="date" label="日期" width="150"></el-table-column>
              <el-table-column property="name" label="姓名" width="200"></el-table-column>
              <el-table-column property="address" label="地址"></el-table-column>
            </el-table>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogTableVisible = false">取 消</el-button>
              <el-button type="primary" @click="closeDialog">确 定</el-button>
            </div>
          </el-dialog>
         <!-- 通过method方法弹出model -->
          <el-dialog title="增加信息" :visible.sync="methoddialogTableVisible" @close="closeDialog">
            <add v-bind:title="title" v-bind="$attrs" v-on="$listeners"></add>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogTableVisible = false">取 消</el-button>
              <el-button type="primary" @click="closeDialog">确 定</el-button>
            </div>
          </el-dialog>

          <el-button type="info">更新</el-button>
          <el-button type="warning">删除</el-button>
          <el-button type="danger" v-popover:popover1>回退</el-button>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import add from "./add";
import result from "./result";
export default {
  name: "home",
  components: {
    add:add,
    result:result
  },
  data() {
    return {
      gridData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      dialogTableVisible: false,
      //通过方法实现模态弹出
      methoddialogTableVisible:false,
      addTitle:"弹出dialog添加功能"
    };
  },
  created: {},
  methods: {
    addUserInfo: function() {
      //this.$emit("childButton", this.parentMsg);
    },
    //弹出框关闭
    closeDialog: function() {
      this.dialogTableVisible = false;
       this.$message('关闭对话框中！');
    }
  },
  watch: {},
  computed: {},
  mounted: function() {}
};
</script>