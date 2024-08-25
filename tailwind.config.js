/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './node_modules/flowbite/**/*.js',
        './**/*.{html,js}' //
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#fff6ed',
                    100: '#ffecd4',
                    200: '#ffd4a8',
                    300: '#ffb571',
                    400: '#FF8025',
                    500: '#fe6a11',
                    600: '#ef4f07',
                    700: '#c63908',
                    800: '#9d2e0f',
                    900: '#7e2810',
                    950: '#441106'
                }
            }
        },
        fontFamily: {
            body: [
                'Inter',
                'ui-sans-serif',
                'system-ui',
                '-apple-system',
                'system-ui',
                'Segoe UI',
                'Roboto',
                'Helvetica Neue',
                'Arial',
                'Noto Sans',
                'sans-serif',
                'Apple Color Emoji',
                'Segoe UI Emoji',
                'Segoe UI Symbol',
                'Noto Color Emoji'
            ],
            sans: [
                'Inter',
                'ui-sans-serif',
                'system-ui',
                '-apple-system',
                'system-ui',
                'Segoe UI',
                'Roboto',
                'Helvetica Neue',
                'Arial',
                'Noto Sans',
                'sans-serif',
                'Apple Color Emoji',
                'Segoe UI Emoji',
                'Segoe UI Symbol',
                'Noto Color Emoji'
            ]
        }
    },
    plugins: [require('flowbite/plugin')]
};
