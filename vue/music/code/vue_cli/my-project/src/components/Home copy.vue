<template>
    <div>
        <!-- 轮播图 -->
        <mt-swipe :auto="4000">
            <!-- v-for组件的时候需要给key，避免vue计算key，来提升性能 -->
            <!-- key就是位置的标识 -->
            <mt-swipe-item v-for="(item, index) in imgs" :key="index">
                <img :src="item.img" width="100%" height="200px" alt="" />
            </mt-swipe-item>
        </mt-swipe>
        <!-- 自定义插件 -->
        <!-- <test></test> -->

        <!-- 九宫格 -->
        <div class="grid">
            <ul>
                <li v-for="(module, index) in modules" :key="index">
                    <router-link :to="module.route">
                        <span :class="module.className"></span>
                        <div>{{ module.title }}</div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            msg: "",
            imgs: [], // 轮播图数据
            modules: [
                {
                    title: "新闻资讯",
                    className: "back-news",
                    route: { name: "Home" }
                },
                {
                    title: "图文分享",
                    className: "back-picshare",
                    route: { name: "Home" }
                },
                {
                    title: "商品展示",
                    className: "back-goods-show",
                    route: { name: "Home" }
                },
                {
                    title: "留言反馈",
                    className: "back-feed",
                    route: { name: "Home" }
                },
                {
                    title: "搜索资讯",
                    className: "back-search",
                    route: { name: "Home" }
                },
                {
                    title: "联系我们",
                    className: "back-callme",
                    route: { name: "Home" }
                }
            ]
        };
    },
    created() {
        /* this.$axios.get('http://b-ssl.duitang.com/uploads/item/201701/11/').then(res=>{
          this.imgs = res.data.message;
          console.log(imgs);
        }).catch(err => {
          console.log(err);
        }); */
        this.imgs.push({
            img:
                "http://b-ssl.duitang.com/uploads/item/201701/11/20170111183425_TCxLR.thumb.700_0.jpeg"
        });
        this.imgs.push({
            img:
                "http://b-ssl.duitang.com/uploads/item/201702/05/20170205191559_i8HGU.jpeg"
        });
        this.imgs.push({
            img:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574490602150&di=6e72a17d6d02bccc0561b2169f9e5583&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fmobile%2F2019-02-28%2F5c779dcc975ac.jpg"
        });

        // 测试自己写的插件
        this.$log();
        this.$log = 'abc';
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mint-swipe {
    width: 100%;
    height: 200px;
}
.mint-swipe img {
    width: 100%;
}

/* 九宫格样式 */
.grid span {
    display: inline-block;
    margin: 10px 0;
    width: 50px;
    height: 50px;
    background-repeat: round;
}
a {
    text-decoration: none;
}
.back-img {
    background-image: url(../../static/img/callme.png);
}
.back-news {
    background-image: url(../../static/img/news.png);
}
.back-picshare {
    background-image: url(../../static/img/picShare.png);
}
.back-goods-show {
    background-image: url(../../static/img/goodsShow.png);
}
.back-feed {
    background-image: url(../../static/img/feedback.png);
}
.back-search {
    background-image: url(../../static/img/search.png);
}
.back-callme {
    background-image: url(../../static/img/callme.png);
}

ul {
    margin: 0px;
    padding: 0px;
    overflow: hidden;
}
li {
    list-style: none;
    float: left;
    width: 33.333%;
    text-align: center;
}
</style>
