<template>
  <div class="max-w-3xl mx-auto">
    <input
      v-model="query"
      @input="onInput"
      type="text"
      placeholder="Search for a movie or TV show..."
      class="w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useDebounceFn } from '@vueuse/core'

const query = ref('')
const emit = defineEmits(['search'])

const debouncedSearch = useDebounceFn(() => {
  if (query.value.length > 2) emit('search', query.value)
}, 500)

function onInput() {
  debouncedSearch()
}
</script>
