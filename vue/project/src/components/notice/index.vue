<template>
  <div v-if="isShow">
    <h3>{{title}}</h3>
    <hr />
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    msg: {
      type: String,
      default: ""
    },
    time: {
      type: Number,
      default: 1000
    }
  },
  data() {
    return {
      isShow: true
    };
  },
  methods: {
    show() {
      this.isShow = true;
      setTimeout(() => {
        this.hide();
      }, this.time);
    },
    hide() {
      this.isShow = false;
      this.remove();
    }
  }
};
</script>

<style scoped>
div {
  background: yellow;
  width: 300px;
  height: 200px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  -ms-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  -o-transform: translateX(-50%) translateY(-50%);
}
</style>