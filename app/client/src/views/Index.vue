<template>
    <div class="h-screen bg-math bg-cover flex flex-col items-center">
        <game-header />

        <!-- Game Menu -->
        <div v-if="!isGameStarted" class="h-screen flex">
            <div class="flex items-center">
                <div
                    @click="startGame"
                    tabindex="1"
                    class="inline-block mr-4 bg-white text-gray-700 rounded-xl py-4 px-6 border-2 border-gray-300 hover:border-gray-400 transition cursor-default select-none active:hover:shadow-inset-sm">

                    <div class="flex items-center">
                        <img
                            class="w-10"
                            src="/src/assets/img/start-icon.png"
                        />

                        <div class="ml-4 text-xl">
                            Sākt spēli
                        </div>
                    </div>
                </div>

                <div
                    tabindex="2"
                    class="inline-block bg-white text-gray-700 rounded-xl py-4 px-6 border-2 border-gray-300 hover:border-gray-400 transition cursor-default select-none active:hover:shadow-inset-sm">

                    <div class="flex items-center">
                        <img
                            class="w-10"
                            src="/src/assets/img/results-icon.png"
                        />

                        <div class="ml-4 text-xl">
                            Rezultāti
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Game Started -->
        <div
            v-if="isGameStarted"
            class="w-[98%] mt-6">

            <div class="flex gap-4">
                <div
                    class="inline-block w-[165px] bg-white text-gray-700 rounded-xl py-4 px-6 border-2 border-gray-300 transition cursor-default select-none">

                    <div class="flex items-center">
                        <img
                            class="w-10"
                            src="/src/assets/img/time-icon.png"
                        />

                        <div class="ml-4 text-2xl">
                            2946
                        </div>
                    </div>
                </div>

                <div
                    class="inline-block w-[165px] bg-white text-gray-700 rounded-xl py-4 px-6 border-2 border-gray-300 transition cursor-default select-none">

                    <div class="flex items-center">
                        <img
                            class="w-10"
                            src="/src/assets/img/score-icon.png"
                        />

                        <div class="ml-4 text-2xl">
                            550
                        </div>
                    </div>
                </div>

                <div
                    class="inline-block w-[165px] bg-white text-gray-700 rounded-xl py-4 px-6 border-2 border-gray-300 transition cursor-default select-none">

                    <div class="flex items-center">
                        <img
                            class="w-10"
                            src="/src/assets/img/level-icon.png"
                        />

                        <div class="ml-4 text-2xl">
                            4
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-6xl font-semibold text-gray-700 tracking-widest mt-10 ml-10 select-none">
                125 + 786
            </div>

            <div class="grid grid-cols-4 grid-rows-4 w-[600px] mt-20 gap-[1px]">
                <div tabindex="1" class="bg-[#329cfd] text-white flex justify-center items-center h-[130px] text-3xl font-medium shadow rounded select-none cursor-default active:hover:shadow-inset-sm active:hover:bg-[#3294ef]">
                    7
                </div>

                <div class="bg-[#329cfd] text-white flex justify-center items-center h-[130px] text-3xl font-medium shadow rounded select-none cursor-default active:hover:shadow-inset-sm active:hover:bg-[#3294ef]">
                    8
                </div>

                <div class="bg-[#329cfd] text-white flex justify-center items-center h-[130px] text-3xl font-medium shadow rounded select-none cursor-default active:hover:shadow-inset-sm active:hover:bg-[#3294ef]">
                    9
                </div>

                <div class="h-[130px]">

                </div>

                <div class="bg-[#329cfd] text-white flex justify-center items-center h-[130px] text-3xl font-medium shadow rounded select-none cursor-default active:hover:shadow-inset-sm active:hover:bg-[#3294ef]">
                    4
                </div>

                <div class="bg-[#329cfd] text-white flex justify-center items-center h-[130px] text-3xl font-medium shadow rounded select-none cursor-default active:hover:shadow-inset-sm active:hover:bg-[#3294ef]">
                    5
                </div>

                <div class="bg-[#329cfd] text-white flex justify-center items-center h-[130px] text-3xl font-medium shadow rounded select-none cursor-default active:hover:shadow-inset-sm active:hover:bg-[#3294ef]">
                    6
                </div>

                <div class="h-[130px]">

                </div>

                <div class="bg-[#329cfd] text-white flex justify-center items-center h-[130px] text-3xl font-medium shadow rounded select-none cursor-default active:hover:shadow-inset-sm active:hover:bg-[#3294ef]">
                    1
                </div>

                <div class="bg-[#329cfd] text-white flex justify-center items-center h-[130px] text-3xl font-medium shadow rounded select-none cursor-default active:hover:shadow-inset-sm active:hover:bg-[#3294ef]">
                    2
                </div>

                <div class="bg-[#329cfd] text-white flex justify-center items-center h-[130px] text-3xl font-medium shadow rounded select-none cursor-default active:hover:shadow-inset-sm active:hover:bg-[#3294ef]">
                    3
                </div>

                <div class="h-[130px]">

                </div>

                <div class="bg-[#329cfd] text-white flex justify-center items-center h-[130px] text-3xl font-medium shadow rounded select-none cursor-default active:hover:shadow-inset-sm active:hover:bg-[#3294ef]">
                    0
                </div>

                <div class="bg-[#329cfd] col-span-2 text-white flex justify-center items-center h-[130px] text-3xl font-medium shadow rounded select-none cursor-default active:hover:shadow-inset-sm active:hover:bg-[#3294ef]">
                    Saskaitīt
                </div>

                <div class="bg-[#329cfd] text-white flex justify-center items-center h-[130px] text-3xl font-medium shadow rounded select-none cursor-default active:hover:shadow-inset-sm active:hover:bg-[#3294ef]">
                    Dzēst
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import GameHeader from '/@/components/GameHeader.vue'

    let isGameStarted = $ref(false)

    const startGame = () => {
        isGameStarted = true
    }
</script>
