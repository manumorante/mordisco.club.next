import { albums } from '../../../data/albums.json'

export default function handler(req, res) {
  const id = parseInt(req.query.id)

  const filtered = albums.filter((p) => parseInt(p.id) === id)

  // User with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `Album with id: ${id} not found.` })
  }
}
