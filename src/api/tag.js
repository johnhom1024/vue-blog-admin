import axios from '@/plugins/http';
const tag = {
    getList() {
        return axios.get("/tag");
    },
    addTag(tag) {
        return axios.post("/tag", null, {
            params: {
                tag
            }
        })
    },
    deleteTag(id) {
        return axios.delete("/tag", {
            params: {
                id
            }
        })
    }
}

export default tag;