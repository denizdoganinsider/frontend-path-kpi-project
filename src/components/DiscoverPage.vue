<template>
    <Layout>
      <CategorySelector @change="onCategoryChange" />
  
      <SearchResults :results="items" />
  
      <div class="flex justify-center mt-6 gap-2">
        <button
          @click="prevPage"
          :disabled="page === 1"
          class="px-3 py-1 bg-gray-700 text-white rounded"
        >
          ‹ Prev
        </button>
        <span class="text-white">Page {{ page }}</span>
        <button
          @click="nextPage"
          class="px-3 py-1 bg-gray-700 text-white rounded"
        >
          Next ›
        </button>
      </div>
    </Layout>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  import Layout from '@/components/Layout.vue'
  import CategorySelector from '@/components/CategorySelector.vue'
  import SearchResults from '@/components/SearchResults.vue'
  
  const items = ref([])
  const category = ref({ type: 'movie', category: 'popular' })
  const page = ref(1)
  
  watch([category, page], fetchItems, { immediate: true })
  
  function onCategoryChange(val) {
    category.value = val
    page.value = 1
  }
  
  function prevPage() {
    if (page.value > 1) page.value--
  }
  
  function nextPage() {
    page.value++
  }
  
  async function fetchItems() {
    const { type, category: cat } = category.value
    const res = await fetch(
      `https://api.themoviedb.org/3/${type}/${cat}?page=${page.value}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`
    )
    const data = await res.json()
    items.value = data.results
  }
  </script>
  