export function useEnv() {
    function env(variable) {
        return import.meta.env[variable]
    }

    return {
        env
    }
}
