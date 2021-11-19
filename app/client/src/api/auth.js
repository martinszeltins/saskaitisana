import { useEnv } from '/@/services/env.js'

const { env } = useEnv()

export default class Auth
{
    static register(username, password) {
        return axios.post(`${env('VITE_SERVER_URL')}/api/register`, { username, password })
    }

    static login(username, password) {
        return axios.post(`${env('VITE_SERVER_URL')}/api/login`, { username, password })
    }
}
