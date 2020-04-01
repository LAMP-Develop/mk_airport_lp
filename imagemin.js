const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
const imageminSvgo = require('imagemin-svgo');

(async () => {
  const files = await imagemin(['assets/images/**/*.{jpg,png,svg}'], {
    destination: 'assets/images_min',
    plugins: [
      imageminSvgo(),
      imageminJpegtran(),
      imageminPngquant()
    ]
  });
  console.log(files);
})();