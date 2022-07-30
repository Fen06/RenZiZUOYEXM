<template>
  <div>
    <div class="background">
      <div class="login-box">
        <img src="../../assets/image/loginLogo.png" class="logo" alt="">
        <el-form ref="form" :model="form" class="From">
          <el-form-item>
            <el-input v-model="form.name" prefix-icon="el-icon-mobile-phone" class="userInput input" placeholder="请输入账号" />

          </el-form-item>

          <el-form-item>
            <el-input v-model="form.password" :show-password="true" prefix-icon="el-icon-lock" class="passwordInput input" placeholder="请输入密码" />

          </el-form-item>

          <el-form-item>
            <el-input v-model="form.verification" prefix-icon="el-icon-mobile-phone" class="verificationInput input" placeholder="请输入验证码" />
            <img class="yzmphtot" src="../../assets/image/yzm.jpg" alt="">
          </el-form-item>
          <el-button type="primary" class="loginBtn">登录</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        password: '',
        verification: ''
      }
    }
  },

  created() {},

  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>

<style lang="scss" scoped>
.background {
  width: 100vw;
  height: 100vh;
  background: url('../../assets/image/loginBg.png') no-repeat ;
  background-size: 100% 100%;
  position: relative;
  .logo{
position: absolute;
    top: -55px;
    left: -50px;
    width: 100px;
    margin-left: 245px;
    width: 110px;
    height: 110px;
  }
  .login-box {
  position: absolute;
      top: 50%;
    left: 50%;
    margin-left: -250px;
    margin-top: -175px;
  width: 500px;
  height: 365px;
  background-color: #fff;
  border-radius:12px
}
}

.From{
 position: absolute;
 left: 5%;
 top: 25%;
 width: 90%;
 .el-form-item__content{
   line-height: 50px;
 }
.loginBtn{
  width: 100%;
  height: 48px;
}
.verificationInput{
  width: 75%;
}
.yzmphtot{
width: 115px;
height: 40px;
position: absolute;
}
}

</style>
