import Score from '/@/api/score'

export function useSaveScore() {
    async function saveScore(score) {
        const user = JSON.parse(localStorage['saskaitisana_user']).user

        await Score.save(user, score)
    }

    return {
        saveScore
    }
}
