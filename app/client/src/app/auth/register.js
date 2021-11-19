import Auth from '/@/api/auth.js'

export function useRegister() {
    async function register(username, password) {
        await Auth.register(username, password)
    }

    return {
        register
    }
}
