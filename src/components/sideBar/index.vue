<template>
  <div class="manage_page fillcontain">
    <el-row style="height: 100%;">
      <el-col :span="4"  style="min-height: 100%; background-color: #324057;">
        <el-menu :default-active="defaultActive" style="min-height: 100%;" theme="dark" router>
          <el-menu-item index="manage"><i class="el-icon-menu"></i>虚拟币管理</el-menu-item>
          <el-menu-item index="statistics"><i class="el-icon-message"></i>交易统计</el-menu-item>
          <el-menu-item index="record"><i class="el-icon-setting"></i>过期记录</el-menu-item>
          <el-menu-item index="summary"><i class="el-icon-star-on"></i>交易汇总</el-menu-item>
          <el-menu-item index="flow"><i class="el-icon-date"></i>交易流水</el-menu-item>
          <el-menu-item index="handle"><i class="el-icon-document"></i>异常处理</el-menu-item>
          <!--<el-submenu index="2">
            <template slot="title"><i class="el-icon-document"></i>数据管理</template>
            <el-menu-item index="userList">用户列表</el-menu-item>
            <el-menu-item index="shopList">商家列表</el-menu-item>
            <el-menu-item index="foodList">食品列表</el-menu-item>
            <el-menu-item index="orderList">订单列表</el-menu-item>
            <el-menu-item index="adminList">管理员列表</el-menu-item>
          </el-submenu>-->
        </el-menu>
      </el-col>
      <el-col :span="20" style="height: 100%;overflow: auto;">
        <div class="header_container">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item, index) in $route.name" key="index">{{item}}</el-breadcrumb-item>
          </el-breadcrumb>
          <el-dropdown @command="handleCommand" menu-align='start'>
            <span class="phone">{{phone}} <i class="el-icon-caret-bottom"></i></span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="singout">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div style="padding: 30px;">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>

      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { logout } from '@/api/api'
  import {mapGetters, mapState} from 'vuex'
  import methods from '@/service/methods'
  export default {
    data () {
      return {
        phone: ''
      }
    },
    computed: {
      defaultActive: function () {
        return this.$route.path.replace('/', '');
      }
    },
    mounted: function () {
      this.phone = methods.getItem('userPhone')
    },
    methods: {
      async handleCommand (command) {
        if (command === 'home') {
          this.$router.push({path: 'manage'});
        } else if (command === 'singout') {
          logout()
          this.$router.push('/login');
        }
      },
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import '../../assets/css/mixin.scss';
  .header_container{
    background-color: #EFF2F7;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
  }
  .phone{
    margin-right: 37px;
    color: #20a0ff;
    font-weight: bold;
    &:hover{
      cursor: pointer;
    }
  }
  .el-dropdown-menu__item{
    text-align: center;
  }
</style>
