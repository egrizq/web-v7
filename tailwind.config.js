/** @type {import('tailwindcss').Config} */

export default {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    content: [
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
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

