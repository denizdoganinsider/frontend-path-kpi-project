<template>
    <Layout>
      <SearchBar @search="fetchResults" />
      <SearchResults :results="searchResults" />
    </Layout>
  </template>
  
  <script setup>
  import SearchBar from '@/components/SearchBar.vue'
  import SearchResults from '@/components/SearchResults.vue'
  import Layout from '@/components/Layout.vue'
  import { ref } from 'vue'
  
  const searchResults = ref([])
  
  async function fetchResults(query) {
    const res = await fetch(`https://api.themoviedb.org/3/search/multi?query=${query}&api_key=YOUR_API_KEY`)
    const data = await res.json()
    searchResults.value = data.results
  }
  </script>
  