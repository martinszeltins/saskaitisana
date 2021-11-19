<template>
    <div class="inline-block bg-blue-gradient rounded-xl w-[98%] mx-auto shadow-md py-8 px-10 mt-4">
        <div class="flex justify-between items-center">
            <div class="text-white text-3xl font-medium">
                Saskaitīšana
            </div>

            <div class="flex items-center">
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
    let username = $ref('')

    const getUser = () => {
        let user = localStorage['saskaitisana_user']

        return JSON.parse(user).user
    }

    username = getUser().username
</script>
