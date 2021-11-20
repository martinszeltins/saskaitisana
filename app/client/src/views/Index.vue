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
                            {{ time }}
                        </div>
                    </div>
                </div>

                <div
                    class="inline-block w-[165px] bg-white text-gray-700 rounded-xl py-4 px-6 border-2 border-gray-300 transition cursor-default select-none"
                    :class="{ 'pulse-points': isGameEnded }">

                    <div class="flex items-center">
                        <img
                            class="w-10"
                            src="/src/assets/img/score-icon.png"
                        />

                        <div class="ml-4 text-2xl">
                            {{ score }}
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
                            {{ level }}
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="!isGameEnded" class="text-6xl font-semibold text-gray-700 tracking-widest mt-10 ml-10 select-none">
                {{ numberOne }} + {{ numberTwo }} = {{ answer }}
            </div>

            <div v-if="isGameEnded" class="shake text-6xl font-semibold text-gray-700 tracking-widest mt-10 ml-10 select-none">
                Laiks beidzies!
            </div>

            <div class="grid grid-cols-4 grid-rows-4 w-[600px] mt-20 gap-[1px]">
                <div @click="addNumberToAnswer('7')" tabindex="1" class="bg-[#329cfd] text-white flex justify-center items-center h-[130px] text-3xl font-medium shadow rounded select-none cursor-default active:hover:shadow-inset-sm active:hover:bg-[#3294ef]">
                    7
                </div>

                <div @click="addNumberToAnswer('8')" class="bg-[#329cfd] text-white flex justify-center items-center h-[130px] text-3xl font-medium shadow rounded select-none cursor-default active:hover:shadow-inset-sm active:hover:bg-[#3294ef]">
                    8
                </div>

                <div @click="addNumberToAnswer('9')" class="bg-[#329cfd] text-white flex justify-center items-center h-[130px] text-3xl font-medium shadow rounded select-none cursor-default active:hover:shadow-inset-sm active:hover:bg-[#3294ef]">
                    9
                </div>

                <div class="h-[130px]">

                </div>

                <div @click="addNumberToAnswer('4')" class="bg-[#329cfd] text-white flex justify-center items-center h-[130px] text-3xl font-medium shadow rounded select-none cursor-default active:hover:shadow-inset-sm active:hover:bg-[#3294ef]">
                    4
                </div>

                <div @click="addNumberToAnswer('5')" class="bg-[#329cfd] text-white flex justify-center items-center h-[130px] text-3xl font-medium shadow rounded select-none cursor-default active:hover:shadow-inset-sm active:hover:bg-[#3294ef]">
                    5
                </div>

                <div @click="addNumberToAnswer('6')" class="bg-[#329cfd] text-white flex justify-center items-center h-[130px] text-3xl font-medium shadow rounded select-none cursor-default active:hover:shadow-inset-sm active:hover:bg-[#3294ef]">
                    6
                </div>

                <div class="h-[130px]">

                </div>

                <div @click="addNumberToAnswer('1')" class="bg-[#329cfd] text-white flex justify-center items-center h-[130px] text-3xl font-medium shadow rounded select-none cursor-default active:hover:shadow-inset-sm active:hover:bg-[#3294ef]">
                    1
                </div>

                <div @click="addNumberToAnswer('2')" class="bg-[#329cfd] text-white flex justify-center items-center h-[130px] text-3xl font-medium shadow rounded select-none cursor-default active:hover:shadow-inset-sm active:hover:bg-[#3294ef]">
                    2
                </div>

                <div @click="addNumberToAnswer('3')" class="bg-[#329cfd] text-white flex justify-center items-center h-[130px] text-3xl font-medium shadow rounded select-none cursor-default active:hover:shadow-inset-sm active:hover:bg-[#3294ef]">
                    3
                </div>

                <div class="h-[130px]">

                </div>

                <div @click="addNumberToAnswer('0')" class="bg-[#329cfd] text-white flex justify-center items-center h-[130px] text-3xl font-medium shadow rounded select-none cursor-default active:hover:shadow-inset-sm active:hover:bg-[#3294ef]">
                    0
                </div>

                <div @click="submitAnswer" class="bg-[#329cfd] col-span-2 text-white flex justify-center items-center h-[130px] text-3xl font-medium shadow rounded select-none cursor-default active:hover:shadow-inset-sm active:hover:bg-[#3294ef]">
                    Saskaitīt
                </div>

                <div @click="resetAnswer" class="bg-[#329cfd] text-white flex justify-center items-center h-[130px] text-3xl font-medium shadow rounded select-none cursor-default active:hover:shadow-inset-sm active:hover:bg-[#3294ef]">
                    Dzēst
                </div>
            </div>
        </div>
    </div>

    <img
        v-if="sadEmojiVisible"
        class="absolute-center-y w-56 left-[700px]"
        src="/src/assets/img/sad-emoji.webp"
    />
</template>

<script setup>
    import GameHeader from '/@/components/GameHeader.vue'
    import { useSaveScore } from '/@/app/saveScore'

    let isGameStarted = $ref(false)
    let isGameEnded = $ref(false)
    let time = $ref(0)
    let score = $ref(0)
    let level = $ref(1)
    let timerInterval = $ref(null)
    let numberOne = $ref(0)
    let numberTwo = $ref(0)
    let answer = $ref('')
    let sadEmojiVisible = $ref(false)

    const { saveScore } = useSaveScore()

    const startGame = () => {
        time = 3000
        score = 0
        level = 1

        generateRandomNumbers()

        timerInterval = setInterval(() => {
            time -= 100

            increaseLevelAsTimeRunsOut()
            endGameWhenTimeRunsOut()
        }, 100)

        isGameStarted = true
    }

    const generateRandomNumbers = () => {
        let min
        let max

        if (level == 1) {
            min = 1
            max = 5
        } else if (level == 2) {
            min = 6
            max = 12
        } else if (level == 3) {
            min = 10
            max = 50
        } else if (level == 4) {
            min = 100
            max = 500
        } else if (level == 5) {
            min = 1000
            max = 5000
        }

        numberOne = Math.floor(Math.random() * (max - min + 1)) + min
        numberTwo = Math.floor(Math.random() * (max - min + 1)) + min
    }

    const increaseLevelAsTimeRunsOut = () => {
        if (time == 2500 || time == 2000 || time == 1500 || time == 1000) {
            level += 1
        }
    }

    const addNumberToAnswer = number => {
        answer = answer + number
    }

    const resetAnswer = () => {
        answer = ''
    }

    const submitAnswer = () => {
        if (isAnswerCorrect() === true) {
            increaseScore()
        } else {
            showSadEmoji()
        }

        resetAnswer()
        generateRandomNumbers()
    }

    const isAnswerCorrect = () => {
        if (numberOne + numberTwo === parseInt(answer)) {
            return true
        }

        return false
    }

    const increaseScore = () => {
        if (level === 1) {
            score += 11
        } else if (level === 2) {
            score += 15
        } else if (level === 3) {
            score += 20
        } else if (level === 4) {
            score += 25
        } else if (level === 5) {
            score += 50
        }
    }

    const showSadEmoji = () => {
        sadEmojiVisible = true

        setTimeout(() => {
            sadEmojiVisible = false
        }, 1000)
    }

    const endGameWhenTimeRunsOut = () => {
        if (time === 0) {
            clearInterval(timerInterval)
            isGameEnded = true

            setTimeout(async () => {
                await saveScore(score)


            }, 2000)
        }
    }
</script>
