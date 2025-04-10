import axios from 'axios'

const API_KEY = 'YOUR_API_KEY'
const BASE = 'https://api.themoviedb.org/3'

export async function fetchMovies(type = 'popular') {
  const res = await axios.get(`${BASE}/movie/${type}?api_key=${API_KEY}`)
  return res.data.results
}
