import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Yuncun from "./views/Yuncun/Yuncun.vue" //购物车

import My from "./views/My/My.vue" //我的页面

import MusicPage from './views/Home/MusicPage.vue' //播放音乐页面

import Login from "./views/Login/Login.vue" //登陆页面
import Register from "./views/Login/Register.vue" //注册页面


import Hot from "./views/Hot/Hot.vue" //发现页面


export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: () =>
                import ('./views/Home/Home.vue'),
            meta: {
                ifShow_FootBar: true,
                title: "首页"
            }
        }, {
            path: "/yuncun",
            name: 'yuncun',
            component: Yuncun,
            meta: {
                ifShow_FootBar: true,
                title: "云村"
            }
        },
        {
            path: "/my",
            name: "my",
            component: My,
            meta: {
                ifShow_FootBar: true,
                title: "我的"
            }
        },
        {
            path: "/hot",
            name: "hot",
            component: Hot,
            meta: {
                ifShow_FootBar: true,
                title: "注册"
            }
        }, {
            path: "/login",
            name: "login",
            component: Login,
            meta: {
                // ifShow_FootBar:true,
                title: "登陆"
            }
        }, {
            path: "/register",
            name: "register",
            component: Register,
            meta: {
                // ifShow_FootBar:true,
                title: "注册"
            }
        }, {
            path: "/musicpage",
            name: "musicpage",
            component: MusicPage,
            meta: {
                // ifShow_FootBar:true,
                title: "播放"
            }
        }

    ]
});