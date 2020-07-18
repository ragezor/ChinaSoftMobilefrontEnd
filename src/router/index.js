import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Home',
      component: (resolve) => require(['../components/home/home.vue'], resolve) // 懒加载
    },
    {
      path: '/discover',
      name: 'Discover',
      component: (resolve) => require(['../components/discover/discover.vue'], resolve)
    },
    {
      path: '/order',
      name: 'Order',
      component: (resolve) => require(['../components/order/order.vue'], resolve)
    },
    {
      path: '/profile',
      name: 'Profile',
      component: (resolve) => require(['../components/profile/profile.vue'], resolve)
    },
    {
      path: '/shop',
      name: 'Shop',
      component: (resolve) => require(['../components/shop/shop.vue'], resolve)
    },
    {
      path: '/setting',
      name: 'Setting',
      component: (resolve) => require(['../components/setting/setting.vue'], resolve)
    },
    {
      path: '/login',
      name: 'Login',
      component: (resolve) => require(['../components/login/login.vue'], resolve)
    },
    {
      path: '/collection',
      name: 'Collection',
      component: (resolve) => require(['../components/collection/collection.vue'], resolve)
    },
    {
      path: '/evaluation',
      name: 'Evaluation',
      component: (resolve) => require(['../components/evaluation/evaluation.vue'], resolve)
    },
  ]
})
// router.beforeEach((to, from, next) => {
//     //用你的方式获取登录的用户信息
//     const userinfo = localStorage.userinfo
//     if(userInfo || to.name === 'Login'){
//         //如果存在用户信息，或者进入的页面是登录页面，则直接进入
//         next()
//     }else {
//         //不存在用户信息则说明用户未登录，跳转到登录页面，带上当前的页面地址，登录完成后做回跳，
//         //如未登录用户进入用户中心的页面地址，检测到未登录，
//         //自动跳转到登录页面，并且带上用户中心的页面地址，登录完成后重新跳到个人中心页面。
//         next({
//           name: 'Login',
//           query: {
//             redirect: to.path
//           }
//         })
//     }
// })
