import axios from '@/plugins/http';

const user = {
    login({username, password}) {
        return axios.post('/login', {
            username,
            password
        })
    },
    register({ username, password, register_code }) {
        return axios.post('/user/register', {
            username,
            password,
            register_code
        })
    }
}

export default user;