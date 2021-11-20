import Auth from '/@/api/auth'
import router from '/@/routes.js'

export function useLogin() {
    async function login(username, password) {
        const { data } = await Auth.login(username, password)

        localStorage.setItem('saskaitisana_user', JSON.stringify(data))

        location.href = '/'
    }

    return {
        login
    }
}
