// es6 Module

// 整个项目的入口文件

import App from './App';
import Vue from './vue';
import './main.css';    // 需要解析：npm i css-loader style-loader -D

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