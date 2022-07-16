import fs from 'fs'
import path from 'path'

// eslint-disable-next-line import/no-anonymous-default-export
export default (_req, res) => {
  const dir = path.resolve('./public', 'albums')
  const files = fs.readdirSync(dir)

  let id = 0
  const data = []

  files.map((album) => {
    if (!fs.statSync(path.join(dir, album)).isDirectory()) return

    const photos = fs.readdirSync(path.join(dir, album))
    const date = new Date(album)
    const month = date.toLocaleString('es-ES', { month: 'long' })
    const year = date.getFullYear()

    data.push({
      id: id,
      title: `${month}, ${year}`,
      description: `${photos.length} fotos en ${month} del ${year}`,
      total: photos.length,
      date: date,
    })
    id = id + 1
  })

  res.statusCode = 200
  res.json(data)
}
