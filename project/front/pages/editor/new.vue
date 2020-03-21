<template>
  <div>
    <div class="write-btn">
      <el-button type="primary" @click="submit">发布</el-button>
    </div>
    <el-row>
      <el-col :span="12">
        <!-- markdown编辑器 -->
        <textarea class="md-editor" :value="content" @input="update"></textarea>
      </el-col>
      <el-col :span="12">
        <div class="markdown-body" v-html="compiledHtml">
          <!-- {{content}} -->
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import debounce from 'loadsh/debounce'
import marked from 'marked'
import { log } from 'util'

export default {
  data() {
    return {
      content: '# hello'
    }
  },
  methods: {
    update: debounce(function(e) {
      this.content = e.target.value
    }, 200),
    async submit() {
      console.log(this.content);
      const ret = await this.$http.post('/article/create', {
        content: this.content
      });
      
      if (ret.code === 0) {
        this.$notify({
          title: '成功',
          type: 'success',
          message: `文章《${ret.data.title}》发布成功`
        })
      }
      setTimeout(() => {
        this.$router.push({ path: '/article/' + ret.data.id });
      }, 1000);
    }
  },
  computed: {
    compiledHtml() {
      return marked(this.content)
    }
  }
}
</script>

<style>
.md-editor {
  width: 100%;
  height: 100vh;
  outline: none;
}
.markdown-body {
  height: 100vh;
  overflow-y: scroll;
}
.write-btn {
  position: fixed;
  z-index: 100;
  right: 10px;
  top: 10px;
}
</style>