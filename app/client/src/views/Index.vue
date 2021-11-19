<template>
    <div class="h-screen bg-math bg-cover flex flex-col items-center">
        <game-header />

        <div class="h-screen flex">
            <div v-if="!isGameStarted" class="flex items-center">
                <div
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

            <div v-if="isGameStarted">

            </div>
        </div>
    </div>
</template>

<script setup>
    import GameHeader from '/@/components/GameHeader.vue'

    let isGameStarted = $ref(false)
</script>
