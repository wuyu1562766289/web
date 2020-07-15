<template>
    <!-- 当前组件的页面结构 -->
    <div>
        我是入口组件{{msg}}
    </div>
</template>

<script>
// 当前组件的业务逻辑
export default {
    data(){
        return{
            msg: 'hello Vue'
        }
    }
}
</script>

<style>
/* css样式 */
body{
    background-color: red;
}
</style>