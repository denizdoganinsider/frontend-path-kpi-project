<template>
  <div class="flex flex-wrap gap-2 mb-4">
    <button
      v-for="option in options"
      :key="option.label"
      @click="select(option)"
      :class="[
        'px-4 py-2 rounded-lg text-sm',
        selected.label === option.label ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'
      ]"
    >
      {{ option.label }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['change'])

const options = [
  { label: 'Popular Movies', type: 'movie', category: 'popular' },
  { label: 'Top Rated Movies', type: 'movie', category: 'top_rated' },
  { label: 'Popular TV Shows', type: 'tv', category: 'popular' },
  { label: 'Top Rated TV Shows', type: 'tv', category: 'top_rated' },
]

const selected = ref(options[0])
emit('change', selected.value)

function select(option) {
  selected.value = option
  emit('change', option)
}
</script>
