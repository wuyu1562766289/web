<template>
  <div class="user">
    <!-- 显示用户名称，头像，点击可以跳转到详情页 -->
    <nuxt-link :to="url">
      <img class="user-avatar" :src="user.avatar" alt />
      {{user.nickname}}
    </nuxt-link>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['user'],
  computed: {
    url() {
      return '/user/' + (this.user._id || this.user._id);
    }
  }
}
</script>

<style lang='scss'>
.user {
  display: inline-block;
  padding: 5px;
  a {
    color: green;
  }
  .user-avatar {
    width: 30px;
    height: 30px;
    padding: 5px;
    border-radius: 50%;
    vertical-align: middle;
  }
}
</style>