<template>
  <div id="student">
    <!-- 上列表 -->
    <div class='top'>
      <h2 class="title" style="border-bottom: 1px solid #eee;padding-bottom: 10px;font-weight:normal;font-size:20px">添加学生</h2>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="姓名:"  prop="name" style="width:300px">
        <el-input v-model="ruleForm.name" clearable size='small' placeholder="马小跳"></el-input>
      </el-form-item>

      <el-form-item label="性别" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="年级" prop="region" >
          <el-select v-model="ruleForm.region" size='small' clearable placeholder="请选择">
            <el-option label="大一" value="one"></el-option>
            <el-option label="大二" value="two"></el-option>
            <el-option label="大三" value="three"></el-option>
            <el-option label="大四" value="four"></el-option>
          </el-select>
        </el-form-item>

       <el-form-item label="联系电话:" size='small' prop="name" style="width:300px">
        <el-input v-model="ruleForm.names" clearable></el-input>
      </el-form-item>

       <el-form-item label="院系:" size='small' prop="name" style="width:300px">
        <el-input v-model="ruleForm.namess" clearable placeholder="计算机"></el-input>
      </el-form-item>
      
      <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
  </el-form-item>

    </el-form>
    </div>  
  </div>
</template>
<script>
export default {
  data(){
    return {
      
     ruleForm:{
       region:'',
       name:'',
       names:'',
       namess:'',
       resource:'',
     },
     rules:{
      name: [
            { required: true, message: '必填', trigger: 'blur' },
          ],
      region: [
            { required: true, message: '请选择年级', trigger: 'change' }
          ],
     resource: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
     }
    }
  },
  created(){
  },
  watch: {
    
  },
  computed:{
   
  },
  methods:{
    handleSelectionChange(){

    },
   submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message({
          message: '提交成功 ',
          type: 'success'
        });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
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