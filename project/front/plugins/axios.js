// 负责axios的各种配置：前缀，token管理，路由跳转
import Vue from 'vue';
import axios from 'axios';
import { MessageBox } from 'element-ui';

const service = axios.create({
  timeout: 5000,
  baseURL: '/api'
});


export default ({ store, redirect }) => {
  // 拦截器：管理token
  service.interceptors.request.use(config => {
    // config.headers.common['wangxing'] = 'hey';
    // 请求拦截器，后续token管理都在这
    const token = window.localStorage.getItem('token');
    if (token) {
      config.headers.common['Authorization'] = 'Bearer ' + token;
    }

    return config;
  },
    err => {
      return Promise.reject(err);
    });

  // 响应拦截器
  service.interceptors.response.use(async response => {
    // header config这里处理即可，应用层只需要data数据
    const { data } = response;

    if (data.code === -666) {
      MessageBox.confirm('登录已过期', '提示', {
        confirmButtonText: "重新登录",
        showCancelButton: false,
        type: "warning"
      }).then(() => {
        localStorage.removeItem('token');
        // 跳转到登录页
        redirect({ path: '/login' });
      })
    }
    return data;
  })
}

Vue.prototype.$http = service;

export const http = service;
