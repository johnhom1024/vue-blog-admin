/**
 * Created Date: 2019-06-11
 * Author: jawnwa22
 * @description 导出axios对象
 * @use
 *
 * Copyright (c) 2019 19cm_without_head Team
 */

import axios from "axios";
import store from "@/store";

axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";
//用来处理刷新token后重新请求的自定义变量
axios.defaults.isRetryRequest = false;

let config = {
    baseURL: process.env.VUE_APP_BASEURL || process.env.apiUrl || "",
    timeout: 60 * 1000 // Timeout
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
    function(config) {
        //添加Authorization 字段
        let token = window.localStorage.getItem("token");
        config.headers.Authorization = "Bearer " + token;

        return config;
    },
    function(error) {
        // Do something with request error
        store.commit("closeLoading");
        return Promise.reject(error);
    }
);

// Add a response interceptor
_axios.interceptors.response.use(
    function(response) {
        // Do something with response data
        let code = response.data.code;
        switch (code) {
            case 0:
                if (response.data.data) {
                    return response.data.data;
                }
                return response;
            default:
                break;
        }
        return Promise.reject();
    },
    function(error) {
        // Do something with response error
        store.commit("closeLoading");
        return Promise.reject(error);
    }
);

export default _axios;
