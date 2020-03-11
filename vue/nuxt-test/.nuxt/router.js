import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _771c3322 = () => interopDefault(import('..\\pages\\admin.vue' /* webpackChunkName: "pages_admin" */))
const _6f7add9d = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages_cart" */))
const _30800fa4 = () => interopDefault(import('..\\pages\\custom.vue' /* webpackChunkName: "pages_custom" */))
const _0f54823c = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _56b6731c = () => interopDefault(import('..\\pages\\detail\\_id.vue' /* webpackChunkName: "pages_detail__id" */))
const _ec5fe6c4 = () => interopDefault(import('..\\pages\\detail\\_name\\_id.vue' /* webpackChunkName: "pages_detail__name__id" */))
const _45acdf25 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _771c3322,
    name: "admin"
  }, {
    path: "/cart",
    component: _6f7add9d,
    name: "cart"
  }, {
    path: "/custom",
    component: _30800fa4,
    name: "custom"
  }, {
    path: "/login",
    component: _0f54823c,
    name: "login"
  }, {
    path: "/detail/:id?",
    component: _56b6731c,
    name: "detail-id"
  }, {
    path: "/detail/:name?/:id?",
    component: _ec5fe6c4,
    name: "detail-name-id"
  }, {
    path: "/",
    component: _45acdf25,
    name: "index"
  }, {
    path: "/foo",
    component: _30800fa4,
    name: "foo"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
