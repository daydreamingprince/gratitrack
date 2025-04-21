// again just ignore my ugly comments xD I'll probably remove them in the future. but for now I'll need them

// I'm gonna tell typescript that this is a Tailwind config file
import type { Config } from 'tailwindcss'

// Here would be the actual configuration object
const config: Config = {
  // Telling tailwind where to look for my class names
  content: [
    './app**/.{js,ts,jsx,tsx}',                   // All pages and layouts
    './components/**/*.{js,ts,jsx,tsx}',          // All my components
  ],
  theme: {
    extend: {
      fontFamily: {
        // Add Nunito as our default sans-serif font
        sans: ['var(--font-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],          // We don't have plugins yet; we'll add them later if needed
}

// Export the config so Tailwind will be able to use it
export default config