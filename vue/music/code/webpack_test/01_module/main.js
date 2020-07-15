// es6 Module

// 整个项目的入口文件
import App from './App';
import Vue from './vue';

new Vue({
    el: '#app',
    data() {
        return {
            
        }
    },
    components: {
        App
    },
    template: '<App />'
});