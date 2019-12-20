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
    uploadArticle({
        mdfile,
        tag,
        createdAt
    }) {
        let Form = new FormData();
        Form.append('mdfile', mdfile);
        Form.append('tag', tag);
        createdAt = createdAt || mdfile.lastModified;
        Form.append('createdAt', createdAt);
        console.log(mdfile);
        
        console.log(createdAt);
        
        return axios.post("/article", Form)
    }
};

export default article;
