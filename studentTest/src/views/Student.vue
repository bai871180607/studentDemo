<template>
  <div id="student">
    <!-- 上列表 -->
    <div class='top'>
      <h4 class="title">搜索</h4>
      <div>
        <div style="width:33.3%;display:inline-block;margin-bottom:20px"><span style="padding-right:10px">学校：</span><el-select size="small" style="width:200px" v-model="value" clearable placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select></div>
         <div style="width:33.3%;display:inline-block"><span style="padding-right:10px">院系：</span><el-select size="small" style="width:200px" v-model="values" clearable placeholder="请选择">
    <el-option
      v-for="item in optionss"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select></div>
   <div style="width:33.3%;display:inline-block"><span style="padding-right:10px">班级：</span><el-input size="small" v-model="input" clearable placeholder="请输入内容" style="width:200px"></el-input></div>
  <div style="width:33.3%;display:inline-block;margin-bottom:20px"><span style="padding-right:10px">姓名：</span><el-input size="small" v-model="inputs" clearable placeholder="请输入内容" style="width:200px"></el-input></div>
   <div style="width:33.3%;display:inline-block"><span style="padding-right:10px">电话：</span><el-input size="small" v-model="inputss" clearable placeholder="请输入内容" style="width:200px"></el-input></div>
   <div style="width:33.3%;display:inline-block"><span style="padding-right:10px">角色：</span><el-input size="small" v-model="inputsss" clearable placeholder="请输入内容" style="width:200px"></el-input></div>
      </div>
    </div>
    <!-- 下表单 -->
    <div class='bottom'>
      <h4 class="title">学生列表</h4>
      <el-button type="primary" style="margin-bottom:10px;font-size:14px" @click="toAdd">+添加学生</el-button>
      <el-button type="danger" style="margin-bottom:10px;font-size:14px">-批量删除</el-button>
      <el-table
      border
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
     prop="num"
      label="序号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="school"
      label="学校"
      width="120">
    </el-table-column>
    <el-table-column
      prop="schools"
      label="院校"
      width="120">
    </el-table-column>
    <el-table-column
      prop="classes"
      label="班级"
      width="120">
    </el-table-column>
    <el-table-column
      prop="tel"
      label="联系电话"
      width="120">
    </el-table-column>
    <el-table-column
      prop="actor"
      label="角色"
      width="120">
    </el-table-column>
    <el-table-column
      label="启动/停用"
      width="120">
        <template v-slot="slot">
            <el-switch
                v-model="switchs"
                active-color="#13ce66"
                inactive-color="#ff4949">
            </el-switch>
      </template>
    </el-table-column>
    <el-table-column
      label="操作"
      show-overflow-tooltip>
      <template v-slot="slot">
          <i class="el-icon-edit-outline" title="修改" @click.prevent="handleToEdit(slot.row)" style="font-size:20px;color:teal"></i>&nbsp;
          <i class="el-icon-document-delete" title="删除" @click.prevent="handleToDel(slot.row.num)" style="font-size:20px;color:red"></i>
        </template>
    </el-table-column>
  </el-table>
  <div style="height:20px"></div>
  <div style="text-align:right">
      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
    </div>
    </div>
    
  </div>
</template>
<script>
export default {
  data(){
    return {
      currentPage3:1,
       options: [{
          value: '选项1',
          label: '浙江大学'
        }, {
          value: '选项2',
          label: '上海大学'
        }, {
          value: '选项3',
          label: '中山大学'
        }],
        value: '',

        optionss: [{
          value: '选项1',
          label: '计算机学院'
        }, {
          value: '选项2',
          label: '设计学院'
        }],
        switchs:true,
        values: '',
        input:'',
        inputs:'',
        inputss:'',
        inputsss:'',
         tableData: [{
          num: 0,
          name: '王小虎',
          school: '浙江大学',
          schools: '计算机',
          classes:0,
          tel:'187xxxx1230',
          actor:'学生',
        }, {
          num: 1,
          name: '王小虎',
          school: '浙江大学',
          schools: '计算机',
          classes:1,
          tel:'187xxxx1230',
          actor:'学生',

        }, {
          num: 2,
          name: '王小虎',
           school: '浙江大学',
           schools: '计算机',
          classes:2,
          tel:'187xxxx1230',
          actor:'学生',

        }, {
          num: 3,
          name: '王小虎',
           school: '浙江大学',
           schools: '计算机',
          classes:3,
          tel:'187xxxx1230',
          actor:'学生',

        }, {
          num: 4,
          name: '王小虎',
           school: '浙江大学',
           schools: '计算机',
          classes:4,
          tel:'187xxxx1230',
          actor:'学生',

        }, {
          num: 5,
          name: '王小虎',
           school: '浙江大学',
           schools: '计算机',
          classes:5,
          tel:'187xxxx1230',
          actor:'学生',

        }, {
          num: 6,
          name: '王小虎',
           school: '浙江大学',
           schools: '计算机',
          classes:6,
          tel:'187xxxx1230',
          actor:'学生',
        }],
        multipleSelection: []
      }
  },
  created(){
    
  },
  watch: {
    
  },
  computed:{
   
  },
  methods:{
     handleToDel(num){
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    handleToEdit(row){
      this.$confirm('请先申请管理员权限', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })   
    },
    handleSizeChange(){

    },
    handleCurrentChange(){

    },
   toAdd(){
     console.log(this.$route.path)
     this.$router.history.push("/add");
     console.log(this.$route.path)
   },
   handleSelectionChange(){

   }
  }
}
</script>
<style scoped>
    .top{
      background-color: rgb(255,255,255);
      border-radius: 6px;
      padding: 20px;
      margin-bottom: 20px;
    }
    .title{
     margin: 0 0 20px;

    }
    .bottom{
      background-color: rgb(255,255,255);
      border-radius: 6px;
      padding: 20px;
      margin-bottom: 20px;
    }
</style>