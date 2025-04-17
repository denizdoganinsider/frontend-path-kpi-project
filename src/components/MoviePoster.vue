<template>
    <div class="relative w-40">
      <img :src="posterUrl" alt="poster" class="rounded-lg" />
      <button
        @click="toggleFavorite(movie)"
        class="absolute top-2 right-2 bg-black/60 p-1 rounded-full"
      >
        <span v-if="isFavorite(movie.id)">⭐</span>
        <span v-else>☆</span>
      </button>
      <Rating :value="movie.vote_average" />
      <div class="text-white mt-2 text-sm truncate">{{ movie.title || movie.name }}</div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { useFavoritesStore } from '@/stores/favorites'
  import Rating from './Rating.vue'
  
  const props = defineProps({ movie: Object })
  const store = useFavoritesStore()
  
  const isFavorite = store.isFavorite
  const toggleFavorite = store.toggleFavorite
  
  const posterUrl = computed(() =>
    props.movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${props.movie.poster_path}`
      : '/no-image.jpg'
  )
  </script>
  