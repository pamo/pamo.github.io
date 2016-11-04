import fs from 'fs-extra';
import imagemin from 'imagemin';
import mozJPEG from 'imagemin-mozjpeg';
import path from 'path';

function copyRootAssets() {
  const files = ['CNAME', 'README.md', 'keybase.txt'];
  const publicPath = 'public/';

  files.forEach((file) => {
    fs.copy(file, `${publicPath}${file}`, (error) => {
      if (error) console.log(error);
      console.log(`copying ${file} to ${publicPath}`);
    });
  });
}

function optimizeImages(pages) {
  const routes = pages.filter(p => p.path !== undefined);
  routes.map(route => imagemin([`${path.join(__dirname, 'pages', route.file.dir)}/*.jpg`], path.join(__dirname, 'public', route.path), {
    plugins: [mozJPEG({
      quality: 65,
    })],
  }).then(files => console.log(`optimized ${files.length} images for ${route.path}`)));
}

module.exports = (pages, callback) => {
  copyRootAssets();
  optimizeImages(pages);
  callback();
};
