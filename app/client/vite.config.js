import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [
        vue({
            refTransform: true
        })
    ],

    resolve: {
        alias: {
            '/@': require('path').resolve(__dirname, 'src')
        },
    },

    server: {
        host: true,
    }
})
