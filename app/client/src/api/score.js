import { useEnv } from '/@/services/env.js'

const { env } = useEnv()

export default class Score
{
    static save(user, score) {
        const token = JSON.parse(localStorage['saskaitisana_user']).access_token

        return axios.post(`${env('VITE_SERVER_URL')}/api/score`, { user, score }, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
    }
}
