/* eslint-disable indent */
/* eslint-disable comma-dangle */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            lightCyan: 'hsl(193, 38%, 86%)',
            neonGreen: 'hsl(150, 100%, 66%)',
            grayishBLue: 'hsl(217, 19%, 38%)',
            DarkGrayishBlue: ' hsl(217, 19%, 24%)',
            DarkBlue: 'hsl(218, 23%, 16%)',
        },
        fontSize: {
            base: '28px',
        },
        fontFamily: {
            Manrope: ['Manrope', 'sans-serif'],
        },
        boxShadow: {
            base: '0px 0px 40px #53FFAA',
            card: '30px 50px 80px rgba(0, 0, 0, 0.100202)',
        },
        extend: {},
    },
    plugins: [],
}
