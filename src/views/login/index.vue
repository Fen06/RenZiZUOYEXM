<template>
  <div>
    <div class="background">
      <div class="login-box">
        <img src="../../assets/image/loginLogo.png" class="logo" alt="" />
        <el-form ref="form" :model="form" :rules="Rulesform" class="From">
          <el-form-item prop="mobile">
            <el-input
              v-model="form.loginName"
              prefix-icon="el-icon-mobile-phone"
              class="userInput input"
              placeholder="请输入账号"
            />
          </el-form-item>
          <!-- :show-password="true" -->
          <el-form-item prop="password">
            <el-input
              v-model="form.password"
              prefix-icon="el-icon-lock"
              class="passwordInput input"
              placeholder="请输入密码"
              :show-password="true"
            />
            <!-- <svg-icon iconClass="eye" class="eyenone"></svg-icon> -->
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="form.code"
              prefix-icon="iconfont icon-dunpai"
              class="verificationInput input"
              placeholder="请输入验证码"
            />
            <img class="yzmphtot" :src="yzm[0]" alt="" @click="upYzm" />
          </el-form-item>
          <el-button
            type="primary"
            :loading="falg"
            @click="onSubmit"
            class="loginBtn"
            >登录</el-button
          >
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { Verification } from '@/api/user'
export default {
  data() {
    return {
      form: {
        loginName: 'admin',
        password: 'admin',
        code: '',
        loginType: 0,
        clientToken: 0
      },
      Rulesform: {
        name: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
      },
      yzm: [],
      falg: false
    }
  },

  created() {
    this.Verification()
  },

  methods: {
    async onSubmit() {
      if (this.form.loginName !== 'admin' || this.form.password !== 'admin') {
        return this.$message.error('账号或密码错误')
      } else if (this.form.code.trim() === '') {
        return this.$message.error('请输入验证码')
      }
      this.falg = true
      await this.$refs.form.validate()
      await this.$store.dispatch('user/Login', this.form)
      if (this.$store.state.user.token) {
        this.$message.success('登录成功')
        this.$router.push('/')
      } else {
        this.$message.error('登录失败')
        return
      }

      this.falg = false
    },
    // 点击事件 刷新验证码
    upYzm() {
      this.Verification()
    },
    // 获取验证码
    async Verification() {
      try {
        const num =
          Math.round(Math.random() * 10) +
          '' +
          Math.round(Math.random() * 10) +
          '' +
          Math.round(Math.random() * 10) +
          '' +
          Math.round(Math.random() * 10)

        if (num.length > 4) {
          this.form.clientToken = num.substr(0, 4)
        } else {
          this.form.clientToken = num
        }
        console.log(this.form.clientToken)
        const res = await Verification(this.form.clientToken)
        this.$store.dispatch('user/getcold', this.form.clientToken)
        console.log(res)
        this.yzm.unshift(res.request.responseURL)
      } catch (e) {
        console.log('yzm', e)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.background {
  width: 100vw;
  height: 100vh;
  background: url('../../assets/image/loginBg.png') no-repeat;
  background-size: 100% 100%;
  position: relative;
  .logo {
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
    border-radius: 12px;
  }
}

.From {
  position: absolute;
  left: 5%;
  top: 25%;
  width: 90%;
  .el-form-item__content {
    line-height: 50px;
  }
  .iconfont {
    margin-left: 5px;
  }
  .loginBtn {
    width: 100%;
    height: 48px;
    background-image: linear-gradient(to right, #7584f1, #4160e4);
  }
  .verificationInput {
    width: 75%;
  }
  .yzmphtot {
    width: 110px;
    height: 40px;
    position: absolute;
  }
}
</style>
