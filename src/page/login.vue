<template>
  <!-- <div class="login_page fillcontain">
    <transition name="form-fade" mode="in-out">
      <section class="form_contianer">
        <div class="manage_tip">
          <p>{{projectName}}</p>
        </div>
        <el-form :model="loginForm" :rules="rules" ref="loginForm">
          <el-form-item prop="phone">
            <el-input v-model="loginForm.phone" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" placeholder="密码" v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item>
              <el-button type="primary" @click="submitForm(loginForm)" class="submit_btn">登陆</el-button>
          </el-form-item>
        </el-form>
        <p class="error">{{errorData}}</p>
      </section>
    </transition>
  </div> -->
  <div>
    <v-input type="text">
  </div>
</template>

<script>
import { login } from '@/api/api'
import methods from '@/service/methods'
import vInput from '@/components/vInput'
export default{
  components:{vInput},
  data () {
    return {
      projectName: '虚拟货币发放后台',
      errorData: '',
      loginForm: {
        phone: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
      },
      showLogin: false,
    }
  },
  mounted: function () {

  },
  methods: {
    submitForm: function (data) {
      login(data).then(data => {
        methods.setItem('userPhone', data.phone)
        this.$router.push({path: '/manage'})
      }).catch(err => {
        this.errorData = err.description
      })
    }
  }
}
</script>

<style scoped rel="stylesheet/scss" lang="scss" >
	@import '../assets/css/mixin.scss';
	.login_page{
		background-color: #324057;
	}
	.manage_tip{
		position: absolute;
		width: 100%;
		top: -100px;
		left: 0;
		p{
			font-size: 34px;
			color: #fff;
		}
	}
	.form_contianer{
    @include ctp(320px, 210px);
    width: 320px;
		padding: 25px;
		border-radius: 5px;
		text-align: center;
		background-color: #fff;
		.submit_btn{
			width: 100%;
			font-size: 16px;
		}
	}
	.tip{
		font-size: 12px;
		color: red;
	}
	.form-fade-enter-active, .form-fade-leave-active {
	  	transition: all 1s;
	}
	.form-fade-enter, .form-fade-leave-active {
	  	transform: translate3d(0, -50px, 0);
	  	opacity: 0;
	}
</style>
