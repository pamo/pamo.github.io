import fs from 'fs-extra'

function copyRootAssets () {
  const files = ['CNAME', 'README.md']
  const path = 'public/'

  files.forEach((file) => {
    fs.copy(file, `${path}${file}`, (error) => {
      if (error) console.log(error)
      console.log(`copying ${file} to ${path}`)
    })
  })
}
module.exports = (pages, callback) => {
  copyRootAssets()
  callback()
}
