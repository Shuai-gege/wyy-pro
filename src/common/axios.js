//router
// import router from "../router"; //引入路由对象
import {
    Toast,
    // Dialog
} from "vant"; //引入vant提示框
//原生交互
// import WebDemo from '../../common/js/webdemo'
// var demo = new WebDemo;

// axios
import axios from "axios";
import qs from "qs";
// import { baseURL } from "@/common/js/common"; //域名引入
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.timeout = 10000; //超时毫秒 60s
axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded;charset=UTF-8"; //请求头
// axios.defaults.headers.common['token'] = '7f9e2ca2-ea65-4ca9-9f71-2945fc49bd2c';


// axios请求拦截

axios.interceptors.request.use(
    config => {
        if (localStorage.getItem("token" + localStorage.getItem("sign_id"))) {
            config.headers["token"] = localStorage.getItem(
                "token" + localStorage.getItem("sign_id")
            );
        } else if (localStorage.getItem("token_tel")) {
            config.headers["token"] = localStorage.getItem("token_tel");
        }
        console.log(config);
        // loading
        return config;
    },
    error => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// axios响应拦截器
axios.interceptors.response.use(
    response => {
        // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
        // 否则的话抛出错误
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    error => {
        if (error.response.status) {
            switch (error.response.status) {
                // 404请求不存在
                case 404:
                    Toast({
                        message: "网络请求不存在",
                        duration: 1500,
                        forbidClick: true
                    });
                    break;

                case 500:
                    Toast({
                        message: "内部服务器错误",
                        duration: 1500,
                        forbidClick: true
                    });
                    break;

                    // 其他错误，直接抛出错误提示
                default:
                    Toast({
                        message: error.response.data.msg,
                        duration: 1500,
                        forbidClick: true
                    });
            }
            return Promise.reject(error.response);
        }
    }
);

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, data) {
    return new Promise((resolve, reject) => {
        axios
            .get(url, data)
            .then(res => {
                if (res.data.code == -1) {
                    Toast({
                        message: "登录过期，请重新登录!",
                        duration: 2000
                    });
                    localStorage.clear();
                    setTimeout(() => {
                        this.$router.push("/");
                    }, 1000);
                    return;
                } else if (res.data.code == 0) {
                    Toast({
                        message: res.data.msg,
                        duration: 2000
                    });
                } else if (res.data.code == 1) {
                    resolve(res.data);
                } else {
                    Toast({
                        message: res.data.msg,
                        duration: 2000
                    });
                }
            })
            .catch(err => {
                reject(err.data);
            });
    });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, data) {
    Toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true, // 禁用背景点击
        mask: false // 是否显示遮罩层
            // message: "数据加载中..."
    });
    return new Promise((resolve, reject) => {
        axios
            .post(url, qs.stringify(data))
            .then(res => {
                // Toast.clear();
                if (res.data.code == -1) {
                    // alert("登录过期111111111111");
                    localStorage.clear();
                    setTimeout(() => {
                        this.$router.push("/");
                    }, 1000);
                    return;
                } else if (res.data.code == -2) {
                    // location.href = `${localStorage.getItem("baseURL")}/agent/#/show`;
                    return;
                } else
                // if (res.data.code == 0) {
                //     // Toast(res.data.msg);
                //     // reject(res.data.msg);
                //     reject(res);
                // } else 
                if (res.data.code == 2) {
                    // console.log(res.data.data);
                    // resolve(res.data.data);
                    resolve(res.data);
                } else if (res.data.code == 200) {
                    resolve(res.data)
                } {
                    Toast({
                        message: "成功",
                        duration: 1
                    });
                }
            })
            .catch(error => {
                Toast.clear();
                if (
                    error.code == "ECONNABORTED" &&
                    error.message.indexOf("timeout") != -1
                ) {
                    Toast({
                        message: "请求超时,请稍后重试!",
                        duration: 2000
                    });
                } else if (error.message == "Network Error") {
                    Toast({
                        message: "请求超时,请稍后重试!",
                        duration: 2000
                    });
                } else {
                    Toast({
                        message: "网络请求错误",
                        duration: 2000
                    });
                }
                reject(error.data);
            });
    });
}

var http = {
    get,
    post
};
export default http;