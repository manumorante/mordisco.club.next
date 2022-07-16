export async function fetcher(req) {
  const server = 'http://localhost:3000'
  const url = `${server}/api/${req}`
  const res = await fetch(url)
  const data = await res.json()
  return data
}

export async function fetchAlbums() {
  const albums = await fetcher('albums')
  return albums
}

export async function fetchAlbum(id) {
  const album = await fetcher(`albums/${id}`)
  return album
}
