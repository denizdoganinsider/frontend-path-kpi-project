<template>
  <div class="flex gap-4 mb-4">
    <button
      v-for="tab in tabs"
      :key="tab"
      @click="$emit('select', tab)"
      :class="[
        'px-4 py-2 rounded',
        selected === tab ? 'bg-blue-500 text-white' : 'bg-gray-200'
      ]"
    >
      {{ tab }}
    </button>
  </div>
</template>

<script setup>
defineProps({ selected: String })
const tabs = ['Popular', 'Top Rated']
</script>
