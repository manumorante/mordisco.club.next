import { albums } from '../../../data/albums.json'

export default function handler(req, res) {
  res.status(200).json(albums)
}
