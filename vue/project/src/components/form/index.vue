<template>
  <div>
    <WForm :model="model" :rules="rules" ref="loginForm">
      <WFormItem label="用户名" prop="username">
        <WInput v-model="model.username"></WInput>
      </WFormItem>
      <WFormItem label="密码" prop="password">
        <WInput v-model="model.password" type="password"></WInput>
      </WFormItem>
      <WFormItem>
        <button @click="onLogin">登录</button>
      </WFormItem>
    </WForm>
    {{model}}
  </div>
</template>

<script>
import WInput from "./WInput.vue";
import WFormItem from "./WFormItem.vue";
import WForm from "./WForm.vue";
import Notice from "@/components/notice";
import create from "@/utils/create.js";

export default {
  components: {
    WInput,
    WFormItem,
    WForm
  },
  data() {
    return {
      model: {
        username: "wx",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "用户名必填" }],
        password: [{ required: true, message: "密码必填" }]
      }
    };
  },
  methods: {
    onLogin() {
      let notice;

      this.$refs.loginForm.validate(isvalid => {
        notice = create(Notice, {
          title: "提示信息",
          msg: isvalid ? "登录！" : "有错！",
          time: 5000
        });

        notice.show();
      })
    }
  },
};
</script>

<style scoped>
</style>