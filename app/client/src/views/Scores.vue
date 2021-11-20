<template>
    <div class="h-screen bg-math bg-cover flex flex-col items-center">
        <game-header />

        <div class="bg-white p-5 mt-10 rounded-lg shadow-md w-[600px]">
            <h1 class="text-2xl mb-5 font-medium text-center">
                Rezultāti
            </h1>

            <div class="flex justify-between text-lg border-b border-gray-200 py-2 text-gray-700 mb-2">
                <div>Vārds</div>
                <div>Punkti</div>
            </div>

            <div
                v-for="score in scores"
                class="flex justify-between text-xl py-3 text-gray-800">

                <div>{{ score.user.username }}</div>
                <div>{{ score.score }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import GameHeader from '/@/components/GameHeader.vue'
    import ScoreApi from '/@/api/score'

    let scores = $ref([])

    const loadScores = async () => {
        const result = await ScoreApi.get()

        scores = result.data
    }

    loadScores()
</script>
