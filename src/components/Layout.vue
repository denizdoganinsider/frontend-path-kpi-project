<template>
    <div>
      <nav class="flex justify-between p-4 bg-gray-900 text-white">
        <div class="text-xl font-bold">MovieApp</div>
        <div class="flex gap-4">
          <RouterLink to="/movies" class="hover:underline">Movies</RouterLink>
          <RouterLink to="/tv-shows" class="hover:underline">TV Shows</RouterLink>
        </div>
      </nav>
      <div class="bg-gray-800 p-8">
        <SearchBar />
      </div>
      <main class="p-4">
        <slot />
      </main>
    </div>
  </template>
  
  <script setup>
  import SearchBar from './SearchBar.vue'
  </script>
  