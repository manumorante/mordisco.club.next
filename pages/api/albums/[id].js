import fs from 'fs'
import path from 'path'

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
  const { id } = req.query
  const dir = path.resolve('./data')
  const data = JSON.parse(fs.readFileSync(path.join(dir, 'albums.json')))

  res.statusCode = 200
  res.json(data.albums[parseInt(id)])
}
