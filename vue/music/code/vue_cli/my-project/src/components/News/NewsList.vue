<template>
  <div class='page'>
    <nav-bar :title="title" />
    <!-- 新闻列表 -->
    <div class="demo">
      <ul>
        <li v-for="(news, index) in newsList" :key="index">
          <router-link :to="{name: 'NewsDetail', params: {id: news.weburl}}">
            <img :src="newsList[index].pic" />
            <div>
              <span>{{news.title}}</span>
              <div class="news-desc">
                <p>来源：{{news.src}}</p>
                <p>发表时间：{{news.date | convertTime('YYYY-MM-DD HH:mm:ss')}}</p>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  created() {
    this.$axios
      .get("apis/news/get?channel=星座&start=0&num=6&appkey=e6c8c7849f8d2b81")
      .then(res => {
        this.newsList = res.data.result.list;
      })
      .catch(err => console.log(err));
  },
  data() {
    return {
      title: "新闻列表",
      newsList: [] // 新闻列表数据
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  components: {}
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}
p {
  margin: 2px 30px 0px 0px;
}
.demo img {
  width: 42px;
  height: 42px;
  margin-right: 20px;
}

.demo a {
  display: flex;
  padding-left: 5px;
  align-items: center;
  margin: 5px 0px;
  border-bottom: 1px solid #dfdcdc;
  padding-bottom: 5px;
  color: black;
}

.news-desc {
  display: flex;
  font-size: 16px;
  color: #2196f3;
}

.page {
  margin-bottom: 55px;
}
</style>
