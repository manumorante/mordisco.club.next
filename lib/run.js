const fs = require('fs')
const sizeOf = require('image-size')

function randomizeArray(arr) {
  return arr
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
}

const TODAY = new Date()

let DATA = {
  created_at: TODAY,
  albums: [],
}

const root = 'public/albums'

function createAlbum(root, folder, albumID) {
  const path = root + '/' + folder
  const event_date = new Date(folder)

  let album = {
    date: event_date,
    created_at: TODAY,
    id: albumID,
    path: path.replace('public', ''),
  }

  let files = fs.readdirSync(path)
  let photoID = 0
  let minHeight = 6000
  let photos = []

  // Randomize the order of the photos
  files = randomizeArray(files)

  files.forEach(function (file) {
    const ext = file.split('.').pop()
    if (ext === 'jpg') {
      const size = sizeOf(path + '/' + file)

      // Calculating the minimum height
      minHeight = size.height < minHeight ? size.height : minHeight

      photos.push({
        type: 'photo',
        id: photoID,
        albumID: albumID,
        width: size.width,
        height: size.height,
        big: (path + '/' + file).replace('public', ''),
        small: (path + '/s/' + file).replace('public', ''),
      })
      photoID = photoID + 1
    }
  })

  album.minHeight = minHeight
  album.photos = photos

  return album
}

function getAlbums() {
  const files = fs.readdirSync(root)
  let albumID = 0
  files.forEach(function (file) {
    if (fs.statSync(root + '/' + file).isDirectory()) {
      DATA.albums.push(createAlbum(root, file, albumID))
      albumID = albumID + 1
    }
  })

  return DATA
}

const albums = getAlbums()
fs.writeFileSync('public/albums/albums.json', JSON.stringify(albums, null, 2))
