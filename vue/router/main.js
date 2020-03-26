import user from './user.component';
import company from './company.component';

// 1.创建一个路由--路由表
let router = new VueRouter({
    routes: [{
            path: '/user',
            component: user
        },
        {
            path: '/company',
            component: company
        }
    ]
});

// 2.创建vue对象
let vm = new Vue({
    el: '#div1',
    router: router
});
