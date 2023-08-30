/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
         colors: {
            transparent: 'transparent',
            black: '#000',
            white: '#fff',
            primary: '#D69E47',
            secondary: {
               900: '#181E4B',
               800: '#242e75',
               700: '#5E6282 '
            },
         },
         fontFamily: {
            fontBody: ['Poppins'],
            fontHeadline: ['Volkhov']
         },
         fontSize: {
            fsBody: '1.125rem',
            fsHeadline: '3rem',
            fsTitle: '4rem'
         }
      },
	},
	plugins: [],
}
