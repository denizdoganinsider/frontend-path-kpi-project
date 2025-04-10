<template>
  <div class="min-h-screen bg-gray-100">
    <nav class="bg-white shadow p-4 flex gap-4">
      <router-link to="/movies" class="text-blue-500 hover:underline">Movies</router-link>
      <router-link to="/tv-shows" class="text-blue-500 hover:underline">TV Shows</router-link>
    </nav>
    <main class="p-4">
      <slot />
    </main>
  </div>
</template>