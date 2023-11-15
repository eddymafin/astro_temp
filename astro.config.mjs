import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  base: "",
  outDir: './dist',
  server: {
    open: true,
  },
  // integrations: [
  //   compress({}),
  //   relativeLinks(),
  // ],
  // vite: {
  //   build: {
  //     rollupOptions: {
  //       output: {
  //         assetFileNames: (assetInfo) => {
  //           let extType = assetInfo.name.split('.')[1];
  //           if (/ttf|otf|eot|woff|woff2/i.test(extType)) {
  //             extType = 'fonts';
  //           }
  //           if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
  //             extType = 'images';
  //           }
  //           if (extType === 'scss') {
  //             return `assets/scss/style.css`;
  //           }
  //           return `assets/${extType}/[name][extname]`;
  //         },
  //       },
  //       entryFileNames: 'assets/js/[name].js',
  //     },
  //   },
  // },
});
