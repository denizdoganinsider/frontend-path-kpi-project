<template>
  <div class="w-48 bg-white shadow rounded overflow-hidden">
    <img :src="posterUrl" alt="poster" class="w-full h-64 object-cover" />
    <div class="p-2">
      <p class="font-semibold truncate">{{ title }}</p>
      <div class="flex items-center gap-1 text-sm">
        ⭐ <span>{{ rating }}/10</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['title', 'posterUrl', 'rating'])
</script>
