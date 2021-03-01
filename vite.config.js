import vue from '@vitejs/plugin-vue'

const { resolve } = require('path')
/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [vue()],
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          about: resolve(__dirname, 'w/about/index.html'),
          reading: resolve(__dirname, 'w/reading/index.html'),
          redirect: resolve(__dirname, 'w/redirect/index.html'),
          result: resolve(__dirname, 'w/result/index.html'),
        }
      }
    }
  }

// === the dumb shit I added myself




/*
main: resolve(__dirname, 'index.html')
about: resolve(__dirname, 'w/about/index.html'),
reading: resolve(__dirname, 'w/reading/index.html'),
redirect: resolve(__dirname, 'w/redirect/index.html'),
result: resolve(__dirname, 'w/result/index.html'),
*/