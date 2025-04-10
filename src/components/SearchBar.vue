<template>
  <div class="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-xl shadow-md mb-6">
    <input
      v-model="query"
      @keyup.enter="$emit('search', query)"
      type="text"
      placeholder="Search for Movies or TV Shows..."
      class="w-full p-4 rounded-lg text-lg"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const query = ref('')
</script>
