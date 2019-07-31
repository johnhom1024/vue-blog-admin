import axios from "@/plugins/http";

const article = {
    // 获取文章列表
    getArticleList() {
        return axios.get("/article/list");
    },
    // 删除文章
    deleteArticle(id) {
        return axios.delete(`/article/${id}`);
    },
    getCategoryList() {
        return axios.get("/category");
    }
};

export default article;
