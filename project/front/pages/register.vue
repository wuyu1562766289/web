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

      <el-form-item prop="nickname">
        <span class="svg-container">
          <i class="el-icon-mobile"></i>
        </span>
        <el-input v-model="form.nickname" placeholder="昵称" name="nickname"></el-input>
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <i class="el-icon-mobile"></i>
        </span>
        <el-input v-model="form.password" type="password" placeholder="密码" name="password"></el-input>
      </el-form-item>

      <el-form-item prop="repassword">
        <span class="svg-container">
          <i class="el-icon-mobile"></i>
        </span>
        <el-input v-model="form.repassword" type="password" placeholder="再次输入密码" name="repassword"></el-input>
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

      <el-button type="primary" @click.native.prevent="handleRegister">注册</el-button>
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
        email: '123456',
        captcha: '1234',
        password: '123456',
        repassword: '123456',
        nickname: '燃烧的内存条',
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
    handleRegister() {
      // 暂时忽略前端认证、密码复杂度认证、再次输入密码是否相同认证
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          console.log('校验成功')
          const obj = {
            email: this.form.email,
            captcha: this.form.captcha,
            password: md5(this.form.password),
            nickname: this.form.nickname,
          }
          const ret = await this.$http.post('/user/register', obj)
          console.log(ret)
        }
      })
    }
  }
}
</script>

<style lang="scss">
.email-code {
  width: 340px;
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