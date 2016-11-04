import fs from 'fs-extra';

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

module.exports = (pages, callback) => {
  copyRootAssets();
  callback();
};
