<template>
    <div class="inline-block bg-blue-gradient rounded-xl w-[98%] mx-auto shadow-md py-8 px-10 mt-4">
        <div class="flex justify-between items-center">
            <div class="text-white text-3xl font-medium">
                Saskaitīšana
            </div>

            <div class="flex items-center">
                <div
                    @click="logout"
                    tabindex="1"
                    class="inline-block mr-4 bg-white text-gray-700 rounded-full py-1 px-6 border-2 border-gray-300 hover:border-gray-400 transition cursor-default select-none active:hover:shadow-inset-sm">

                    <div class="flex items-center">
                        <div class="text-lg">
                            Iziet
                        </div>
                    </div>
                </div>

                <div class="text-white text-2xl mr-4 text-shadow-sm">
                    {{ username }}
                </div>

                <div class="bg-white p-2 flex justify-center items-center rounded-full">
                    <img
                        class="w-8"
                        src="/src/assets/img/avatar.png"
                    />
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
    import router from '/@/routes.js'

    let username = $ref('')

    const getUser = () => {
        let user = localStorage['saskaitisana_user']

        return JSON.parse(user).user
    }

    username = getUser().username

    const logout = () => {
        localStorage.removeItem('saskaitisana_user')

        router.push({
            name: 'login'
        })
    }
</script>
