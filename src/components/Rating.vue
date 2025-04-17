<template>
    <div class="text-yellow-400 font-bold text-sm mt-1">
      ⭐ {{ value.toFixed(1) }}
    </div>
  </template>
  
  <script setup>
  defineProps({ value: Number })
  </script>
  