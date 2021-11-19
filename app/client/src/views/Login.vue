<template>
    <div class="h-screen bg-gray-100">
        <div class="max-w-2xl mx-auto">
            <div class="flex flex-col justify-center items-center h-screen">
                <div class="bg-blue-gradient w-full p-5 rounded-lg flex relative h-52 flex items-center px-10">
                    <h1 class="text-white font-medium text-4xl">
                        Saskaitīšanas spēle
                    </h1>

                    <img
                        src="/src/assets/img/math-illustration.png"
                        class="absolute top-[-85px] right-[40px] w-56"
                        alt="Math illustration"
                    />
                </div>

                <div class="bg-white rounded-lg shadow-lg p-12 mt-10">
                    <div class="flex justify-center">
                        <div class="bg-gray-200 rounded-md p-1 inline-block">
                            <div class="flex">
                                <div
                                    tabindex="1"
                                    class="px-5 py-1 rounded-md font-medium cursor-default mr-1 select-none"
                                    :class="{ 'bg-white shadow text-primary': authType == 'login',
                                              'text-gray-700 hover:bg-white/40 active:hover:bg-gray-200': authType != 'login' }"
                                    @click="changeAuthType('login')">
                                    Ienākt
                                </div>

                                <div
                                    tabindex="1"
                                    class="px-5 py-1 rounded-md font-medium cursor-default mr-1 select-none"
                                    :class="{ 'bg-white shadow text-primary': authType == 'register',
                                              'text-gray-700 hover:bg-white/40 active:hover:bg-gray-200': authType != 'register' }"
                                    @click="changeAuthType('register')">
                                    Reģistratūra
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col gap-3 mt-5">
                        <input
                            tabindex="3"
                            type="text"
                            v-model="username"
                            class="username rounded-md border-gray-200"
                            placeholder="Lietotājvārds"
                        />

                        <input
                            tabindex="4"
                            type="password"
                            v-model="password"
                            class="password rounded-md border-gray-200"
                            placeholder="Parole"
                        />

                        <div
                            v-if="authType == 'login'"
                            tabindex="5"
                            class="flex justify-center items-center font-medium bg-primary text-white rounded-md text-center px-4 py-3 cursor-default hover:bg-primary/90 transition active:hover:bg-blue-500 active:hover:shadow-inset select-none">

                            <div v-if="!isLoading">Ienākt</div>
                            <div v-else class="loader"></div>
                        </div>

                        <div
                            v-if="authType == 'register'"
                            @click="onRegisterClick"
                            tabindex="5"
                            class="flex justify-center items-center font-medium bg-primary text-white rounded-md text-center px-4 h-[45px] py-3 cursor-default hover:bg-primary/90 transition active:hover:bg-blue-500 active:hover:shadow-inset select-none">

                            <div v-if="!isLoading">Reģistrēties</div>
                            <div v-else class="loader"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted } from 'vue'
    import { useRegister } from '/@/app/auth/register.js'
    import { useLogin } from '/@/app/auth/login.js'

    let username = $ref('')
    let password = $ref('')
    let authType = $ref('login')
    let isLoading = $ref(false)

    const { register }  = useRegister()
    const { login }     = useLogin()

    const changeAuthType = (type) => {
        authType = type
        focusUsername()
    }

    const focusUsername = () => {
        document.querySelector('.username').focus()
    }

    const onRegisterClick = async () => {
        isLoading = true

        await register(username, password)
        await login(username, password)

        isLoading = false
    }

    onMounted(() => {
        focusUsername()
    })
</script>
