module.exports = {
    mode: 'jit',
    purge: ['./index.html', './src/**/*.{vue,js}'],
    darkMode: false,

    theme: {
        extend: {
            colors: {
                "primary": "#3f8cfe",
            },

            backgroundImage: {
                "blue-gradient": "linear-gradient(90deg, rgba(51,152,253,1) 0%, rgba(92,205,244,1) 100%);",
                "math": "url(/src/assets/img/bg-math.jpg)",
            },

            boxShadow: {
                "inset": "#00000026 4px 4px 17px 0px inset",
                "inset-sm": "#00000017 4px 4px 10px 0px inset",
            },
        },
    },

    variants: {
        extend: {},
    },

    plugins: [
        require('@tailwindcss/forms'),
    ],
}
