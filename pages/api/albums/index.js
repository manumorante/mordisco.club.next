import data from '../../../data/albums.json'

export default function handler(req, res) {
  const albums = [...data.albums]
  res.status(200).json(albums)
}
