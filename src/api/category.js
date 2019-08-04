import axios from '@/plugins/http';

/**
 * @description: 类别管理接口
 * @since: 2019-08-04 11:54:01
 * @Author: jawnwa22
 * @LastEditors: jawnwa22
 * @LastEditTime: 2019-08-04 15:13:29
 */

const category = {
    addCategory(cate) {
        return axios.post("/category", null, {
            params: {
                cate
            }
        });
    },
    getCategoryList() {
        return axios.get("/category");
    },
    deleteCategory(id) {
        return axios.delete("/category", {
            params: {
                id
            }
        })
    }
};

export default category;