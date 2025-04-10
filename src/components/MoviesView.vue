<template>
  <SearchBar @search="onSearch"/>
  <CategorySelector :selected="selected" @select="onSelect" />
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <MovieCard
      v-for="movie in movies"
      :key="movie.id"
      :title="movie.title"
      :posterUrl="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
      :rating="movie.vote_average"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { fetchMovies } from '../composables/useMovies'
import SearchBar from '../components/SearchBar.vue'
import CategorySelector from '../components/CategorySelector.vue'
import MovieCard from '../components/MovieCard.vue'

const selected = ref('Popular')
const movies = ref([])

const loadMovies = async () => {
  const type = selected.value.toLowerCase().replace(' ', '_')
  movies.value = await fetchMovies(type)
}

const onSelect = (tab) => {
  selected.value = tab
  loadMovies()
}

onMounted(loadMovies)
</script>
