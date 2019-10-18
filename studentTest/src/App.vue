<template>
  <div id="app">
    <el-container class="container">
      <el-header height="62px" class="header">
        <div class="title">
          {{title}}
          <a href="#" style="float:right;margin-right:10px;font-size:14px;margin-top:-10px;font-weight:normal;text-decoration:none;out-line:none;color:white;z-index:1000"><span>
            <el-dropdown @command="handleCommand" trigger="click">
            <span class="el-dropdown-link" style="color:white">
              马小跳<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-plus" command="/set">设置</el-dropdown-item>
        <el-dropdown-item icon="el-icon-minus">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown></span><span style="position:absolute;top:15px;right:40px;">技术部</span></a>
          <img style="float:right;margin-right:20px;height:40px;width:40px;margin-top:10px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURcHBwb+/v7+/v76+vujo6OHh4cnJydTU1IOqnXYAAAADdFJOUxPppyMYpxkAAAD6SURBVEjH7dfbDYIwFAbguoHRCYwTKLcBOIUBaHQAIAxQwvwSEQpyaH/FFxP+5y89vacV4uQBOQix86DsxRmDV3HE4EV4YDa4QQRWSjYILKnNzQ0jekY7Yd3B1AVDeiV3wKCHsQPWPUwdkIbYYWSgtsLAwMwKfQNjFCZWWPwBhEcNz+NoZfLfrLXZPYkD+gtd/H6H97UT5+EK0FPY1ZbABaDYygysuTEvtqg9sI9AiyV/o8xgRNj0DLtHaiuszOahxgJLGueeL8Gpa8vnPHx30yEZGKo5lBwMiEnGwIKDKQMVB+UaSGzWwO2psMGPIfxgh78A8KcC/aY8ACmMo3JtJ3ljAAAAAElFTkSuQmCC" alt="">
          <a href="#" style="float:right;margin-right:20px;font-size:14px;font-weight:normal;text-decoration:none;out-line:none;color:white;">帮助</a>
          <a href="#" style="float:right;margin-right:20px;font-size:14px;font-weight:normal;text-decoration:none;out-line:none;color:white;">反馈</a>
          <a href="#" style="float:right;margin-right:20px;font-size:14px;font-weight:normal;text-decoration:none;out-line:none;color:white;">首页</a>
          
        </div>
       
      </el-header>
      <el-container>
        <!-- 左侧导航 -->
        <el-aside width="240px" class="left-aside">
          <el-menu
            :router="true"
            :default-active="$route.path"
            @select="handleSelect"
            class="el-menu-vertical-demo">
            <el-menu-item index="/">
              <i class="el-icon-s-home"></i>
              <span slot="title">我的工作台</span>
            </el-menu-item>
            <el-menu-item index="/student">
              <i class="el-icon-user-solid"></i>
              <span slot="title">学生管理</span>
            </el-menu-item>
            <el-menu-item index="/test">
              <i class="el-icon-menu"></i>
              <span slot="title">试卷管理</span>
            </el-menu-item>
            <el-menu-item index="/add">
              <i class="el-icon-s-finance"></i>
              <span slot="title">添加学生</span>
            </el-menu-item>
            <el-menu-item index="/set">
              <i class="el-icon-message-solid"></i>
              <span slot="title">个人设置</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <!-- / 左侧导航 -->
        <!-- 右侧内容 -->
        <el-main class="right">
          <!-- 路由组件显示区域 -->
          <router-view />
          <div style="margin:20px 0 20px 0">
            <div style="padding:0 20px 0 20px">
                <span style="text-align:left;font-size:20px;color:gray">学校管理系统</span>
                <a href="https://github.com/alibaba/ice" style="float:right;font-size:12px;color:gray;line-height:26.4px;text-decoration:none">ICE</a>
                <span style="float:right;font-size:12px;color:gray;line-height:26.4px">© 2018 Theme designed by&nbsp;&nbsp;</span>
            </div>
          </div>
        </el-main>
        <!-- 右侧内容 -->
      </el-container>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return {
      title:"学校管理系统"
    }
  },
  computed:{
     
  },
  updated() {
    
  },
  created() {
    this.$router.push('/');
  },
  methods:{
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
        console.log(this.$router)
        console.log(this.$route)
      },
      handleCommand(command) {
        this.$router.history.push(command)
      }
  }
}
</script>

<style>
body {
  margin: 0;
}
.container {
  position: absolute;
  width:100%;
  top:0;bottom: 0;
}
.container > .header {
  background:rgb(24, 97, 213);
  color: #ffffff;
  line-height: 62px;
}
.header > .title {
  font-size: 20px;
  font-weight: bold;
}
.container .left-aside {
  border-right: 1px solid #e6e6e6;
   
}
.breadcrumb {
  margin-bottom: 1em;
}
.right{
  background-color: rgb(242, 242,242);
  padding: 20px;
}
</style>
