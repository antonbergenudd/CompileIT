import type { Config } from 'tailwindcss'
 
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      minHeight: {
        '2/6': '33.333333%',  // Adds min-h-1/3 class
        '4/6': '66.666666%',  // Adds min-h-1/3 class
        '1/6': '16.666667%'
      },
    },
  },
  plugins: [],
}
export default config