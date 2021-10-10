import adapter from '@sveltejs/adapter-static';
import path from 'path';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    appDir: 'internal',
    // paths: {
    //   base: '/svelte-ui-tailwindcss/build'
    // },
    target: '#svelte',
    vite: {
      resolve: {
        alias: {
          $components: path.resolve('./src/components'),
          $lib: path.resolve('./src/lib'),
          $theme: path.resolve('./src/theme'),
        }
      }
    }
  },

  preprocess: [
    preprocess({
      postcss: true
    })
  ]
};

export default config;