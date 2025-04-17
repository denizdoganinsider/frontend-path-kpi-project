import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFavoritesStore = defineStore('favorites', () => {
  const favorites = ref([])

  function toggleFavorite(movie) {
    const exists = favorites.value.find(item => item.id === movie.id)
    if (exists) {
      favorites.value = favorites.value.filter(item => item.id !== movie.id)
    } else {
      favorites.value.push(movie)
    }
  }

  function isFavorite(id) {
    return favorites.value.some(item => item.id === id)
  }

  return { favorites, toggleFavorite, isFavorite }
})
