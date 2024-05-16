/** @type {import('tailwindcss').Config} */

export default {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    content: [
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        extend: {},
        fontFamily: {
            mono: ['Cascadia Mono', 'monospace'],
            roboto: ['Roboto'],
        }
    },
    plugins: [
        require('flowbite/plugin')
    ]
}

