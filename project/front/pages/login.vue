<template>
  <div class="login-container">
    <el-form ref="form" :model="form" rule="rules" class="login-form">
      <div class="title-container">
        <img src="/logo.png" alt />
      </div>

      <el-form-item prop="email">
        <span class="svg-container">
          <i class="el-icon-mobile"></i>
        </span>
        <el-input v-model="form.email" placeholder="邮箱" name="email"></el-input>
      </el-form-item>
      
      <el-form-item prop="password">
        <span class="svg-container">
          <i class="el-icon-mobile"></i>
        </span>
        <el-input v-model="form.password" type="password" placeholder="密码" name="password"></el-input>
      </el-form-item>

      <el-form-item prop="captcha" class="email-code">
        <div class="send-email-btn">
          <img @click="resetCaptcha" :src="code.captcha" alt />
        </div>
        <span class="svg-container">
          <i class="el-icon-user"></i>
        </span>
        <el-input v-model="form.captcha" placeholder="验证码" name="captcha"></el-input>
      </el-form-item>

      <el-button type="primary" @click.native.prevent="handleLogin">登录</el-button>
    </el-form>
  </div>
</template>

<script>
import { log } from 'util'
import md5 from 'md5'
export default {
  layout: 'login',
  data() {
    return {
      form: {
        email: 'abc',
        password: 'abc',
      },
      rules: {
        email: [
          { require: true, message: '请输入邮箱' },
          { type: 'email', message: '请输入正确的邮箱地址' }
        ],
        captcha: [{ require: true, message: '请输入验证码' }]
      },
      code: {
        captcha: '/api/user/captcha'
      }
    }
  },
  methods: {
    resetCaptcha() {
      this.code.captcha = '/api/user/captcha?' + new Date()
    },
    async handleLogin() {
      // 暂时忽略前端认证、密码复杂度认证、再次输入密码是否相同认证
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          console.log('校验成功')
          const obj = {
            email: this.form.email,
            captcha: this.form.captcha,
            password: md5(this.form.password),
          }
          const ret = await this.$store.dispatch('user/login', obj);
          // const ret = await this.$http.post('/user/login', obj)
          // console.log(ret)
          if(ret.code === 0) {
            localStorage.setItem('token', ret.data.token);
            this.$notify({
              title: '登录成功',
              type: 'success'
            });
            setTimeout(() => {
              this.$router.push({path: "/"});
            }, 1000);
            // this.$http.get('/article/' + this.id)
          }
        }
      })
    }
  }
}
</script>

<style lang="scss">
.email-code {
  width: 350px;
  position: relative;
  .send-email-btn {
    position: absolute;
    right: -110px;
    .el-button {
      width: 90px;
      height: 50px;
    }
    img {
      width: 90px;
      height: 50px;
      cursor: pointer;
    }
  }
}
</style>