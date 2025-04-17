<template>
    <div v-if="results.length" class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
      <MoviePoster v-for="movie in results" :key="movie.id" :movie="movie" />
    </div>
  </template>
  
  <script setup>
  import MoviePoster from './MoviePoster.vue'
  defineProps({ results: Array })
  </script>
  