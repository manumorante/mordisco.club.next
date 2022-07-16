import fs from 'fs'
import path from 'path'

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
  const { id } = req.query
  const dir = path.resolve('./public', 'albums')
  const files = fs.readdirSync(dir)
  const dirs = files.filter((file) => fs.statSync(path.join(dir, file)).isDirectory())
  const album = dirs[parseInt(id)]
  const albumFiles = fs.readdirSync(path.join(dir, album))
  const photos = albumFiles.filter((file) => file.endsWith('.jpg'))
  const photosData = photos.map((photo) => {
    return {
      name: photo,
      path: `/albums/${album}/${photo}`,
    }
  })

  const albumData = {
    id: id,
    name: album,
    total: photos.length,
    photos: photosData,
  }

  res.statusCode = 200
  res.json(albumData)
}
