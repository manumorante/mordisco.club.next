// Language: javascript
const fs = require('fs')

const root = 'public/data/albums'

fs.readdirSync(root).forEach(function (album) {
  const album_path = root + '/' + album
  if (fs.statSync(album_path).isDirectory()) {
    // Dentro del album

    myRename(album_path)

    const s_folder = album_path + '/s'
    if (fs.existsSync(s_folder)) {
      myRename(s_folder)
    }
  }
})

function myRename(path) {
  fs.readdirSync(path).forEach(function (file) {
    const isJpg = file.split('.').pop()
    console.log(file)
    if (isJpg === 'JPG') {
      let new_file = file.split('_').pop().toLowerCase()
      new_file = 'mordisco_' + new_file
      fs.renameSync(path + '/' + file, path + '/' + new_file)
    }
  })
}
