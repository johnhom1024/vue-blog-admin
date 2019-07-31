import axios from '@/plugins/http';

const user = {
    login({username, password}) {
        return axios.post('/login', {
            username,
            password
        })
    }
}

export default user;