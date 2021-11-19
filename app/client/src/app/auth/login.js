export function useLogin() {
    async function login(username, password) {
        await Auth.login(username, password)
    }

    return {
        login
    }
}
