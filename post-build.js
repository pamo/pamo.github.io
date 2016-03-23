import async from 'async'
import fs from 'fs-extra'
import glob from 'glob'
import Imagemin from 'imagemin'

function minifyImages(pages, callback) {
  const optimize = function optimizeImage(image, destination) {
    return new Imagemin()
      .src(image)
      .dest(destination)
      .use(Imagemin.jpegtran({
        progressive: true,
      }))
      .run((error) => {
        if (error) callback(error)
      })
  }

  pages.forEach((page) => {
    const directory = `${__dirname}/pages/${page.file.dirname}/`
    let destination = `${__dirname}/public/`
    if (page.path) { destination = `${destination}${page.path}/` }
    const globString = `${directory}?(*.jpg|*.png|*.pdf|*.gif|*.ico|*.svg)`

    glob(globString, null, (e, files) => {
      async.map(files, (image) => {
        optimize(image, destination)
      }, (error, results) => callback(error, results))
    })
  })
}

function copyRootAssets() {
  const files = ['CNAME', 'README.md', 'keybase.txt']
  const publicPath = 'public/'

  files.forEach((file) => {
    fs.copy(file, `${publicPath}${file}`, (error) => {
      if (error) console.log(error)
      console.log(`copying ${file} to ${publicPath}`)
    })
  })
}

module.exports = (pages, callback) => {
  copyRootAssets()
  minifyImages(pages, callback)
  callback()
}
