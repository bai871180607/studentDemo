<template>
  <div id="set">
    <!-- 上列表 -->
    <div class='top'>
      <h2 class="title" style="border-bottom: 1px solid #eee;padding-bottom: 10px;font-weight:normal;font-size:20px">添加学生</h2>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="姓名:"  prop="name" style="width:300px">
        <el-input v-model="ruleForm.name" clearable size='small' placeholder="马小跳"></el-input>
      </el-form-item>

      <el-form-item label='头像:'>
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img  :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-form-item>

      <el-form-item label="性别:" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="通知:">
        <el-switch v-model="ruleForm.delivery"></el-switch>
      </el-form-item>

      <el-form-item label="邮件:" size='small' prop="name" style="width:300px">
        <el-input v-model="ruleForm.names" clearable></el-input>
      </el-form-item>

       <el-form-item label="网站地址:" size='small' prop="name" style="width:300px">
        <el-input v-model="ruleForm.web" clearable></el-input>
      </el-form-item>

       <el-form-item label="Github:" size='small' prop="name" style="width:300px">
        <el-input v-model="ruleForm.Github" clearable placeholder="计算机"></el-input>
      </el-form-item>

      <el-form-item label="Twitter:" size='small' prop="name" style="width:300px">
        <el-input v-model="ruleForm.Twitter" clearable placeholder="计算机"></el-input>
      </el-form-item>
      
      <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">更新设置</el-button>
  </el-form-item>

    </el-form>
    </div>  
  </div>
</template>
<script>
export default {
  data(){
    return {
      dialogImageUrl: '',
        dialogVisible: false,
      
     ruleForm:{
       name:'',
       region:'',
       web:'',
       Github:'',
       Twitter:'',
       resource:'',
       delivery:false,
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
   submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message({
          message: '更新成功 ',
          type: 'success'
        });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
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